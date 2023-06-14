import styled from "styled-components";

export const Container = styled.div`
  background: white;
  display: flex;

  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  min-height: calc(100vh - 30px);

  color: #737070;
  background-color: #f8f8f8;
  padding: 20px;
  width: 100%;
`;

export const BoxContainer = styled.div`
  text-align: left;
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 10px;

  span {
    font-size: medium;
    color: black;
    span {
      font-weight: bold;
      color: black;
    }
  }
`;

export const ContentContainer = styled.div`
  background: white;
  padding: 15px;

  border-radius: 5%;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 10px;
`;

export const FormContainer = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

export const UserData = styled.div`
  text-align: left;
  padding: 10px;
  font-weight: bold;

  span {
    font-size: medium;
  }

  input {
    border: 1px solid var(--primary-color);
    background: var(--bg-box);
    border-radius: 5px;
    height: 40px;
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    ::placeholder {
      color: var(--primary-color);
    }
  }

  button {
    width: 300px;
  }
`;

export const NameContainer = styled.div`
  text-align: left;
`;

export const AddressContainer = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;

  button {
    background: var(--bg-button);
    font-size: 16px;
    list-style: none;
    color: var(--terciary-color);
    border: none;
    border-radius: 5px;
    height: 35px;
    margin: 10px 0px 20px;
    cursor: pointer;
    width: 300px;
  }

  input {
    border-radius: 5px;
    height: 30px;
  }

  h3 {
    font-size: large;
  }
`;

export const NumberContainer = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
`;

export const ComplementContainer = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
`;

export const ImageContainer = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  img {
    max-width: 400px;
    max-height: 400px;
  }
`;
