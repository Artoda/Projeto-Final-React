import { Link, Outlet, json, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import useAuth from "../../../hooks/useAuth";

import {
  Container,
  LeftContainer,
  LogoContainer,
  ProfileContainer,
  ShopContainer,
  RightContainer,
  SearchContainer,
  SearchBar,
  LoginContainer,
  ButtonContainer,
  SearchItens,
  SearchResults
} from "./style";

export function Header() {
  const [isHidden, setIsHidden] = useState(false);
  const location = useLocation();
  const [products, setProducts] = useState([]);
  const [message, setMessage] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const { signout } = useAuth();

  const handleSignout = () => {
    const res = signout();
    alert("deslogado");
    if (res) {
      setError(res);
      return;
    }
  }

  const checkIsLoggedIn = () => {
    const res = localStorage.length;
    if (res > 1) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
    return;
  }

  const fetchData = (value) => {
    fetch(
      "https://trabalho-api-desenv-web-g2.up.railway.app/postgres/produtos/dto"
    )
      .then((response) => response.json())
      .then((json) => {
        const results = json.filter((prods) => {
          return (
            value &&
            prods &&
            prods.nome &&
            prods.nome.toLowerCase().includes(value.toLowerCase())
          );
        });
        setProducts(results);
      });
  };

  const handleChange = (prop) => {
    setMessage(prop.target.value);
    fetchData(prop.target.value);
  };

  const handleClick = () => {
    setIsHidden((current) => !current);
  };

  return (
    <>
      <Container>
        <LeftContainer>
          <LogoContainer>
            <Link to={"/"}>
              <img
                src="https://cdn.discordapp.com/attachments/1081311873481322597/1116370527892819978/g2pawnshop-logo.png"
                alt="Logo"
              />
            </Link>
          </LogoContainer>
        </LeftContainer>

        <SearchContainer
          style={{
            display:
              location.pathname === "/" ||
              location.pathname === "/artes" ||
              location.pathname === "/antiguidades" ||
              location.pathname === "/joias" ||
              location.pathname === "/armas" ||
              location.pathname === "/jogos" ||
              location.pathname === "/livros"
                ? "flex"
                : "none",
          }}
        >
          <SearchBar
            placeholder="O que ta procurando?"
            onChange={handleChange}
            value={message}
            setProducts={setProducts}
          ></SearchBar>
          <img
            src="https://media.discordapp.net/attachments/1081311873481322597/1116415331209072681/lupa-icon.png"
            alt="lupa"
          />
          <SearchItens products={products}>
            {products.map((prod, id) => {
              return (
                <Link to={prod.categoriaProdDto.nome}>
                  <SearchResults>
                    <span key={id}>{prod.nome}</span>
                    <img src={prod.descricao} />
                  </SearchResults>
                </Link>
              );
            })}
          </SearchItens>
        </SearchContainer>

        <RightContainer>
          <ProfileContainer>
            <span>
              Welcome,
              <Link to={"/myProfile"}>
                <span>Romulo</span>
              </Link>
            </span>
            <img
              src="https://avatars.githubusercontent.com/u/127253895?v=4"
              alt="Romulo Andriolo"
              onClick={() => {
                handleClick();
                checkIsLoggedIn();
              }}
            />

            <LoginContainer style={{ display: isHidden ? "flex" : "none" }}>
                <span className="square"></span>
                <span style={{ display: isLoggedIn ? "none" : "flex" }}>
                  Para ver seus pedidos e ter uma experiencia personalizada,
                  acesse sua conta 😊
                </span>
              <Link to={"/login"}>
                <ButtonContainer style={{ display: isLoggedIn ? "none" : "flex" }}>entrar</ButtonContainer>
              </Link>
              <Link to={"/register"}>
                <ButtonContainer style={{ display: isLoggedIn ? "none" : "flex" }}>cadastrar</ButtonContainer>
              </Link>
              <Link to={"/myprofile"}>
                <ButtonContainer style={{ display: isLoggedIn ? "flex" : "none" }}>meu perfil</ButtonContainer>
              </Link>
              <ButtonContainer style={{ display: isLoggedIn ? "flex" : "none" }} 
              onClick={() => {
                handleSignout();
                checkIsLoggedIn();
              }}>deslogar</ButtonContainer>
            </LoginContainer>
          </ProfileContainer>

          <ShopContainer>
            <img
              src="https://media.discordapp.net/attachments/1081311873481322597/1116379466873188443/cart-icon.png"
              alt="Carrinho"
            />
          </ShopContainer>
        </RightContainer>
      </Container>
      <Outlet />
    </>
  );
}
