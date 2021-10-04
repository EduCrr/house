import styled from "styled-components";

export const AdminArea = styled.div`
  padding-top: 8rem;
  padding-bottom: 5rem;
  a.bt {
    background: white;
    border-top: 0px;
    text-transform: uppercase;
    font-weight: bold;
    border: 2px solid #000;
    padding: 10px 20px;
    transition: 0.5s ease;
    color: #000;
    margin-bottom: 30px !important;
  }
  a.bt:hover {
    background-color: #000;
    color: white;
    transition: 0.5s ease;
  }
`;

export const HouseArea = styled.div`
  margin-top: 30px;
  padding-top: 1rem;
  padding-bottom: 1rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  .imgHouse {
    display: flex;
    flex: 1;
    align-items: center;
    img {
      width: 130px;
      height: 130px;
      object-fit: cover;
    }
    h4 {
      padding: 0px 10px;
      font-weight: bold;
    }
  }
  .btns {
    display: flex;
    align-items: center;
    justify-content: center;

    .btn {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: 5px;
      margin-right: 5px;
      width: 40px;
      height: 40px;
    }
  }
`;
