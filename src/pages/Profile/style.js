import styled from "styled-components";
import { TitleContainer } from "../Home/style";


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


export const ContentContainer = styled.div`
  text-align: left;
 
`;


export const InformationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 10px;
`;

export const BoxContainer = styled.div`
  background: white ;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;

`;

export const FooterContainer = styled.div`
  background: white ;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  padding: 20px;

 input {
        width: 98%;
        background: white;
        border-radius: 5px;
        border: 1px solid #737070;
        height: 30px;
        }

`;

export const FormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 10px;
 
  

`;

export const TextContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;  
  flex-direction: column;

`;

export const NumberContainer = styled.div`
  text-align: left;
  

  input {
        width: 100px;
        background: white;
        border-radius: 5px;
        border: 1px solid #737070;
        height: 30px;
        }

`;

export const ComplementContainer = styled.div`
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

export const EnderecoBt = styled.button`
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