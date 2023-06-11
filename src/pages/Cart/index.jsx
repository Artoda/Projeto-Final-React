import { useEffect, useState } from "react";
import { BsCartCheck, BsTrash } from "react-icons/bs";
import ButtonComponent from "../../common/components/Button";
import {
  AddCupon,
  BoxListTotal,
  Container,
  ContentContainer,
  ImageContainer,
  ProdItem,
  ProdName,
  ProdTotal,
  ProdValue,
  Product,
  ProductBio,
  ProductBioText,
  ProductTitleContainer,
  ProductsContainer,
  ProductsList,
  SelectedItems,
  ShopContainer,
  TitleContainer,
  TotalName,
  TotalValue,
} from "./style";

export function Cart() {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    // verifica estado do valor total
    const calculateTotal = () => {
      let sum = 0;
      for (const product of cart) {
        sum += product.valor_unitario;
      }
      setTotal(sum);
    };

    calculateTotal();
  }, [cart]);

  // para verificar se tem produtos no carrinho ao finalizar, apaga local e carrinho
  const handleFinalizePurchase = () => {
    if (cart.length === 0) {
      alert("Não há produtos no carrinho.");
      return;
    }

    localStorage.removeItem("cart");
    setCart([]);
    alert("Compra realizada com sucesso.");
  };

  const removeItems = (product) => {
    localStorage.removeItem(0);
    setCart([]);
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
                    <button onClick={() => removeItems(product)}>
                      <BsTrash size={"25px"}></BsTrash>
                    </button>
                  </ShopContainer>
                </Product>
              ))}
            </ProductsContainer>
          </SelectedItems>
          <BoxListTotal>
            <h2>Nome / Valor</h2>
            <ProductsList>
              {cart.map((product) => (
                <ProdItem key={product.id_produto}>
                  <ProdName>{product.nome}</ProdName>
                  <ProdValue>R$ {product.valor_unitario} </ProdValue>
                </ProdItem>
              ))}
              <ProdTotal>
                <TotalName>Total</TotalName>
                <TotalValue>R$ {total} </TotalValue>
              </ProdTotal>
            </ProductsList>
            <AddCupon>
              <h3>Adicione Cupom</h3>
              <input type="text" />
            </AddCupon>
            <ButtonComponent
              Text="Finalizar Compra"
              onClick={handleFinalizePurchase}
            />
          </BoxListTotal>
        </ContentContainer>
      </Container>
    </>
  );
}