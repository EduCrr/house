import React, { useState, useEffect } from "react";
import { HouseArea } from "./style";
import { useParams } from "react-router-dom";
import Menu from "../../components/Menu";
//import { useForm } from "react-hook-form";
import Footer from "../../components/Footer";
import Firebase from "../../firebaseConnection";
import Formulario from "../../components/Formulario";
import Houses from "../Houses";
export default () => {
  const { id } = useParams();
  //const { register, handleSubmit, errors } = useForm();
  const [house, setHouse] = useState({});
  const [imgs, setImgs] = useState([]);

  useEffect(() => {
    async function loadHouse() {
      await Firebase.firestore()
        .collection("testes")
        .doc(id)
        .get()
        .then((doc) => {
          console.log(doc);
          setHouse(doc.data());
          setImgs(doc.data().images);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    loadHouse();
  }, [id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Menu />
      <HouseArea>
        <div className="container">
          <div className="row">
            <div className="col-xl-4 mb-5">
              <h3>{house.nome}</h3>
              <p className="mb-4">
                {house.tamanho} || {house.preco}
              </p>
              <a className="form" href="#contato">
                Faça uma oferta
              </a>
            </div>
            <div className="col-xl-8">
              {imgs.map((item, k) => (
                <img alt="" src={item} />
              ))}
            </div>
          </div>
          <div className="descricao">
            <div className="row">
              <div className="col-xl-4  mb-5">
                <img
                  alt=""
                  style={{ width: "300px", height: "auto" }}
                  src="/assets/planta.jpg"
                />
              </div>
              <div className="col-xl-8">
                <h3 className="mb-4">Informações</h3>
                <h5>Detalhes da casa</h5>
                <p style={{ textTransform: "capitalize" }}>
                  <strong>Estado:</strong> {house.categoria}
                </p>
                <p>
                  <strong>Cidade:</strong> {house.cidade}
                </p>

                <p>
                  <strong>Bairro:</strong> {house.bairro}
                </p>
                <p>
                  <strong>Preço:</strong> {house.preco}
                </p>
                <p>
                  <strong>Banheiros:</strong> {house.banheiro}
                </p>
                <p>
                  <strong>Dorms:</strong> {house.quartos}
                </p>
                <p>
                  <strong>Tamanho:</strong> {house.tamanho}
                </p>
                <p>
                  <strong>Detalhes:</strong> {house.descricao}
                </p>
              </div>
            </div>
          </div>
        </div>
        <video
          style={{ marginTop: "20px", paddingBottom: "5rem" }}
          width="100%"
          height="auto"
          autoPlay
          muted
          loop
        >
          <source src="/assets/houseIntro.mp4" type="video/mp4" />
        </video>
        <Formulario />
      </HouseArea>
      <Footer />
    </>
  );
};
