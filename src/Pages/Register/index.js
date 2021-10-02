import React, { useState, useContext } from "react";
import { RegisterArea } from "./style";
import Menu from "../../components/Menu";
//import { AuthContext } from "../../contexts/auth";
import firebase from "../../firebaseConnection";
import Footer from "../../components/Footer";
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

  let date = Date.now().toString().substr(-4);
  const handlePhotos = (e) => {
    if (e.target.files) {
      for (let i = 0; i < e.target.files.length; i++) {
        setImage((image) => [...image, e.target.files[i]]);
        console.log(e.target.files);
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
    if (
      nome !== "" &&
      preco !== "" &&
      categoria !== "" &&
      cidade !== "" &&
      bairro !== "" &&
      banheiro !== "" &&
      quartos !== "" &&
      tamanho !== "" &&
      image === null &&
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
      handleUploadStorage()
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
  }

  const handleUploadStorage = async () => {
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
            .doc(`${slug}-${date}`)
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
          {image !== null && (
            <div className="preImagesContent col-md-12">
              {url.map((item, k) => (
                <>
                  <img className="preImages" key={k} alt="" src={item} />
                </>
              ))}
            </div>
          )}
          <textarea
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            placeholder="Descrição"
          ></textarea>
          <button className="btnForm">Cadastrar</button>
        </form>
      </RegisterArea>
      <Footer />
    </>
  );
};
