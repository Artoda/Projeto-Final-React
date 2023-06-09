import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
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
  height: 100%;
  width: 50%;
`;


export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background-color: #ffffff;
  width: 100%;
    
    img {
      padding: 10px;
    }
    
    h1{
      padding-top: 15px;
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
    /* height: 50%; */
    width: 100%;
    justify-content: center;
    background-color:  #ffffff;
    gap: 30px;  
  
    h1{   
      font-size: 25px;
      color: #737070;
    }
  `;

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  img {
   width: 200px;
   border-radius: 50%;
  }

  h1{   
    font-size: 30px;
    color: #737070;
  }
`;