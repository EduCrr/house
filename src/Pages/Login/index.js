import React, { useState, useContext, useEffect } from "react";
import { LoginArea } from "./style";
import Menu from "../../components/Menu";
import { AuthContext } from "../../contexts/auth";
import firebase from "../../firebaseConnection";
export default () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const { login } = useContext(AuthContext);

  function handleSubmit(e) {
    e.preventDefault();
    if (email === "" || senha === "") {
      alert("Preencha os campos");
    } else {
      login(email, senha);
    }
  }

  return (
    <>
      <Menu />
      <LoginArea>
        <h1>Faça seu Login</h1>
        <form onSubmit={handleSubmit}>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            type="text"
          />
          <input
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            placeholder="Senha"
            type="password"
          />
          <button className="btnForm">Login</button>
        </form>
      </LoginArea>
    </>
  );
};
