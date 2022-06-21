import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Container, Logo, Menu, MenuLabel, Nav } from "./style";

const Header = () => {
  const [show, setShow] = useState(false);

  const toggleMenu = () => {
    setShow(!show);
  };
  return (
    <Container>
      <Menu onClick={toggleMenu}>
        <MenuLabel>{show ? <FiX /> : <FiMenu />}</MenuLabel>
      </Menu>
      <Logo>
        <Link href="/">
          <Image src="/logo/dabliu.png" width={50} height={50} />
        </Link>
      </Logo>
      <Nav show={show}>
        <a href="#Home">Home</a>

        <a href="#QuemSomos"> Quem Somos</a>

        <a href="#Impressao3D">Impressão 3D</a>

        <a href="#Orcamento">Orçamento</a>

        <a href="#Contato">Contato</a>
      </Nav>
    </Container>
  );
};

export default Header;
