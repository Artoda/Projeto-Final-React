import styled from "styled-components";

export const Container = styled.div`
  background: white;
  display: flex;
  margin: 0;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;

  color: #737070;
  background-color: #f8f8f8;
  min-height: calc(100vh - 30px);
  padding: 20px;
`;

export const InformationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 10px;
`;

export const ContentContainer = styled.div`
  background: white;
  border-radius: 10px;
`;

export const NomeContainer = styled.div`
  text-align: left;
  width: 100%;
`;

export const EmailContainer = styled.div`
  text-align: left;
  width: 100%;
`;

export const UserData = styled.div`
  text-align: left;
  width: 100%;
`;

export const EnderecoContainer = styled.div`
  text-align: left;
  width: 100%;

  span {
    color: red;
  }
`;

export const BoxContainer = styled.div`
  display: flex;
  width: 50vh;
  flex-direction: column;
  padding: 10px;
  gap: 20px;

  @media only all and (max-width: 625px) {
    width: 40vh;
  }
  @media only all and (max-width: 497px) {
    width: 30vh;
  }
`;

export const PersonalContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const AddressContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
