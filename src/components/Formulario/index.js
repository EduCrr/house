import React, { useState, useEffect } from "react";
import { FormularioArea } from "./style";

export default () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [mensagem, setMensagem] = useState("");

  function handleForm(e) {
    e.preventDefault();
    if (nome === "" || email === "" || telefone === "" || mensagem === "") {
      alert("Preencha todos os campos!");
    } else {
      alert("Mensagem enviada com sucesso!");
      setNome("");
      setEmail("");
      setTelefone("");
      setMensagem("");
    }
  }

  return (
    <FormularioArea>
      <div className="container">
        <div className="row">
          <h1 className="text-center">Enviar Contato!</h1>
          <form id="contato" onSubmit={handleForm}>
            <input
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
              type="text"
              placeholder="Nome"
            />
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              type="text"
              placeholder="Email"
            />
            <input
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
              required
              type="text"
              placeholder="Telefone"
            />
            <textarea
              value={mensagem}
              onChange={(e) => setMensagem(e.target.value)}
              required
              placeholder="Texto"
            ></textarea>
            <button className="form">Enviar Contato</button>
          </form>
        </div>
      </div>
    </FormularioArea>
  );
};

/*
/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/,
*/
