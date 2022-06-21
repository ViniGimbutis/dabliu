import styled from "styled-components";
import { primaryColor } from "../../config/colors";

export const Container = styled.footer`
  display: flex;
  width: 100%;
  min-height: 5rem;
  background-color: ${primaryColor};
  position: static;
  bottom: 0;
  justify-content: space-around;
  align-items: center;
`;
