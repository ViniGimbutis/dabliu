import styled from "styled-components";
import { backgorund, textDarkColor } from "../../config/colors";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-top: 5rem;
  max-width: 80%;
  margin: 2rem auto;
  @media (max-width: 768px) {
    max-width: 87%;
  }
`;

export const Textos = styled.div`
  background: ${backgorund};
  margin: 1rem auto;
  text-align: left;
  padding: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  p {
    margin-bottom: 1rem;
  }
  h1 {
    color: ${textDarkColor};
    text-align: center;
    padding-bottom: 2rem;
  }
  h2 {
    color: ${textDarkColor};
    text-align: center;
    margin-bottom: 1.5rem;
  }
  h3 {
    color: ${textDarkColor};
    margin-bottom: 0.8rem;
  }
`;

export const Center = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

export const Passos = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 2rem;
  text-align: center;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Space = styled.div`
  min-height: 1rem;
`;

export const CenterText = styled.div`
  max-width: 86%;
  margin: 0 auto;
  @media (max-width: 768px) {
    max-width: 95%;
  }
`;
