import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 70px 15px 70px;
  background-color: #e9d5d5;
  height: 70px;
`;

export const LeftContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  height: 100%;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  img {
    width: 200px;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  position: relative;

  img {
    position: absolute;
    width: 25px;
    right: 10px;
  }

  img:hover {
    cursor: pointer;
  }
`;

export const SearchBar = styled.input`
  display: flex;
  align-items: center;
  width: 500px;
  height: 30px;
  padding: 5px;
  border-radius: 10px;
  background-color: white;
  color: black;
  border: none;
`;

export const SearchItens = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  position: absolute;
  width: 500px;
  border-radius: 5px;
  background-color: white;
  top: 33px;
  gap: 30px;
  span {
    font-size: xx-large;
  }
  img {
    position: relative;
    border-radius: 5px;
    width: 100px;
  }
`;

export const SearchResults = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
  padding: 13px;
`;

export const RightContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
  position: relative;
`;

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  img {
    width: 50px;
    border-radius: 50%;
    object-fit: cover;
    cursor: pointer;
  }

  span {
    font-weight: 500;
    font-size: 20px;

    span {
      text-decoration: underline;
      color: #a80808;
    }
  }
`;

export const LoginContainer = styled.div`
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 50px;
  left: -9px;
  top: 72px;
  background-color: var(--terciary-color);
  padding: 15px 15px 0;
  border-radius: 10px;

  span {
    text-align: left;
    font-size: 16px;
    margin-bottom: 10px;
  }
  span.square {
    position: absolute;
    top: -15px;
    right: 22%;
    height: 30px;
    width: 30px;
    background-color: var(--terciary-color);
    transform: rotate(45deg);
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
  gap: 10px;

  img {
    width: 50px;
  }
`;
