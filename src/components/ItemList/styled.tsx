import styled from "styled-components";
import { primaryColor } from "../../config/colors";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-top: 5rem;
  max-width: 100%;
  margin: 2rem auto;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 1rem;
  border: 2px solid ${primaryColor};
  padding: 0.5rem;
  border-radius: 5px;

  div {
    display: flex;
    justify-content: space-between;
    h4 {
      text-align: center;
      margin: auto 0;
    }
    label {
      color: ${primaryColor};
      font-size: 1.2rem;
      cursor: pointer;
      height: 100%;
      @media (max-width: 768px) {
        font-size: 0.8rem;
      }
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;
