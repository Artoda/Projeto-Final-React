import styled from "styled-components";

export const Container = styled.div`
  margin: 0;
  padding: 0px;
  box-sizing: border-box;

  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
  width: 100%;
  background-color: #f8f8f8;
  min-height: calc(100vh - 30px);
`;

export const ButtonCategorie = styled.div`
  button {
    display: none;
    background: var(--bg-button);
    color: var(--terciary-color);
    cursor: pointer;
    border-radius: 5px;
    :hover {
      background-color: var(--terciary-color);
      color: var(--alert-color);
      border: 1px solid var(--alert-color);
    }
  }
  @media only all and (max-width: 700px) {
    button {
      display: flex;
      align-items: start;
      justify-content: start;
      padding: 5px;
      margin-top: 10px;
    }
    padding: 10px;
    width: 100%;
  }
  align-items: start;
  justify-content: start;
`;

export const TitleContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  img {
    width: 1000px;
    padding: 10px;
  }
  background-color: #ffffff;
  width: 100%;

  @media only all and (max-width: 1010px) {
    img {
      width: 700px;
    }
  }
  @media only all and (max-width: 700px) {
    img {
      width: 500px;
    }
  }

  @media only all and (max-width: 500px) {
    display: none;
  }
`;

export const NavBarContainer = styled.div`
  margin: 0;
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: column;

  @media only all and (max-width: 700px) {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
`;

export const NavBar = styled.div`
  list-style-type: none;
  display: flex;
  align-items: center;
  gap: 40px;
  margin: 0;
  width: 100%;
  height: 100%;
  padding: 0 0 0 70px;

  a {
    height: 100%;
  }
  @media only all and (max-width: 700px) {
    flex-direction: column;
    padding: 0;
    align-items: start;
    gap: 30px;
  }
`;

export const NavItem = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  font-size: 20px;
  height: 100%;
  width: 100%;
  padding: 0 2px;
  border-bottom: ${(props) =>
    props.isActive ? "4px solid rgba(203, 18, 28, 0.8)" : "none"};
  color: ${(props) => (props.isActive ? " rgba(203, 18, 28, 0.8)" : "#737070")};

  @media only all and (max-width: 700px) {
    margin-left: 20px;
  }
`;

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 100%;
  justify-content: center;
  align-items: center;
  span {
    font-size: xx-large;
  }
  img {
    width: 100%;
  }
`;

export const VideoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
`;

export const ProductsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  height: 100%;
  gap: 50px;
  padding: 50px;

  @media only all and (max-width: 320px) {
    padding: 15px;
  }
`;

export const ProductBio = styled.div`
  display: flex;
  background-color: black;
  align-items: center;
  justify-content: center;
  top: 0;
  height: 330px;
  width: 270px;
  position: absolute;
  opacity: 0%;
  transition: 0.5s;

  :hover {
    opacity: 80%;
    transition: 0.5s;
  }
`;

export const ProductBioText = styled.div`
  display: flex;
  opacity: 1;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 10px;
  span {
    background-color: black;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: large;
  }
`;

export const Product = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #e9e9e9;
  padding: 20px;
  height: 530px;
  width: 270px;
  border-radius: 5%;
  position: relative;
`;

export const ProductDiv = styled.div`
  :hover {
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: center;

  img {
    :hover + .productBio {
      display: flex;
    }
    width: 80%;
    border-radius: 5%;
  }
`;

export const ProductTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`;

export const ShopContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  justify-content: space-between;

  span {
    font-size: large;
  }
  img {
    width: 50%;
  }

  button {
    cursor: pointer;
    border-radius: 7%;
    background: var(--terciary-color);

    :hover {
      background-color: var(--bg-button);
    }
  }

  width: 100%;
`;
