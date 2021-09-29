import styled from "styled-components";

export const CategoriaArea = styled.div`
  padding-top: 8rem;
  padding-bottom: 5rem;
  img {
    height: 350px;
    width: 350px;
    background-position: center;
    background-size: cover;
    margin-top: 30px;
    object-fit: cover;
    margin-bottom: 30px;
    opacity: 1;
    display: block;
    transition: 0.5s ease;
    backface-visibility: hidden;
  }
  .imgHover {
    position: relative;
    width: 350px;
    background-color: #000;
  }
  .btns {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 40px;
    button {
      background-color: white;
      transition: 0.5s ease;
      text-transform: uppercase;
      font-weight: bold;
      border: 2px solid #000;
      padding: 13px 25px;
      margin-left: 10px;
      margin-right: 10px;
      &:hover {
        transition: 0.5s ease;
        background-color: #000;
        color: white;
      }
    }
  }
  @media (max-width: 1024px) {
    .houses {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      margin-bottom: 30px;
      margin-top: 30px;

      img,
      .imgHover {
        margin-bottom: 0px;
        margin-top: 0px;
        width: 100%;
        height: auto;
      }
    }
  }
  @media (max-width: 1024px) {
    .btns {
      display: flex;
      flex-wrap: wrap;
      button {
        margin-bottom: 20px;
        width: 200px;
        font-size: 14px;
      }
    }
  }
`;

/*
      background-color: ${(props) =>

        props.ativo === props.id ? "black" : "white"};

      color: ${(props) => (props.ativo === props.id ? "white" : "black")};

*/
