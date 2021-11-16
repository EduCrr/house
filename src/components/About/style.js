import styled from "styled-components";

export const AboutArea = styled.div`
  margin-top: 5rem;
  h1 {
    font-size: 80px;
    letter-spacing: 15px;
    margin-top: 10px;
    color: #c2552c;
  }
  span {
    letter-spacing: 5px;
    color: #999;
    font-weight: bold;
  }
`;

export const Gallery = styled.div`
  display: grid;

  grid-template-rows: (4, fr);
  grid-template-columns: (7, fr);

  gap: 0px;

  .imgHover {
    position: relative;
    height: 100%;
    width: 100%;
    background-color: #000;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all ease 0.5s;
  }
  a {
    color: white;
  }
  .item-0 {
    grid-row-start: 1;
    grid-column-start: 1;

    grid-row-end: 3;
    grid-column-end: 3;
  }
  .item-1 {
    grid-row-start: 1;
    grid-column-start: 3;

    grid-row-end: 3;
    grid-column-end: 6;
  }
  .item-2 {
    grid-row-start: 1;
    grid-column-start: 6;

    grid-row-end: 5;
    grid-column-end: 8;
  }
  .item-3 {
    grid-row-start: 3;
    grid-column-start: 1;

    grid-row-end: 5;
    grid-column-end: 3;
  }
  .item-4 {
    grid-row-start: 3;
    grid-column-start: 3;

    grid-row-end: 5;
    grid-column-end: 6;
  }

  @media (max-width: 770px) {
    display: flex;
    flex-direction: column;
  }
`;

export const VideoArea = styled.div`
  p {
    color: #c2552c !important;
    font-weight: 700;
  }
  padding-top: 5rem;
  padding-bottom: 5rem;
`;
