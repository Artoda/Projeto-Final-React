import { Link, useLocation } from "react-router-dom";
import { api } from "../../services/api";
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
      let { data: product } = await api.get("/produtos/dto");
      setProducts(product);
      var categorieAnt = product.filter(
        (prod) => prod.categoriaProdDto.nome == "antiguidade"
      );
      console.log(categorieAnt);
    }

    fetchData();
  }, []);

  return (
    <>
      <Container>
        <NavBarContainer>
          <NavBar>
            <Link to={"/"}>
              <NavItem isActive={location.pathname === "/"}>Home</NavItem>
            </Link>
            <Link to={"/artes"}>
              <NavItem isActive={location.pathname === "/artes"}>Artes</NavItem>
            </Link>
            <Link to={"/antiguidades"}>
              <NavItem isActive={location.pathname === "/antiguidades"}>
                Antiguidades
              </NavItem>
            </Link>
            <Link to={"/joias"}>
              <NavItem isActive={location.pathname === "/joias"}>Jóias</NavItem>
            </Link>
            <Link to={"/armas"}>
              <NavItem isActive={location.pathname === "/armas"}>Armas</NavItem>
            </Link>
            <Link to={"/jogos"}>
              <NavItem isActive={location.pathname === "/jogos"}>Jogos</NavItem>
            </Link>
            <Link to={"/livros"}>
              <NavItem isActive={location.pathname === "/livros"}>
                Livros
              </NavItem>
            </Link>
          </NavBar>
        </NavBarContainer>
        <TitleContainer>
          <img
            src="https://media.discordapp.net/attachments/1081311873481322597/1116375624991383572/title.png?width=1440&height=89"
            alt="Logo"
          />
        </TitleContainer>
        <ProductsContainer>
          {location.pathname === "/antiguidades"
            ? products.map((productM) => {
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
              })
            : null}
        </ProductsContainer>
      </Container>
    </>
  );
}
