import React, { useEffect } from "react";
import { SlideArea } from "./style";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import { Link } from "react-router-dom";
import "./slider-animations.css";
import Menu from "../../components/Menu";
import About from "../../components/About";
import Carousel from "../../components/Carousel";
import Footer from "../../components/Footer";
export default () => {
  const content = [
    {
      title: "Aspen Mountain",
      button: "Veja Mais",
      span: "Residencial",
      image: "/assets/houseSlider1.jpg",
      link: "/house/aspen-mountain-0312",
    },
    {
      title: "Barra Norte",
      button: "Veja Mais",
      span: "Residencial",
      image: "/assets/barraNorte.jpg",
      link: "/house/barra-norte-3930",
    },
    {
      title: "Água Verde",
      span: "Residencial",
      button: "Veja Mais",
      image: "/assets/aguaverde.jpg",
      link: "/house/agua-verde-3722",
    },
  ];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Menu ativo={true} />
      <SlideArea>
        <Slider autoplay={4500}>
          {content.map((item, index) => (
            <div
              key={index}
              style={{
                background: `url('${item.image}') `,
              }}
            >
              <div className="container sliderText">
                <div className="col-md-12">
                  <p>{item.span}</p>
                  <h1>{item.title}</h1>
                  <Link to={item.link}>
                    <button>
                      {item.button}
                      <img
                        alt=""
                        className="arrowBtn"
                        src="https://img.icons8.com/ios-glyphs/30/000000/chevron-right.png"
                      />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </SlideArea>
      <About />
      <Carousel />
      <Footer />
    </>
  );
};
//autoplay={5000}
