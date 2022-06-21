import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Container } from "./style";

const HomeC = () => {
  return (
    <Container id="Home">
      <h1>Trabalhamos há mais de 30 anos no mercado</h1>
      <h2>Atuando em grandes empresas do mercado nacional</h2>
      <div>
        <Image src="/giftrab.gif" width={500} height={450} />
      </div>
    </Container>
  );
};

export default HomeC;
