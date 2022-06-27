import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Container } from "./style";

const HomeComponent = () => {
  return (
    <Container id="Home">
      <h1>Trabalhamos há mais de 30 anos no mercado</h1>
      <h2>Atuando em grandes empresas do mercado nacional</h2>
      <div>
        <Image src="/art.png" width={800} height={450} />
      </div>
    </Container>
  );
};

export default HomeComponent;
