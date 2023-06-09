import { useLocation } from "react-router-dom";
import { Footer } from "../../common/components/Footer";
import {
  Container,
  TitleContainer,
  NavBarContainer,
  NavBar,
  NavItem,
  ProductsContainer,
  Product,
  ImageContainer,
  ProductTitleContainer,
  ShopContainer,
} from "./style";
import { useEffect, useState } from "react";

export function Home() {
  const location = useLocation();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let data = await fetch(
        "https://trabalho-api-desenv-web-g2.up.railway.app/postgres/produtos/dto"
      );
      let product = await data.json();
      setProducts(product);
    }

    fetchData();
  }, []);

  return (
    <>
      <Container>
        <NavBarContainer>
          <NavBar>
            <NavItem isActive={location.pathname === "/"}>Home</NavItem>
            <NavItem isActive={location.pathname === "/artes"}>Artes</NavItem>
            <NavItem isActive={location.pathname === "/antiguidades"}>
              Antiguidades
            </NavItem>
            <NavItem isActive={location.pathname === "joias"}>Jóias</NavItem>
            <NavItem isActive={location.pathname === "/armas"}>Armas</NavItem>
            <NavItem isActive={location.pathname === "/jogos"}>Jogos</NavItem>
            <NavItem isActive={location.pathname === "/livros"}>Livros</NavItem>
          </NavBar>
        </NavBarContainer>
        <TitleContainer>
          <img
            src="https://media.discordapp.net/attachments/1081311873481322597/1116375624991383572/title.png?width=1440&height=89"
            alt="Logo"
          />
        </TitleContainer>
        {products.map((productM) => {
          return (
            <ProductsContainer>
              <Product>
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
            </ProductsContainer>
          );
        })}
      </Container>
    </>
  );
}
