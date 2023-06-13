import styled from "styled-components";

export const Container = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 70px 15px 70px;
  background-color: #e9d5d5;
  height: fit-content;
  position: relative;
  bottom: 0;
  left: 0;
  @media only all and (max-width: 700px) {
    padding: 0;
  }
`;

export const AboutUsContainer = styled.footer`
  display: flex;
  align-items: center;
  span {
    font-size: larger;
  }
`;

export const LogoContainer = styled.footer`
  display: flex;
  align-items: center;

  img {
    width: 100%;
  }
`;

export const HelpContainer = styled.footer`
  display: flex;
  align-items: center;
  span {
    font-size: larger;
  }
`;
