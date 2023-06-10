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
  Product,
  ImageContainer,
  ProductsContainer,
  ProductTitleContainer,
  ShopContainer,
  ProductsList,
  ProdItem,
  ProdTotal,
  Cupom,
} from "./style";

export function Cart() {
  
        const [products, setProducts] = useState([]);
  
    useEffect(() => {
      async function fetchData() {
        let { data: product } = await api.get("/produtos/dto");
        setProducts(product);
        const categories = product.forEach((prod) => prod.categoriaProdDto);
      }
      fetchData();
    }, []);


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
                 {products.map((productM) => {
                     return (
                        <Product key={productM.nome}>
                            <ImageContainer>
                            <img src={productM.descricao} alt="Arma" />
                            </ImageContainer>
                            <ProductTitleContainer>
                            <h2>{productM.nome}</h2>
                            </ProductTitleContainer>
                            <ShopContainer>
                            <span>R$ {productM.valor_unitario}</span>
                            </ShopContainer>
                        </Product>    
                        );
                  })}
              </ProductsContainer>    
              </SelectedItems>  
              <BoxListTotal>
                <h1>Nome - Valor</h1>
                   <ProductsList>
                       <ProdItem >Produto 1</ProdItem>
                       <ProdItem >Produto 1</ProdItem>
                       <ProdItem >Produto 1</ProdItem>
                       <ProdItem >Produto 1</ProdItem>
                       <ProdTotal >Total</ProdTotal>
                    </ProductsList>
                    <Cupom>

                    </Cupom>
              </BoxListTotal>  
          </ContentContainer>
        </BoxContainer>
      </Container>
    </>
  );
}
