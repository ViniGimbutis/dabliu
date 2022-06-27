import React, { useState } from "react";
import { Container, Form, Separar } from "./style";
import InputMask from "react-input-mask";

const QuemSomos = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [celular, setCelular] = useState("");
  const [mensagem, setMensagem] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Container id="Orcamento">
      <h1>Orçamento</h1>
      <Form onSubmit={handleSubmit}>
        <label htmlFor="mensagem">
          <textarea
            rows={7}
            placeholder="Conte-nos o que deseja realizar"
            value={mensagem}
            onChange={(e) => {
              setMensagem(e.target.value);
            }}
          />
        </label>
        <Separar>
          <label htmlFor="name">
            <input
              placeholder="Nome"
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </label>
          <label htmlFor="celular">
            <InputMask
              placeholder="Celular"
              type="text"
              mask="(99)99999-9999"
              value={celular}
              onChange={(e) => {
                setCelular(e.target.value);
              }}
            />
          </label>
        </Separar>

        <label htmlFor="email">
          <input
            placeholder="E-mail"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </label>

        <button type="submit">Enviar</button>
      </Form>
    </Container>
  );
};

export default QuemSomos;
