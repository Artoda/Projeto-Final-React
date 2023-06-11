import { useEffect, useState } from "react";
import { BsCartCheck } from "react-icons/bs";
import { api } from "../../services/api";
import {
  Container,
  BoxContainer,
  TitleContainer,
  ContentContainer,
  ProductsContainer,
  Product,
  ImageContainer,
  ProductTitleContainer,
  ProductBio,
  ShopContainer,
  SelectedItems,
  BoxListTotal,
  ProductsList,
  ProdItem,
  ProdTotal,
  ProductBioText,
} from "./style";

export function Cart() {   
  // const [cart, setCart] = useState([]);
  // const [total, setTotal] = useState(0);

  // teste localStorage
  const cart = JSON.parse(localStorage.getItem("cart"));
  console.log(cart);

  // useEffect(() => {
  //   const savedCart = JSON.parse(localStorage.getItem("cart"));
  //   if (savedCart) {
  //     setCart(savedCart);
  //   }
  // }, []);


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
              <ProductsContainer>
          {cart.map((product) => (
            <Product key={product.id}>
              <ImageContainer>
                <img src={product.url_imagem} alt={product.nome} />
                </ImageContainer>
                  <ProductTitleContainer>
                    <h2>{product.nome}</h2>
                </ProductTitleContainer>
                  <ProductBio>
                <ProductBioText>
                  <span>{product.descricao}</span>
                </ProductBioText>
              </ProductBio>
              <ShopContainer>
                <span>R$ {product.valor_unitario}</span>
              </ShopContainer>
                      </Product>
                  ))}
                </ProductsContainer> 
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
                  {/* <AddCupon> */}
                    <input type="text" />
                  {/* </AddCupon> */}
                </BoxListTotal>  
              </ContentContainer>
            </BoxContainer>
          </Container>
    </>
  );
}
