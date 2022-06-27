import styled from "styled-components";
import { primaryColor, textColor, textDarkColor } from "../../config/colors";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-top: 5rem;
  max-width: 80%;
  margin: 2rem auto;
`;

export const Textos = styled.div`
  background: #fff;
  margin: 1rem auto;
  text-align: left;
  padding: 1.5rem;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  p {
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }
  h1 {
    color: ${textDarkColor};
    text-align: center;
    padding-bottom: 2rem;
  }
`;
