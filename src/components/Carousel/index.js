import React, { useState, useEffect } from "react";
import { CarrouselArea } from "./style";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Firebase from "../../firebaseConnection";
export default () => {
  const [houses, setHouses] = useState([]);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 0 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 700, min: 0 },
      items: 1,
    },
  };
  useEffect(() => {
    async function loadHouses() {
      await Firebase.firestore()
        .collection("houses")
        .get()
        .then((snapshot) => {
          let lista = [];
          snapshot.forEach((item) => {
            lista.push({
              id: item.id,
              nome: item.data().nome,
              cidade: item.data().cidade,
              preco: item.data().preco,
              images: item.data().images,
            });
          });
          setHouses(lista);
        })
        .catch((error) => {
          console.log("Não foi possivel carragar as casas " + error);
        });
    }
    loadHouses();
  }, []);
  return (
    <CarrouselArea>
      <h1 className=" text-center mb-5">Ideias para o seu projeto!</h1>
      <Carousel
        centerMode={false}
        transitionDuration={700}
        containerClass="carousel-container"
        infinite={true}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        responsive={responsive}
        dotListClass="custom-dot-list-style"
      >
        {houses.length <= 0 && <p className="text-center">Procurando... ⏲️</p>}
        {houses &&
          houses.map((item, k) => (
            <div className="carouselCenter" key={k}>
              <Link to={`house/${item.id}`}>
                <div className="imgHover">
                  <img alt="" src={item.images} />
                  <div className="middle">
                    <div className="text">Veja mais</div>
                  </div>
                </div>
              </Link>
              <h3 className="mt-4" style={{ marginLeft: "left" }}>
                {item.nome}
              </h3>
              <p>
                <strong>Preço:</strong> {item.preco}
              </p>
            </div>
          ))}
      </Carousel>
    </CarrouselArea>
  );
};
