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
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/">
          <a>Quem Somos</a>
        </Link>
        <Link href="/">
          <a>Impressão 3D</a>
        </Link>
        <Link href="/">
          <a>Orçamento</a>
        </Link>
        <Link href="/">
          <a>Contato</a>
        </Link>
      </Nav>
    </Container>
  );
};

export default Header;
