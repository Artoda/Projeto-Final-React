import styled from "styled-components";

export const Container = styled.div`
  background: white ;
  display: flex;
  margin: 0;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
 

  color: #737070;
  background-color: #F8F8F8;
  height: 90vh;
;
  
`;

export const InformationContainer = styled.div`
  
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 10px;

`;

export const ContentContainer = styled.div`
    background: white ;
`;

export const NomeContainer = styled.div`
    text-align: left;
    width: 100%;
`;

export const EmailContainer = styled.div`
    text-align: left;
    width: 100%;
`;

export const EnderecoContainer = styled.div`
    text-align: left;
    width: 100%;
`;

export const BoxContainer = styled.div`
    display: flex;
    width: 50vh;
    height: 30vh;
    flex-direction: column;
    padding: 10px;
    gap: 20px;
`;

export const FooterContainer = styled.div`
    text-align: center;
    padding: 10px;
    width: 50vh;
    height: 10vh;

    span{
        color: red;
    }
    
`;