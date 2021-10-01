import React, { useState, useEffect } from "react";
import { CategoriaArea } from "./style";
import { Link } from "react-router-dom";
import Menu from "../../components/Menu";

import Footer from "../../components/Footer";
import Firebase from "../../firebaseConnection";
export default () => {
  const [houses, setHouses] = useState([]);
  const [ativo, setAtivo] = useState(0);
  const buttons = [
    { id: 1, nome: "Paraná" },
    { id: 2, nome: "Santa Catarina" },
    { id: 3, nome: "Rio Grande Do Sul" },
  ];

  async function updateState(snapshot) {
    //entao é vazio true
    let isCollentionEmpty = snapshot.size === 0;
    if (!isCollentionEmpty) {
      let lista = [];
      snapshot.forEach((item) => {
        lista.push({
          id: item.id,
          preco: item.data().preco,
          categoria: item.data().categoria,
          nome: item.data().nome,
          cidade: item.data().cidade,
          images: item.data().images,
        });
      });
      setHouses(lista);
    }
  }
  async function loadHouses() {
    setAtivo(0);
    await Firebase.firestore()
      .collection("testes")
      .get()
      .then((snapshot) => {
        updateState(snapshot);
      })
      .catch((error) => {
        console.log("Não foi possivel carragar as casas " + error);
      });
  }

  useEffect(() => {
    loadHouses();
  }, []);

  async function handleSearchEach(busca) {
    await Firebase.firestore()
      .collection("produtos")
      .where("categoria", "==", busca)
      .get()
      .then((snapshot) => {
        setHouses([]);
        updateState(snapshot);
      })
      .catch((error) => {
        console.log("Não foi possivel carragar os chamados" + error);
      });
  }

  function handleCategories(e, k) {
    handleSearchEach(e.toLowerCase());
    setAtivo(k + 1);
  }

  return (
    <>
      <Menu />
      <CategoriaArea>
        <div className="container">
          <div className="row">
            <h2>Casas à venda</h2>
            <div className="btns">
              <button
                style={{
                  backgroundColor: ativo === 0 ? "black" : "white",
                  color: ativo === 0 ? "white" : "black",
                }}
                onClick={loadHouses}
              >
                Tudo
              </button>
              {buttons.map((item, k) => (
                <button
                  style={{
                    backgroundColor: ativo === k + 1 ? "black" : "white",
                    color: ativo === k + 1 ? "white" : "black",
                  }}
                  key={k}
                  onClick={() => handleCategories(item.nome, k)}
                  ativo={ativo}
                >
                  {item.nome}
                </button>
              ))}
            </div>
            {houses.map((item, k) => (
              <div key={k} className="col-xl-4 houses">
                <div className="imgHover">
                  <img alt="" src={item.images} />
                  <div className="middle">
                    <Link to={`house/${item.id}`} className="text">
                      Veja mais
                    </Link>
                  </div>
                </div>
                <Link to={`house/${item.id}`}>
                  <h3 className="mb-4">{item.nome}</h3>
                </Link>
                <p>
                  <strong>Cidade:</strong> {item.cidade}
                </p>
                <p>
                  <strong>Valor:</strong> {item.preco}
                </p>
                <p style={{ textTransform: "capitalize" }}>
                  <strong>Estado:</strong> {item.categoria}
                </p>
              </div>
            ))}
          </div>
        </div>
      </CategoriaArea>
      <Footer />
    </>
  );
};
