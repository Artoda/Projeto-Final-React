import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 70px;
  background-color: var(--bg-header);
  gap: 15px;
  @media only all and (max-width: 700px) {
    padding: 10px 30px;
  }

  @media only all and (max-width: 414px) {
    padding: 5px;
  }
`;

export const LogoContainer = styled.div``;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  position: relative;

  .icon {
    position: absolute;
    width: 25px;
    right: 10px;
  }

  .icon:hover {
    cursor: pointer;
  }
`;

export const SearchBar = styled.input`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 350px;
  height: 40px;
  padding: 10px;
  border-radius: 5px;
  background: var(--bg-box);
  border: 1px solid var(--primary-color);

  ::placeholder {
    color: var(--primary-color);
  }

  @media only all and (max-width: 1023px) {
    display: none;
  }
`;

export const SearchItens = styled.div`
  z-index: 1;
  display: flex;
  align-items: left;
  flex-direction: column;
  position: absolute;
  width: 350px;
  border-radius: 5px;
  border: none;
  background-color: white;
  top: 42px;
  span {
    font-size: 18px;
  }
  img {
    position: relative;
    border-radius: 5px;
    width: 100px;
  }
  overflow: scroll;
  max-height: 600px;
`;

export const SearchResults = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: left;
  padding: 13px;
  width: 100%;
  img {
    width: 70px;
  }
`;

export const RightContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
  position: relative;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  span.helloText {
    font-size: 18px; // adicionar mide para 16px
    color: var(--bg-card-hover);
    @media (max-width: 500px) {
      font-size: 16px;}
    @media (max-width: 365px) {
      font-size: 14px;}
  }
  span.loginText {
    display: flex;
    align-items: center;
    font-size: 14px;
    color: var(--bg-card-hover);
    @media (max-width: 365px) {
      font-size: 13px;}

  }`

export const TextContainer2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  text-transform: capitalize;
  color: var(--bg-card-hover);
  font-weight: bold;
    .icon {
      font-size: 30px;
    }

    .nome {
      color: var(--bg-card-hover);
      font-size: 18px;
    }

    @media only all and (max-width: 700px) {
      display: none;
    }
`

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;

  img {
    width: 50px;
    border-radius: 50%;
    object-fit: cover;
  }

  span.nomes {
    display: none;
    text-transform: capitalize;
    color: var(--alert-color);
    font-weight: bold;
    @media only all and (max-width: 700px) {
      display: flex;
    }
  }

  span {
    font-weight: 500;
    font-size: 20px;
  }
  @media only all and (max-width: 320px) {
    gap: 0;
  }

`;

export const LoginContainer = styled.div`
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  /* right: -10px;
  left: -167px; */
  top: 60px;
  background-color: var(--terciary-color);
  padding: 15px 15px 0;
  border-radius: 10px;
  z-index: 999;

  span {
    text-align: left;
    font-size: 16px;
    margin-bottom: 10px;
  }
  span.triangle {
    position: absolute;
    top: -15px;
    right: 22%;
    width: 0;
    height: 0;
    border-left: 25px solid transparent;
    border-right: 25px solid transparent;
    border-bottom: 25px solid var(--terciary-color);
  }

  button {
    width: 100px;
  }
  @media only all and (max-width: 466px) {
    top: 64px;
    right: 15%;
  }
  @media only all and (max-width: 400px) {
    top: 70px;
    right: 10%;
  }

  @media only all and (max-width: 376px) {
    top: 65px;
    right: 20%;
  }
`;

export const LogoutContainer = styled.div`
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 5px;
  width: 220px;
  top: 55px;
  background-color: var(--terciary-color);
  padding: 15px 15px 0;
  border-radius: 10px;
  z-index: 999;

  span {
    text-align: left;
    font-size: 16px;
    margin-bottom: 10px;
  }
  span.triangle {
    position: absolute;
    top: -15px;
    right: 22%;
    width: 0;
    height: 0;
    border-left: 25px solid transparent;
    border-right: 25px solid transparent;
    border-bottom: 25px solid var(--terciary-color);
  }

  button {
    width: 100px;
  }
  @media only all and (max-width: 466px) {
    top: 79px;
    right: -7%;
  }
  @media only all and (max-width: 425px) {
    top: 60px;
    right: -7%;
  }

  @media only all and (max-width: 400px) {
    /* top: 82px; */
    right: 6%;
  }

  @media only all and (max-width: 376px) {
    top: 60px;
    right: 6%;
  }
  @media only all and (max-width: 365px) {
    top: 60px;
    right: 6%;
  }
`;

export const ButtonContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 220px;
  cursor: pointer;
  transition-duration: 0.2s;

  background: var(--bg-button);
  font-size: 16px;
  color: var(--terciary-color);
  border: none;
  border-radius: 5px;
  margin: 0px 20px 20px;
  height: 45px;

  :hover {
    background-color: var(--terciary-color);
    color: var(--alert-color);
    border: 1px solid var(--alert-color);
  }
`;

export const ShopContainer = styled.div`
  display: flex;
  align-items: center;
  vertical-align: middle;
  gap: 10px;
  position: relative;
  cursor: pointer;
  padding: 5px;
  .icon {
    font-size: 250%;
    color: black;
    position: absolute;
    right: 5px;
    top: -15px;
  }
  span {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    right: -7%;
    top: -195%;
    width: 25px;
    height: 25px;
    color: white;
    background-color: rgba(203, 18, 28, 1);
    border-radius: 50%;
  }
`;

export const CountShopItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  right: -20%;
  top: -20%;
  width: 25px;
  height: 25px;
  color: white;
  background-color: rgba(203, 18, 28, 1);
  border-radius: 50%;
`;
