import styled from "styled-components";

export const Container = styled.div`
  margin: 0;
  padding: 0px;
  box-sizing: border-box;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  background-color: #f8f8f8;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-size: 20px;
  height: 100%;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  padding-bottom: 20px;
  height: 100%;
`;

export const SelectedItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0px 50px;
`;

export const BoxListTotal = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin: 0px 50px;

  h1{
    border-top: 2px solid black;
    border-bottom: 2px solid black;
  }
`;

export const ProductsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 80%;
  gap: 50px;
  flex-wrap: wrap;
`;

export const Product = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #e9e9e9;
  padding: 20px;
  height: 400px;
  width: 270px;
  border-radius: 5%;
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: center;

  img {
    width: 200px;
  }
`;

export const ProductTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`;

export const ShopContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 100%;
`;

export const ProductsList = styled.div`
display: flex;
flex-direction: column;
align-items: start;
width: 100%;
`;

export const ProdItem = styled.div`
display: flex;
flex-direction: column;
align-items: start;
width: 100%;
padding: 5px;
`;

export const ProdTotal = styled.div`
display: flex;
flex-direction: column;
align-items: start;
width: 100%;
border-top: 2px solid black;
`;

export const ProductBio = styled.div`
display: flex;
flex-direction: column;
align-items: start;
width: 100%;
border-top: 2px solid black;
`;

export const ProductBioText = styled.div`
  display: flex;
  opacity: 1;
  align-items: center;
  justify-content: center;
  height: 100%;
  span {
    background-color: black;
    color: white;
    font-size: large;
  }
`;