import styled from "styled-components";
import { linkColor, primaryColor } from "../../config/colors";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: ${primaryColor};

  @media (max-width: 768px) {
    padding-left: 1.3rem;
    padding-right: 1.3rem;
    justify-content: space-between;
  }
`;

export const Menu = styled.div`
  position: absolute;
  z-index: 10;
  overflow: hidden;
  display: none;
  margin-right: 1rem;
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    padding-top: 0.5rem;
    right: 0;
  }
`;

export const MenuLabel = styled.label`
  color: ${linkColor};
`;

export const Logo = styled.div`
  display: flex;
  padding: 0.5rem;
  z-index: 999;
  align-items: center;
`;

interface StyledNavProps {
  show: boolean;
}
export const Nav = styled.nav<StyledNavProps>`
  display: flex;
  align-items: center;
  cursor: pointer;
  a {
    display: block;
    color: ${linkColor};
    margin: 0 1rem;
    padding: 1rem;
    position: relative;
  }
  a::after {
    content: "";
    position: absolute;
    bottom: 0.5rem;
    left: 50%;
    width: 0;
    height: 0.2rem;
    background: ${linkColor};
    transition: all 300ms ease-in-out;
  }

  a:hover::after {
    width: 70%;
    left: 15%;
  }
  @media (max-width: 768px) {
    display: ${({ show }) => (show ? "block" : "none")};
    position: fixed;
    z-index: 4;
    background-color: ${primaryColor};
    top: 0;
    right: 0;
    text-align: center;
    width: 100%;
    height: 100%;
    padding-top: 6rem;

    a {
      width: 100%;
      margin: 2rem 0;
      padding: 0;
    }
    a:hover {
      cursor: pointer;
    }
    a:hover::after {
      width: 0;
    }
  }
`;
