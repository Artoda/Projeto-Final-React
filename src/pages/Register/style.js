import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
`;

export const BoxContainer = styled.div`
  background: var(--bg-box);
  max-width: 400px;
  margin: 100px auto 0px;
  padding-bottom: 20px;

  @media only all and (max-width: 432px) {
    max-width: 300px;
  }
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
  width: 100%;
`;

export const NameContainer = styled.div`
  text-align: left;
  width: 100%;
`;

export const EmailContainer = styled.div`
  text-align: left;
  width: 100%;
`;
export const PasswordContainer = styled.div`
  text-align: left;
  width: 100%;
`;
export const PasswordInput = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  position: relative;
  .icon {
    z-index: 1;
    position: absolute;
    right: 0;
    margin-right: 5px;
  }
`;

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const LabelError = styled.label`
  padding: 10px 0;
  margin-top: 10px;
  font-size: 14px;
  color: var(--alert-color);
`;
