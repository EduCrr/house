import React, { useState, useContext } from "react";
import { LoginArea } from "./style";
import { Redirect } from "react-router";
import Menu from "../../components/Menu";
import { AuthContext } from "../../contexts/auth";
export default () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const { login, user } = useContext(AuthContext);

  function handleSubmit(e) {
    e.preventDefault();
    if (email === "" || senha === "") {
      alert("Preencha os campos");
    } else {
      login(email, senha);
    }
  }
  if (user) {
    return <Redirect to="/admin/" />;
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
