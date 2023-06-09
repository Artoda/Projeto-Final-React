import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  background-color: #f8f8f8;
  height: 100%;
`;

export const PeopleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 55%;
  margin-top: 150px;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  width: 100%;
  padding: 40px;
    
    h1{
      font-size: 60px;
      color: #CB1212;
    }

    button {
      background-color: #ffffff;
      border: none;
    }
  `;

  export const PersonContainer = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: center;
    background-color:  #ffffff;
    gap: 30px; 
  `;

export const UsContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;

  h1{   
    font-size: 30px;
    color: #737070;
    padding: 10px;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  
  h1{   
    font-size: 30px;
    color: #737070;
    padding: 10px;
  }
  
  img {
   width: 200px;
   border-radius: 50%;
  }
`;

export const IconsContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  .icon{
    color: black;
    font-size: 60px;
    padding: 10px;
  }
`;