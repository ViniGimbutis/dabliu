import styled from "styled-components";
import { linkColor, primaryColor, textDarkColor } from "../../config/colors";

export const Container = styled.section`
  width: 80%;
  background: #fff;
  margin: 30px auto;
  padding: 30px;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  h1 {
    padding-bottom: 2rem;

    color: ${textDarkColor};
    text-align: center;
  }
  @media (max-width: 768px) {
    width: 87%;
  }
`;

export const Separar = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  input {
    margin: 0 1rem;
  }
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  label {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    font-size: 1.3rem;
  }

  textarea {
    resize: none;
    border-radius: 8px;
    margin-top: 1rem;
    padding: 0.4rem;
    margin-bottom: 1rem;
    border: 3px solid gray;
    &:focus {
      border: 3px solid ${primaryColor};
    }
  }
`;
