import styled from "styled-components";

export const Container = styled.div`
  margin: 0;
  padding: 10px;
  box-sizing: border-box;
  font-family: Inter, sans-serif;

  font-size: 16px;

  color: #737070;
  background-color: #F8F8F8;
  height: 100vh;
`;

export const BoxContainer = styled.div`
    background: white;
    max-width: 400px;
    margin: 100px auto 0px;
    padding-bottom: 20px;
`;
export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
    .icon {
      font-size: 21px;
    }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0px 50px;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100%;
`;

export const NameContainer = styled.div`
text-align: left;
    width: 100%;
        input {
        width: 98%;
        background: white;
        border-radius: 5px;
        border: 1px solid #737070;
        height: 30px;
        }
`

export const EmailContainer = styled.div`
    text-align: left;
    width: 100%;
        input {
        width: 98%;
        background: white;
        border-radius: 5px;
        border: 1px solid #737070;
        height: 30px;
        }
`;
export const PasswordContainer = styled.div`
    text-align: left;
    width: 100%;
`;
export const PasswordInput = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  position: relative;
    .icon {
      font-size: 21px;
      position: absolute;
      right: 0;
      padding: 0 10px;
    }
    input {
        width: 98%;
        background: white;
        border-radius: 5px;
        border: 1px solid #737070;
        height: 30px;
        }
`;

export const LoginBt = styled.button`
    font-size: 16px;
    list-style: none;
    background: rgba(203, 18, 28, 0.7);
    color:white;
    border: none;
    border-radius: 5px;
    margin:10px;
    width: 100%;
    height: 35px;

    padding: 0px;
    margin: 20px;
`;