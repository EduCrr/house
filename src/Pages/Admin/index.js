import React, { useEffect, useState } from "react";
import { AdminArea, HouseArea } from "./style";
import Menu from "../../components/Menu";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import firebase from "../../firebaseConnection";
export default () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [house, setHouse] = useState([]);

  useEffect(() => {
    async function loadHouse() {
      await firebase
        .firestore()
        .collection("houses")
        .get()
        .then((snapshot) => {
          let lista = [];
          snapshot.forEach((item, k) => {
            lista.push({
              id: item.id,
              nome: item.data().nome,
              images: item.data().images,
            });
          });
          setHouse(lista);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    loadHouse();
  }, []);

  async function handleDelete(id, img) {
    await firebase
      .firestore()
      .collection("houses")
      .doc(id)
      .delete()
      .then(() => {
        alert("Casa removida com sucesso!");
      });
    img.forEach((item) => {
      let desertRef = firebase.storage().refFromURL(item);
      desertRef
        .delete()
        .then(function () {
          console.log("Deletado");
        })
        .catch(function (error) {
          console.log("Não deletado" + error);
        });
    });
  }
  return (
    <>
      <Menu />
      <AdminArea>
        <div className="container">
          <div className="row"></div>
          <Link className="bt" to="/admin/add">
            Adicionar nova Casa
          </Link>
          {house.length > 0 &&
            house.map((item, k) => (
              <HouseArea key={k}>
                <div className="imgHouse">
                  <img src={item.images} />
                  <h4>{item.nome}</h4>
                </div>
                <div className="btns">
                  <Link to={`/admin/add/${item.id}`}>
                    <div className="btn" style={{ backgroundColor: "#3f68aa" }}>
                      <EditIcon style={{ color: "white" }} />
                    </div>
                  </Link>
                  <div
                    className="btn"
                    onClick={() => handleDelete(item.id, item.images)}
                    style={{ backgroundColor: "#ed4646" }}
                  >
                    <DeleteIcon style={{ color: "white" }} />
                  </div>
                </div>
              </HouseArea>
            ))}
          {house.length < 0 && <p>Nenhuma casa foi encontrada!</p>}
        </div>
      </AdminArea>
      <Footer />
    </>
  );
};

/*
  await firebase
      .firestore()
      .collection("houses")
      .doc(id)
      .delete()
      .then(() => {
        alert("Casa removida com sucesso!");
      });
      var desertRef = storageRef.child(`images/${img}`);

      // Delete the file
      desertRef
        .delete()
        .then(function () {
          // File deleted successfully
        })
        .catch(function (error) {
          // Uh-oh, an error occurred!
        });
*/
