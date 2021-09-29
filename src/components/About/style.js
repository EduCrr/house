import styled from "styled-components";

export const AboutArea = styled.div`
  p {
    color: #c2552c !important;
    font-weight: 700;
  }
  padding-top: 5rem;
  padding-bottom: 5rem;
  img {
    height: auto;
    width: 400px;
    background-position: center;
    background-size: cover;
  }
  .about {
    padding-bottom: 5rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  .tarjaImg {
    margin-right: 55px;
    background: white;
    padding: 15px;
    width: 300px;
    margin-top: -138px;
    h2 {
      font-size: 25px;
    }
  }
  @media (max-width: 1024px) {
    .about {
      align-items: center;
    }
    .tarjaImg {
      text-align: center;
      margin-right: 0px;
      width: auto;
      margin-top: 20px;
      padding: 0px;
    }
  }
  @media (max-width: 450px) {
    img {
      width: 280px;
    }
  }
`;
