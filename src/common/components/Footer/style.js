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
`;

export const AboutUsContainer = styled.footer`
  display: flex;
  align-items: center;
  span {
    font-size: larger;
  }

  button {
    background: var(--bg-button);
    font-size: 16px;
    list-style: none;
    color: var(--terciary-color);
    border: none;
    border-radius: 5px;
    margin: 10px;
    margin: 10px 0;
    cursor: pointer;
    transition-duration: 0.2s;
    padding: 10px;
    width: 110px;
    :hover {
      background-color: var(--terciary-color);
      color: var(--alert-color);
      border: 1px solid var(--alert-color);
    }
  }
`;

export const LogoContainer = styled.footer`
  display: flex;
  align-items: center;
  padding: 10px;

  img {
    width: 100%;
  }

  @media only all and (max-width: 567px) {
    display: none;
  }
`;

export const HelpContainer = styled.footer`
  display: flex;
  align-items: center;
  span {
    font-size: larger;
  }

  button {
    background: var(--bg-button);
    font-size: 16px;
    list-style: none;
    color: var(--terciary-color);
    border: none;
    border-radius: 5px;
    margin: 10px;
    margin: 10px 0;
    cursor: pointer;
    transition-duration: 0.2s;
    padding: 10px;
    width: 120px;
    :hover {
      background-color: var(--terciary-color);
      color: var(--alert-color);
      border: 1px solid var(--alert-color);
    }
  }
`;
