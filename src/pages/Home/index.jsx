import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { api } from "../../services/api";
import useAuth from "../../hooks/useAuth";
import React from "react";
import ReactPlayer from "react-player";
import {
  Container,
  HomeContainer,
  ImageContainer,
  NavBar,
  NavBarButton,
  NavBarContainer,
  NavItem,
  Product,
  ProductBio,
  ProductBioText,
  ProductTitleContainer,
  ProductsContainer,
  ShopContainer,
  TitleContainer,
  VideoContainer,
} from "./style";

export function Home() {
  const location = useLocation();
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const { checkCartItems } = useAuth();

  useEffect(() => { }, []);

  useEffect(() => {
    async function fetchData() {
      let { data: product } = await api.get("/produtos/dto");
      setProducts(product);
      // console.log(product)
    }
    fetchData();
  }, []);

  // salvando carrinho no localStorage
  const handleAddToCart = (product) => {
    const isProductInCart = cart.some(
      (item) => item.id_produto === product.id_produto
    );
    if (isProductInCart) {
      alert("Este produto já está no carrinho.");
      return;
    }

    setCart((prevCart) => {
      const updatedCart = [...prevCart, product];
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };


  useEffect(() => {
    // atualiza os dados do carrinho com localStorage
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // verifica o estado do carrinho após atualizar
  useEffect(() => {
    console.log(cart);
    checkCartItems();
  }, [cart]);

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
            <NavBarButton>
              <span>Categorias</span>
            </NavBarButton>
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
              <span>Bem vindo ao melhor site de penhoras da sua região!</span>
              <VideoContainer>
                <ReactPlayer url="https://youtu.be/MANh1Ys2tDQ" />
              </VideoContainer>
            </HomeContainer>
          ) : null}
          {location.pathname === "/antiguidades"
            ? products
              .filter((prod) => prod.categoriaProdDto.id_categoria == 2)
              .map((productM) => {
                return (
                  <Product key={productM.id_produto}>
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
                      <button
                        onClick={() => {
                          handleAddToCart(productM);
                        }}
                      >
                        <img
                          src="https://media.discordapp.net/attachments/1081311873481322597/1116379466873188443/cart-icon.png"
                          alt="Carrinho"
                        />
                      </button>
                    </ShopContainer>
                  </Product>
                );
              })
            : null}
          {location.pathname === "/artes"
            ? products
              .filter((prod) => prod.categoriaProdDto.id_categoria == 3)
              .map((productM) => {
                return (
                  <Product key={productM.id_produto}>
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
                      {/* tem que deixar button senão não pega o localStorage */}
                      <button
                        onClick={() => {
                          handleAddToCart(productM);
                        }}
                      >
                        <img
                          src="https://media.discordapp.net/attachments/1081311873481322597/1116379466873188443/cart-icon.png"
                          alt="Carrinho"
                        />
                      </button>
                    </ShopContainer>
                  </Product>
                );
              })
            : null}
          {location.pathname === "/armas"
            ? products
              .filter((prod) => prod.categoriaProdDto.id_categoria == 1)
              .map((productM) => {
                return (
                  <Product key={productM.id_produto}>
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
                      {/* tem que deixar button senão não pega o localStorage */}
                      <button onClick={() => handleAddToCart(productM)}>
                        <img
                          src="https://media.discordapp.net/attachments/1081311873481322597/1116379466873188443/cart-icon.png"
                          alt="Carrinho"
                        />
                      </button>
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
