import { useEffect, useState } from "react";
import { BsCartCheck } from "react-icons/bs";
import { api } from "../../services/api";
import {
  Container,
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
  ProdName,
  ProdValue,
  ProdTotal,
  TotalName,
  TotalValue,
  AddCupon,
  ProductBioText,
} from "./style";

export function Cart() {   
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  // teste localStorage
  // const cart = JSON.parse(localStorage.getItem("cart"));
  // console.log(cart);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart"));
    if (savedCart) {
      setCart(savedCart);
      console.log(savedCart);
      calculateTotal(savedCart); // calcula total soma de produtos
    }
  }, []);  // VERIFICAR PRODUTOS DUPLICANDO

  const calculateTotal = (cart) => {
    const totalValue = cart.reduce(
      (acc, product) => acc + product.valor_unitario, 0);
    setTotal(totalValue);
  };

  return (
    <>    
       <Container>
          <TitleContainer>
            <BsCartCheck size={"30px"} />
            <h2>Carrinho do cliente</h2>
          </TitleContainer>
          <ContentContainer>
            <SelectedItems>
              <h2>Itens selecionados</h2>
              <ProductsContainer>
          {cart.map((product) => (
            <Product key={product.id_produto}>
              <ImageContainer>
                <img src={product.url_imagem} alt={product.nome} />
                </ImageContainer>
                  <ProductTitleContainer>
                    <h2>{product.nome}</h2>
                 </ProductTitleContainer>
                  <ProductBio>
                   <ProductBioText>
                  {/* <span>{product.descricao}</span> */}
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
                  <h2>Nome e valor</h2>
                  <ProductsList>
                  {cart.map((product) => (
                    <ProdItem key={product.id_produto}>
                        <ProdName>{product.nome}</ProdName>
                        <ProdValue>R$ {product.valor_unitario}</ProdValue>
                    </ProdItem>
                  ))}
                  <ProdTotal>
                  <TotalName>Total</TotalName>                
                  <TotalValue>R$ {total} </TotalValue>
                  </ProdTotal>
                  
                </ProductsList>  
                  <AddCupon>
                    <h3>Adicione cupom</h3>
                  <input type="text" />
                  </AddCupon>                
                  </BoxListTotal>  
            </ContentContainer>
       </Container>
    </>
  );
}
