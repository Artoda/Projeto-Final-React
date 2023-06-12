import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  font-size: 16px;
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
  width: 100%;
`;

export const EmailContainer = styled.div`
    text-align: left;
    width: 100%;
`;

export const NameContainer = styled.div`
text-align: left;
    width: 100%;
`;

export const MessageContainer = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    width: 100%;
        span {
        padding: 10px 0;

        }
    /* position: relative; */
        textarea {
        border-radius: 5px;
        height: 200px;
        width: 100%;
        font-family: inherit;
        padding: 10px 10px;
        resize: none;
        overflow: auto;
          ::placeholder {
            position: absolute;
            top: 0;
            padding: 10px 0;
          }
        }
`;

export const SendMsgBt = styled.button`
    
`;