import React, { useState } from "react";
import { Container, Form, Separar } from "./style";
import InputMask from "react-input-mask";

const QuemSomos = () => {
  const [mensagem, setMensagem] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    window.open(
      "https://wa.me/5511998978575?text=" + mensagem.replace(" ", "+"),
      "blank"
    );
  };

  return (
    <Container id="Orcamento">
      <h1>Orçamento</h1>
      <Form onSubmit={handleSubmit}>
        <label htmlFor="mensagem">
          Conte-nos o que deseja realizar:
          <textarea
            rows={7}
            placeholder="Conte-nos o que deseja realizar"
            value={mensagem}
            onChange={(e) => {
              setMensagem(e.target.value);
            }}
          />
        </label>

        <button type="submit">Enviar</button>
      </Form>
    </Container>
  );
};

export default QuemSomos;
