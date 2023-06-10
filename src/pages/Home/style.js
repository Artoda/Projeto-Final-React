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

export const NavBarContainer = styled.div`
  margin: 0;
  width: 100%;
  height: 80px;
`;
export const NavBar = styled.ul`
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
`;

export const NavItem = styled.li`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  font-size: 20px;
  height: 100%;
  padding: 0 2px;
  border-bottom: ${(props) =>
    props.isActive ? "4px solid rgba(203, 18, 28, 0.8)" : "none"};
  color: ${(props) => (props.isActive ? " rgba(203, 18, 28, 0.8)" : "#737070")};
`;

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  span {
    font-size: xx-large;
  }
  img {
    width: 500px;
  }
`;

export const ProductsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100%;
  gap: 50px;
`;

export const Product = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #e9e9e9;
  padding: 20px;
  height: 450px;
  width: 270px;
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
  flex-direction: row;
  align-items: center;
  justify-content: center;
  justify-content: space-between;

  span {
    font-size: large;
  }
  img {
    width: 50px;
  }

  width: 100%;
`;
