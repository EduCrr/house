import styled from "styled-components";

export const RegisterArea = styled.div`
  padding-top: 8rem;
  padding-bottom: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  .preImagesContent {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
  }
  .preImages {
    padding: 5px;
    height: 200px;
    width: 200px;
    object-fit: cover;
  }
  .areImgs {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;

    a {
      margin-top: 5px;
      cursor: pointer;
    }
  }
`;
