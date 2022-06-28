import styled from "styled-components";
import { primaryColor } from "../../config/colors";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-top: 3rem;
  max-width: 70%;
  margin-left: 15%;
  h1 {
    padding-bottom: 2.5rem;
  }
  h2 {
    padding-bottom: 2.5rem;
  }
  div {
    background: #fefefe;
    margin: 0 auto;
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }
`;
