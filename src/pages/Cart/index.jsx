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
  TotalDescont,
} from "./style";
import { Link } from "react-router-dom";

export function Cart() {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [newTotal, setNewTotal] = useState(0);
  const [coupon, setCoupon] = useState("");
  const [disabled, setDisabled] = useState(false);

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

  const coupons = ["teste", "teste2"];

  const totalCoupon = () => {
    let newTotal = total;
    let anotherTotal = 0;

    if (coupons.includes(coupon)) {
      setDisabled(true);

      anotherTotal = total - Math.floor(Math.random() * (500 - 100 + 1)) + 100;
    } else {
      alert("Cupon Inexistente");
    }

    setNewTotal(anotherTotal);
    setTotal(newTotal);
  };
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

  const removeItems = (productId) => {
    const updatedCart = cart.filter(
      (product) => product.id_produto !== productId
    );
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <>
      <Container>
        <TitleContainer>
          <BsCartCheck size={"30px"} />
          <h2>Carrinho do cliente</h2>
        </TitleContainer>
        <ContentContainer>
          <SelectedItems style={{ display: cart.length > 0 ? "flex" : "none" }}>
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

                    <BsTrash
                      size={"25px"}
                      style={{ cursor: "pointer" }}
                      onClick={() => removeItems(product.id_produto)}
                    ></BsTrash>
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

                <TotalValue
                  style={{
                    textDecorationLine: disabled ? "line-through" : "none",
                  }}
                >
                  R$ {total}{" "}
                </TotalValue>
                <TotalDescont style={{ display: disabled ? "flex" : "none" }}>
                  R$ {newTotal}
                </TotalDescont>
              </ProdTotal>
            </ProductsList>
            <AddCupon>
              <h3>Adicionar Cupom</h3>
              <input
                type="text"
                value={coupon}
                onChange={(e) => {
                  setCoupon(e.target.value);
                }}
              />
              <button disabled={disabled} onClick={totalCoupon}>
                Checar Cupom
              </button>
            </AddCupon>
            <Link to={"/"}>
              <ButtonComponent
                Text="Finalizar Compra"
                onClick={handleFinalizePurchase}
              />
            </Link>
          </BoxListTotal>
        </ContentContainer>
      </Container>
    </>
  );
}
