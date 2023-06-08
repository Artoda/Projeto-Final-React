import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 70px 15px 70px;
  background-color: #e9d5d5;
  height: 50px;
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
`;

export const SearchBar = styled.input`
  display: flex;
  align-items: center;
  width: 500px;
  height: 30px;
  padding: 5px;
  border-radius: 10px;
  background-color: white;
  border: none;
`;

export const RightContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  img {
    width: 50px;
    border-radius: 50%;
    object-fit: cover;
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

export const ShopContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  img {
    width: 50px;
  }
`;
