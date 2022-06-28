import styled from "styled-components";
import { primaryColor } from "../../config/colors";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-top: 5rem;
  max-width: 65%;
  margin: 2rem auto;
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 1rem;
  border: 2px solid ${primaryColor};
  padding: 0.5rem;
  border-radius: 0.5rem;

  div {
    display: flex;
    justify-content: space-between;

    h4 {
      text-align: center;
      margin: auto 0;
    }
    label {
      color: ${primaryColor};
      cursor: pointer;
      height: 100%;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;
