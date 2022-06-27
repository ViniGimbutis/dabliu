import Image from "next/image";

import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Container, Logo, Menu, MenuLabel, Nav } from "./style";
import { Link } from "react-scroll";

const Header = () => {
  const [show, setShow] = useState(false);

  const toggleMenu = () => {
    setShow(!show);
  };
  return (
    <Container id="top">
      <Menu onClick={toggleMenu}>
        <MenuLabel>{show ? <FiX /> : <FiMenu />}</MenuLabel>
      </Menu>
      <Logo>
        <Image src="/logo/dabliu.png" width={50} height={50} />
      </Logo>
      <Nav show={show}>
        <Link
          activeClass="active"
          to="Home"
          spy={true}
          smooth={true}
          offset={-10}
          duration={500}
          onClick={toggleMenu}
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="QuemSomos"
          spy={true}
          smooth={true}
          offset={-10}
          duration={500}
          onClick={toggleMenu}
        >
          Quem somos
        </Link>
        <Link
          activeClass="active"
          to="Impressao3D"
          spy={true}
          smooth={true}
          offset={-20}
          duration={500}
          onClick={toggleMenu}
        >
          Impressão 3D
        </Link>
        <Link
          activeClass="active"
          to="Orcamento"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          onClick={toggleMenu}
        >
          Orçamento
        </Link>
      </Nav>
    </Container>
  );
};

export default Header;
