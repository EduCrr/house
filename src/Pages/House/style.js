import styled from "styled-components";

export const HouseArea = styled.div`
  padding-top: 8rem;
  padding-bottom: 5rem;
  img {
    height: 420px;
    width: 100%;
    background-position: center;
    background-size: cover;
    object-fit: cover;
  }

  h3 {
    font-size: 25px !important;
    text-transform: none !important;
  }
  .descricao {
    padding-top: 5rem;
    padding-bottom: 5rem;
  }
  h5 {
    font-weight: normal !important;
    text-transform: uppercase;
    color: #878787;
  }
  p strong {
    color: black;
  }
  @media (max-width: 1024px) {
    img {
      height: auto;
    }
    .descricao {
      text-align: center;

      img {
        width: 90% !important;
      }
    }
  }
`;
