import React from "react";
import { Link } from "react-router-dom";
import { VideoArea, Gallery, AboutArea } from "./style";
export default () => {
  return (
    <AboutArea>
      <div className="container">
        <div className="mb-5">
          <span>Desde</span>
          <h1>1994</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.{" "}
          </p>
        </div>
        <Gallery>
          <div className="item-0">
            <div className="imgHover">
              <img src="/assets/interior3.jpg" alt="" />
              <div className="middle">
                <div className="text">
                  <Link to="/houses">Veja mais</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="item-1">
            <div className="imgHover">
              <img src="/assets/about4.jpg" alt="" />
              <div className="middle">
                <div className="text">
                  <Link to="/houses">Veja mais</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="item-2">
            <div className="imgHover">
              <img src="/assets/interior.jpg" alt="" />
              <div className="middle">
                <div className="text">
                  <Link to="/houses">Veja mais</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="item-3">
            <div className="imgHover">
              <img src="/assets/about2.jpg" alt="" />
              <div className="middle">
                <div className="text">
                  <Link to="/houses">Veja mais</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="item-4">
            <div className="imgHover">
              <img src="/assets/interior2.jpg" alt="" />
              <div className="middle">
                <div className="text">
                  <Link to="/houses">Veja mais</Link>
                </div>
              </div>
            </div>
          </div>
        </Gallery>
      </div>

      <VideoArea>
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
      </VideoArea>
    </AboutArea>
  );
};
