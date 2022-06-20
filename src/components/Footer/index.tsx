import Link from "next/link";
import React from "react";
import { Container } from "./style";

const Footer = () => {
  return (
    <Container>
      <Link href="/">
        <a>Dabliu</a>
      </Link>
      <Link href="/">
        <a>Quem somos</a>
      </Link>
      <Link href="/">
        <a>Orçamento</a>
      </Link>
      <Link href="/">
        <a>Contato</a>
      </Link>
    </Container>
  );
};

export default Footer;
