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

export const BoxContainer = styled.div`
 text-align: left;
 width: 100%;
 display: flex;
 flex-direction: row ;
gap: 10px;
`;



export const ContentContainer = styled.div`
  background: white ;

`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 10px;

  
`;

export const FormContainer = styled.div`
  text-align: left ;
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 10px;
 
  
`;

export const FooterContainer = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;

  button{
    background: var(--bg-button);
    font-size: 16px;
    list-style: none;
    color: var(--terciary-color);
    border: none;
    border-radius: 5px;
    width: 100%;
    height: 35px;
    margin: 10px 0px 20px;
    cursor: pointer;
  }

  input{
    border-radius: 5px;
    height: 30px;
  }
`;

export const NumberContainer = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;

  input{
    width: 10vh;
  }
  
`;

export const ComplementContainer = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  
`;




