import styled from "styled-components";

export const Container = styled.div`
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
`

export const EmailContainer = styled.div`
    text-align: left;
    width: 100%;

`;
export const MessageContainer = styled.div`
    text-align: left;
    width: 100%;
        input {
        height: 300px;
        position: relative;
          ::placeholder {
            position: absolute;
            top: 0;
            padding: 10px 0 0;
          }
        }
`;

export const SendMsgBt = styled.button`
    
`;