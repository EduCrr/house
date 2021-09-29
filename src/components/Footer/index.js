import React from "react";
import { FooterArea } from "./style";
import { AiFillFacebook, AiFillTwitterSquare } from "react-icons/ai";
import { FaInstagramSquare } from "react-icons/fa";

export default () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <FooterArea>
            <h5>@ House</h5>
            <div className="space">
              <p>999-999-99</p>
              <p>house@gmail.com</p>
            </div>
            <div className="space">
              <p>
                <AiFillFacebook
                  style={{
                    height: "25px",
                    width: "25px",
                    cursor: "pointer",
                    color: "#c2552c",
                  }}
                />
              </p>
              <p>
                <AiFillTwitterSquare
                  style={{
                    height: "25px",
                    width: "25px",
                    cursor: "pointer",
                    color: "#c2552c",
                  }}
                />
              </p>
              <p>
                <FaInstagramSquare
                  style={{
                    height: "25px",
                    width: "25px",
                    cursor: "pointer",
                    color: "#c2552c",
                  }}
                />
              </p>
            </div>
          </FooterArea>
        </div>
      </div>
    </>
  );
};
