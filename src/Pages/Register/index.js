import React, { useState } from "react";
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
  const [image, setImage] = useState(null);
  const [showImage, setShowImage] = useState(null);
  const [descricao, setDescricao] = useState("");

  const handlePhotos = (e) => {
    let selectedFile = e.target.files[0];
    setShowImage(URL.createObjectURL(e.target.files[0]));
    if (selectedFile) {
      setImage(selectedFile);
    } else {
      setImage(null);
    }
  };

  async function handleRegister(e) {
    e.preventDefault();
    await firebase.storage().ref(`imagens/${image.name}`).put(image);
    await firebase
      .storage()
      .ref("imagens")
      .child(image.name)
      .getDownloadURL()
      .then(async (url) => {
        let img = url;
        await firebase
          .firestore()
          .collection("produtos")
          .add({
            nome,
            categoria,
            preco,
            cidade,
            bairro,
            banheiro,
            quartos,
            tamanho,
            images: img,
            descricao,
          })
          .then(() => {
            setNome("");
            setCategoria("");
            setCidade("");
            setPreco("");
            setBairro("");
            setBanheiro("");
            setQuartos("");
            setTamanho("");
            setImage(null);
            setDescricao("");
          })
          .catch((error) => {
            console.log(error);
          });
      });
  }
  return (
    <>
      <Menu />
      <RegisterArea>
        <h1>Cadastrar nova Casa</h1>
        <form onSubmit={handleRegister}>
          <input
            value={nome}
            onChange={(e) => setNome(e.target.value)}
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
            placeholder="Categoria"
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
          />
          {image !== null && (
            <img
              alt=""
              style={{ width: "220px", height: "220px" }}
              src={showImage}
            />
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

/*
https://softauthor.com/learn-firebase-cloud-storage-quickly-guide/
*/
