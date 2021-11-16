import styled from "styled-components";

export const CarrouselArea = styled.div`
  padding-bottom: 5rem;
  p {
    font-size: 14px;
  }
  .imgHover {
    position: relative;
    width: 100%;
    background-color: #000;
  }
  img {
    width: 100%;
    height: 350px;
    object-fit: cover;
    transition: 0.5s ease;
  }
  .react-multiple-carousel__arrow {
    z-index: 10 !important;
    top: 150px;
  }
  .carouselCenter {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  @media (max-width: 1024px) {
    .carouselCenter,
    h3,
    p {
      text-align: left;
    }
  }
`;
