import styled from "styled-components";

export const MenuArea = styled.header`
  transition: 0.5s ease;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 99;
  background-color: white;
`;

export const MenuLogo = styled.div`
  margin-left: 40px;
  font-size: 25px;
  font-weight: bold;

  a {
    color: black;
  }
`;
export const MenuIcon = styled.div`
  margin-right: 40px;

  cursor: pointer;
  img {
    height: 28px;
    width: 28px;
  }
`;
export const MenuContent = styled.div`
  .overlay {
    transition: ease 0.7s;
    height: 100%;
    position: fixed;
    z-index: 9999;
    background-color: white;
    overflow-x: hidden;
  }
  .overlay img {
    position: absolute;
    top: 20px;
    right: 35px;
    height: 38px;
    width: 38px;
    cursor: pointer;
  }
  .overlay-content {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: inherit;
  }

  .overlay a {
    transition: 0.5s ease;
    padding: 8px;
    text-decoration: none;
    font-size: 36px;
    color: #000;
    display: block;

    &:hover {
      color: #c2552c;
      transition: 0.5s ease;
    }
  }
`;
