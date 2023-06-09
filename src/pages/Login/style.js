import styled from "styled-components";

export const Container = styled.div`
  font-size: 16px;
  height: 100vh;
`;

export const BoxContainer = styled.div`
    background: var(--bg-box);
    max-width: 400px;
    margin: 100px auto 0px;
    padding-bottom: 20px;
`;
export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
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

export const EmailContainer = styled.div`
    text-align: left;
    width: 100%;
        input {
        width: 98%;
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
      position: absolute;
      right: 0;
      padding: 0 10px;
    }
    input {
        width: 98%;
        }
`;

export const LoginBt = styled.button`
`;

export const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`