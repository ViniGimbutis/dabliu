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

  input {
    height: 40px;
    font-size: 18px;
    border: 1px solid #ddd;
    padding: 0 10px;
    border-radius: 4px;
    margin-top: 5px;
    margin: 0 1rem;
    &:focus {
      border: 2px solid ${primaryColor};
    }
  }

  textarea {
    resize: none;
    font-size: 18px;
    border: 2px solid #ddd;
    padding: 0.5rem;
    border-radius: 4px;
    margin-top: 5px;
    font-size: 16px;
    margin: 0 1rem;
    &:focus {
      border: 2px solid ${primaryColor};
    }
  }
`;
