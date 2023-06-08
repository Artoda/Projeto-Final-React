import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
  width: 100%;
  background-color: #f8f8f8;
  height: 100%;
`;

export const TitleContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  img {
    padding: 10px;
  }
  background-color: #ffffff;
  width: 100%;
`;

export const NavBar = styled.ul`
  list-style-type: none;
  display: flex;
  align-items: center;
  justify-content: start;

  width: 100%;
  padding: 0 0 0 70px;
  a {
    height: 100%;
  }
`;

export const NavItem = styled.li`
  display: flex;
  align-items: center;
  font-size: 20px;
  height: 100%;
  padding-bottom: 12px;
  border-bottom: ${(props) => (props.isActive ? "3px solid red" : "none")};
  gap: 50px;
  color: black;
`;

export const ProductsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const Product = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #e9e9e9;
  padding: 20px;
  height: 400px;
  border-radius: 5%;
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: center;

  img {
    width: 200px;
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
  flex-direction: column;
  align-items: start;

  width: 100%;
`;
