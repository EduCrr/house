import React from "react";
import { Link } from "react-router-dom";
import { AboutArea } from "./style";
export default () => {
  return (
    <>
      aaaaaaa
      <AboutArea>
        <div className="container">
          <div className="row">
            <div className="col-xl-8 about">
              <p>Desde 1991</p>
              <h1>
                Melhor empresa de <br />
                arquitetura do Brasil
              </h1>
            </div>
            <div className="col-xl-4 about">
              <img alt="" src="/assets/about.jpg" />
              <div className="tarjaImg">
                <p>Último projeto</p>
                <Link to="/houses">
                  <h2>Confira os últimos trabalhos</h2>
                </Link>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-8 about">
              <img alt="" src="/assets/interior.jpg" />
              <div className="tarjaImg">
                <p>Nossos Produtos</p>
                <h2>Designer de interior</h2>
              </div>
            </div>
            <div className="col-xl-4 about">
              <img alt="" src="/assets/about3.jpg" />
              <div className="tarjaImg">
                <p>Nossos Serviços</p>
                <h2>Solução para seus sonhos!</h2>
              </div>
            </div>
          </div>
        </div>
        <video
          style={{ marginTop: "20px" }}
          width="100%"
          height="auto"
          autoPlay
          muted
          loop
        >
          <source src="/assets/houseIntro.mp4" type="video/mp4" />
        </video>
      </AboutArea>
    </>
  );
};
