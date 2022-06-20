import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiMenu } from "react-icons/fi";
import { Container, Logo, Menu, MenuLabel, Nav } from "./style";

const Header = () => {
  return (
    <Container>
      <Menu>
        <MenuLabel>
          <Link href="#">
            <FiMenu />
          </Link>
        </MenuLabel>
      </Menu>
      <Logo>
        <Image src="/logo/dabliu.png" width={50} height={50} />
      </Logo>
      <Nav>
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
