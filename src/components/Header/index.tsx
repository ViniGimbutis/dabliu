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
        <MenuLabel>{show ? <FiX size={50} /> : <FiMenu size={50} />}</MenuLabel>
      </Menu>
      <Logo>
        <a>
          <Image src="/logo/dabliu.png" width={50} height={50} />
        </a>
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
          <h3>Home</h3>
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
          <h3>Quem somos</h3>
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
          <h3>Impressão 3D</h3>
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
          <h3>Orçamento</h3>
        </Link>
      </Nav>
    </Container>
  );
};

export default Header;
