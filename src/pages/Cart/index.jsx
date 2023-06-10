import { useEffect, useState } from "react";
import { BsCartCheck } from "react-icons/bs";
import { api } from "../../services/api";
import {
  Container,
  BoxContainer,
  TitleContainer,
  ContentContainer,
  SelectedItems,
  BoxListTotal,
  ProductsList,
  ProdItem,
  ProdTotal,
  AddCupon,
} from "./style";

export function Cart() {   

  // teste localStorage
  const cart = JSON.parse(localStorage.getItem("cart"));
  console.log(cart);



  return (
    <>    
       <Container>
        <BoxContainer>                      
          <TitleContainer>
            <BsCartCheck className="icon" />
            <h2>Carrinho do cliente</h2>
          </TitleContainer>
          <ContentContainer> 
            <SelectedItems>
              <h2>Itens selecionados</h2>
              {/* <ProductsContainer>
               {cart.map((product) => (
                  <Product key={product.id}>
                    <ImageContainer>
                      <img src={product.image} alt={product.name} />
                    </ImageContainer>
                    <ProductTitleContainer>
                      <h2>{product.name}</h2>
                    </ProductTitleContainer>
                    <ShopContainer>
                      <span>R$ {product.price}</span>
                    </ShopContainer>
                  </Product>
                ))} 
              </ProductsContainer>     */}
            </SelectedItems>  
            <BoxListTotal>
              <h1>Nome - Valor</h1>
              <ProductsList>
                <ProdItem>Produto 1</ProdItem>
                <ProdItem>Produto 1</ProdItem>
                <ProdItem>Produto 1</ProdItem>
                <ProdItem>Produto 1</ProdItem>
                <ProdTotal>Total</ProdTotal>
              </ProductsList>
              <AddCupon>
                <input type="text" />
              </AddCupon>
            </BoxListTotal>  
          </ContentContainer>
        </BoxContainer>
      </Container>
    </>
  );
}
