import React, { useState, useContext, useEffect } from "react";
import { RegisterArea } from "./style";
import Menu from "../../components/Menu";
//import { AuthContext } from "../../contexts/auth";
import firebase from "../../firebaseConnection";
import Footer from "../../components/Footer";
import { useHistory, useParams } from "react-router-dom";
import DeleteIcon from "@material-ui/icons/Delete";

export default () => {
  const [nome, setNome] = useState("");
  const [categoria, setCategoria] = useState("");
  const [cidade, setCidade] = useState("");
  const [preco, setPreco] = useState("");
  const [bairro, setBairro] = useState("");
  const [banheiro, setBanheiro] = useState("");
  const [quartos, setQuartos] = useState("");
  const [tamanho, setTamanho] = useState("");
  const [image, setImage] = useState([]);
  const [url, setUrl] = useState([]);
  const [descricao, setDescricao] = useState("");
  const [slug, setSlug] = useState("");
  const [idHouse, setIdHouse] = useState(false);
  const { id } = useParams();
  const history = useHistory();

  let date = Date.now().toString().substr(-4);

  const handlePhotos = (e) => {
    if (e.target.files) {
      for (let i = 0; i < e.target.files.length; i++) {
        setImage((image) => [...image, e.target.files[i]]);
        const reader = new FileReader();
        reader.onload = (e) => {
          setUrl((image) => [...image, e.target.result]);
        };
        reader.readAsDataURL(e.target.files[i]);
      }
    } else {
      alert("Sem imagens");
    }
  };

  function setNomeFunction(e) {
    setNome(e);
    setSlug(
      e
        .toLowerCase()
        .normalize("NFD")
        .replace(/([\u0300-\u036f]|[^0-9a-zA-Z\s])/g, "")
        .split(" ")
        .join("-")
    );
  }

  async function handleRegister(e) {
    e.preventDefault();
    if (idHouse === false) {
      if (
        nome !== "" &&
        preco !== "" &&
        categoria !== "" &&
        cidade !== "" &&
        bairro !== "" &&
        banheiro !== "" &&
        quartos !== "" &&
        tamanho !== "" &&
        image.length > 0 &&
        descricao !== ""
      ) {
        await firebase
          .firestore()
          .collection("houses")
          .doc(`${slug}-${date}`)
          .set({
            nome,
            categoria,
            preco,
            cidade,
            bairro,
            banheiro,
            quartos,
            tamanho,
            images: [],
            descricao,
          });
        handleUploadStorage(`${slug}-${date}`)
          .then(() => {
            setNome("");
            setCategoria("");
            setCidade("");
            setPreco("");
            setBairro("");
            setBanheiro("");
            setQuartos("");
            setTamanho("");
            setImage([]);
            setDescricao("");
            setUrl([]);
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        alert("Todos os campos devem ser preenchidos!");
      }
      return;
    } else if (idHouse) {
      await firebase.firestore().collection("houses").doc(id).update({
        nome: nome,
        preco: preco,
        categoria: categoria,
        cidade: cidade,
        bairro: bairro,
        banheiro: banheiro,
        quartos: quartos,
        tamanho: tamanho,
        descricao: descricao,
      });
      handleUploadStorage(id)
        .then(() => {
          setNome("");
          setCategoria("");
          setCidade("");
          setPreco("");
          setBairro("");
          setBanheiro("");
          setQuartos("");
          setTamanho("");
          setImage([]);
          setDescricao("");
          setUrl([]);
          history.push("/admin");
        })
        .catch((error) => {
          console.log("Houve algum erro, tente atualizar mais tarde!");
          console.log(error);
        });
      return;
    }
  }

  const handleUploadStorage = async (id) => {
    const promises = [];
    image.forEach((img) => {
      const uploadTask = firebase
        .storage()
        .ref()
        .child(`imagens/${img.name}`)
        .put(img);
      promises.push(uploadTask);
      uploadTask.on(
        firebase.storage.TaskEvent.STATE_CHANGED,
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          if (snapshot.state === firebase.storage.TaskState.RUNNING) {
            console.log(`Progress: ${progress}%`);
          }
        },
        (error) => console.log(error.code),
        async () => {
          const downloadURL = await uploadTask.snapshot.ref.getDownloadURL();
          console.log(downloadURL);
          firebase
            .firestore()
            .collection("houses")
            .doc(id)
            .update({
              images: firebase.firestore.FieldValue.arrayUnion(downloadURL),
            });
        }
      );
    });
    Promise.all(promises)
      .then(() => alert("Casa cadastrada com sucesso!"))
      .catch((err) => console.log(err.code));
  };

  async function loadId() {
    if (id) {
      await firebase
        .firestore()
        .collection("houses")
        .doc(id)
        .get()
        .then((snapshot) => {
          setNome(snapshot.data().nome);
          setCategoria(snapshot.data().categoria);
          setCidade(snapshot.data().cidade);
          setPreco(snapshot.data().preco);
          setBairro(snapshot.data().bairro);
          setBanheiro(snapshot.data().banheiro);
          setQuartos(snapshot.data().quartos);
          setTamanho(snapshot.data().tamanho);
          setUrl(snapshot.data().images);
          setDescricao(snapshot.data().descricao);
          setIdHouse(true);
        })
        .catch((error) => {
          console.log(error);
          setIdHouse(false);
        });
    }
  }

  async function handleDeleteUrl(item) {
    await firebase
      .firestore()
      .collection("houses")
      .doc(id)
      .update({
        images: firebase.firestore.FieldValue.arrayRemove(item),
      });
  }

  function handleDelete(item, k) {
    let desertRef = firebase.storage().refFromURL(item);

    desertRef
      .delete()
      .then(function () {
        console.log("Deletado");
      })
      .catch(function (error) {
        console.log("Não deletado" + error);
      });
    handleDeleteUrl(item);

    history.push(`/admin/add/${id}`);
  }

  useEffect(() => {
    loadId();
  }, []);

  return (
    <>
      <Menu />
      <RegisterArea>
        <h1>Cadastrar nova Casa</h1>
        <form onSubmit={handleRegister}>
          <input
            value={nome}
            onChange={(e) => setNomeFunction(e.target.value)}
            placeholder="Nome"
            type="text"
          />
          <input
            value={cidade}
            onChange={(e) => setCidade(e.target.value)}
            placeholder="Cidade"
            type="text"
          />
          <input
            value={preco}
            onChange={(e) => setPreco(e.target.value)}
            placeholder="Preço"
            type="text"
          />
          <input
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
            placeholder="Estado"
            type="text"
          />
          <input
            value={bairro}
            onChange={(e) => setBairro(e.target.value)}
            placeholder="Bairro"
            type="text"
          />
          <input
            value={banheiro}
            onChange={(e) => setBanheiro(e.target.value)}
            placeholder="Qtd Banheiro(s)"
            type="text"
          />
          <input
            value={quartos}
            onChange={(e) => setQuartos(e.target.value)}
            placeholder="Dorms"
            type="text"
          />
          <input
            value={tamanho}
            onChange={(e) => setTamanho(e.target.value)}
            placeholder="Tamanho"
            type="text"
          />
          <label htmlFor="arquivo">Enviar arquivos</label>
          <input
            onChange={handlePhotos}
            type="file"
            id="arquivo"
            accept="image/*"
            multiple
          />
          <div className="preImagesContent col-md-12">
            {url.map((item, k) => (
              <>
                <div key={k}>
                  <div className="areImgs">
                    <img alt="" className="preImages" alt="" src={item} />
                    {idHouse ? (
                      <a onClick={() => handleDelete(item, k)}>
                        <DeleteIcon style={{ color: "red" }} />
                      </a>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </>
            ))}
          </div>
          <textarea
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            placeholder="Descrição"
          ></textarea>
          <button className="btnForm">
            {idHouse ? "Atualizar" : "Cadastrar"}
          </button>
        </form>
      </RegisterArea>
      <Footer />
    </>
  );
};
