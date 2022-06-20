import styled from "styled-components";
import { linkColor } from "../../config/colors";
export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #87d62c;
`;
export const Menu = styled.div`
  display: none;
`;
export const MenuLabel = styled.label`
  color: white;
  font-size: 50px;
`;
export const Logo = styled.div``;
export const Nav = styled.nav`
  display: flex;
  align-items: center;
  a {
    display: block;
    color: ${linkColor};
    font-weight: bold;
    margin: 0 1rem;
    padding: 1rem;
    font-size: 1rem;
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
`;
