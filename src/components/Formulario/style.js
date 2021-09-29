import styled from "styled-components";

export const FormularioArea = styled.div`
  form {
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 550px !important;
  }
  @media (max-width: 425px) {
    form input,
    textarea {
      width: 100%;
    }
  }
`;
