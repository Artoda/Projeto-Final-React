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
  background-color: #ffffff;
  gap: 15px;
  padding: 10px;
`;

export const TextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;

  span {
    color: black;
  }
`;

export const ButtonContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 5%;
  height: 50px;
  width: 100px;
  transition-duration: 0.4s;
  background-color: white;
  color: black;

  :hover {
    background-color: red;
    color: white;
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
