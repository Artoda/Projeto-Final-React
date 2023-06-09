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
  min-height: calc(100vh - 30px);
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-size: 20px;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: space-evenly;
  padding-bottom: 20px;
  gap: 70px;
  height: 70%;

  @media only all and (max-width: 700px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const SelectedItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const BoxListTotal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0px 50px;
  height: 79%;
  background-color: white;
  padding: 15px;
  border-radius: 10px;
  h2 {
    font-size: x-large;
  }
`;

export const ProductsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 25px;
  overflow: auto;
  max-height: 600px;
  max-width: 900px;

`;

export const Product = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  padding: 10px;
  height: 520px;
  width: 270px;
  border-radius: 10px;

`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: flex-start;
  height: 100%;
  justify-content: center;
  margin: 0;

  img {
    width: 200px;
    margin-top:20px;
    border-radius: 10px;
  }
`;

export const ProductTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  h2 {
    font-size: 18px;
  }
`;

export const ShopContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 50px;
  padding: 8px;
  span {
    font-size: large;
  }
`;

export const ProductsList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 100%;
  border-top: 2px solid black;
  padding: 10px;
  gap: 5px;
`;

export const ProdItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  gap: 10px;
`;

export const ProdName = styled.div`
  display: flex;
  align-items: start;
  justify-content: center;
  width: 100%;
  padding: 10px;
`;

export const ProdValue = styled.div`
  display: flex;
  align-items: start;
  justify-content: center;
  width: 100%;
  padding: 10px;
`;

export const ProdTotal = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  border-top: 2px solid black;
  border-bottom: 2px solid black;
  padding: 10px;
`;

export const TotalName = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const TotalValue = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
export const TotalDescont = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const AddCupon = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
  gap: 10px;

  h3 {
    font-size: large;
  }

  input {
    padding: 5px;
    border-radius: 3px;
  }

  button {
    background: none;
    color: inherit;
    border: solid 2.25px;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
    transition: 0.5s;
    border-radius: 4px;
    :hover {
      background-color: rgba(203, 18, 28, 0.7);
      transition: 0.5s;
    }

    &:disabled {
      display: none;
    }
  }
`;

export const Coupon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
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
