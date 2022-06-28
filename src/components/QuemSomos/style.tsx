import styled from "styled-components";
import { backgorund, textDarkColor } from "../../config/colors";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-top: 5rem;
  max-width: 80%;
  margin: 2rem auto;
  background: ${backgorund};
  border-radius: 0.5rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  @media (max-width: 768px) {
    max-width: 87%;
  }
`;

export const Textos = styled.div`
  margin: 0 auto;
  text-align: left;
  padding: 1.5rem;

  max-width: 86%;
  p {
    margin-bottom: 1rem;
  }
  h1 {
    color: ${textDarkColor};
    text-align: center;
    padding-bottom: 2rem;
  }
  @media (max-width: 768px) {
    max-width: 95%;
  }
`;
