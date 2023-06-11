import styled from "styled-components";

export const Container = styled.div`
  box-sizing: border-box;
  margin: 0;
  padding: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
`;

export const PeopleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;  
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--bg-box);
  width: 100%;
  padding: 40px;
    
    h1{
      font-size: 50px;
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
    
    @media (max-width: 768px) {
      flex-wrap: wrap;  
    }
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
  
  img {
   width: 180px;
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