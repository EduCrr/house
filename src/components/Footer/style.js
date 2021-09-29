import styled from "styled-components";

export const FooterArea = styled.div`
  border-top: 1px solid #ddd;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  .space {
    display: flex;
    flex-direction: row;
    p {
      margin-left: 15px;
      margin-right: 15px;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    h5 {
      margin-top: 20px;
    }
    .space,
    h5 {
      margin-bottom: 30px;
    }
  }
`;
