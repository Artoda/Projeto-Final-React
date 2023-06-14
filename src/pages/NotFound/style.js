import styled from "styled-components";

export const Container = styled.div`
  min-height: calc(100vh - 30px);
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    height: 100%;
    justify-content: center;
    align-items: center;
    @media only all and (max-width: 793px) {
      width: 500px;
    }
    @media only all and (max-width: 535px) {
      width: 300px;
    }
  }
`;
