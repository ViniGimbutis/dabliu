import styled from "styled-components";
import { backgorund, primaryColor } from "../../config/colors";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-top: 4rem;
  max-width: 90%;
  margin-left: 5%;
  h1 {
    padding-bottom: 3rem;
  }
  h2 {
    padding-bottom: 3rem;
  }
  div {
    background: ${backgorund};
    margin: 0 auto;
    border-radius: 0.5rem;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }
  @media (max-width: 768px) {
    margin-top: 3rem;
    h1 {
      padding-bottom: 2rem;
    }
    h2 {
      padding-bottom: 2rem;
    }
  }
`;
