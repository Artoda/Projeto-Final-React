import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { api } from "../../services/api";
import {
  Container,
  HomeContainer,
  ImageContainer,
  NavBar,
  NavBarContainer,
  NavItem,
  Product,
  ProductBio,
  ProductBioText,
  ProductTitleContainer,
  ProductsContainer,
  ShopContainer,
  TitleContainer,
} from "./style";

export function Home() {
  const location = useLocation();
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let { data: product } = await api.get("/produtos/dto");
      setProducts(product);
    }
    fetchData();
  }, []);

  // salvando carrinho no localStorage
  const handleAddToCart = (product) => {
    setCart((prevItems) => [...prevItems, product]);
    localStorage.setItem("cart", JSON.stringify(cart));
    console.log(cart)
  };

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
          {location.pathname === "/" ? (
            <HomeContainer>
              <span>Bem vindo!</span>
              <img
                src="https://cdn.discordapp.com/attachments/1081311873481322597/1116370527892819978/g2pawnshop-logo.png"
                alt="Logo" 
              />
            </HomeContainer>
          ) : null}
          {location.pathname === "/antiguidades"
            ? products
                .filter((prod) => prod.categoriaProdDto.nome == "antiguidades")
                .map((productM) => {
                  return (
                    <Product key={productM.nome}>
                      <ImageContainer>
                        <img src={productM.url_imagem} alt="imagem" />
                      </ImageContainer>
                      <ProductTitleContainer>
                        <h2>{productM.nome}</h2>
                      </ProductTitleContainer>
                      <ProductBio>
                        <ProductBioText>
                          <span>{productM.descricao}</span>
                        </ProductBioText>
                      </ProductBio>
                      <ShopContainer>
                        <span>R$ {productM.valor_unitario}</span>
                        <button onClick={() => handleAddToCart(productM)}><img
                          src="https://media.discordapp.net/attachments/1081311873481322597/1116379466873188443/cart-icon.png"
                          alt="Carrinho" onClick={() => handleAddToCart(productM)}
                        /></button>
                      </ShopContainer>
                    </Product>
                  );
                })
            : null}
          {location.pathname === "/artes"
            ? products
                .filter((prod) => prod.categoriaProdDto.nome == "artes")
                .map((productM) => {
                  return (
                    <Product key={productM.nome}>
                      <ImageContainer>
                        <img src={productM.url_imagem} alt="imagem" />
                      </ImageContainer>
                      <ProductTitleContainer>
                        <h2>{productM.nome}</h2>
                      </ProductTitleContainer>
                      <ProductBio>
                        <ProductBioText>
                          <span>{productM.descricao}</span>
                        </ProductBioText>
                      </ProductBio>
                      <ShopContainer>
                        <span>R$ {productM.valor_unitario}</span>
                        <button onClick={() => handleAddToCart(productM)}><img
                          src="https://media.discordapp.net/attachments/1081311873481322597/1116379466873188443/cart-icon.png"
                          alt="Carrinho" 
                        /></button>
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
