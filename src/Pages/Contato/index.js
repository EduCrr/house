import React, { useEffect } from "react";
import { ContatoArea } from "./style";
import Menu from "../../components/Menu";
import Footer from "../../components/Footer";
import Formulario from "../../components/Formulario";
export default () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Menu />
      <ContatoArea>
        <Formulario />
      </ContatoArea>
      <Footer />
    </>
  );
};
