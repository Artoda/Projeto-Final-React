import { Link, Outlet, useLocation } from "react-router-dom";
import { useState } from "react";

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
  TextContainer,
  ButtonContainer,
} from "./style";

export function Header() {
  const [isHidden, setIsHidden] = useState(false);
  const location = useLocation();

  const handleClick = () => {
    setIsHidden((current) => !current);
  };

  return (
    <>
      <Container>
        <LeftContainer>
          <LogoContainer>
            <img
              src="https://cdn.discordapp.com/attachments/1081311873481322597/1116370527892819978/g2pawnshop-logo.png"
              alt="Logo"
            />
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
          <SearchBar placeholder="O que ta procurando?"></SearchBar>
          <img
            src="https://media.discordapp.net/attachments/1081311873481322597/1116415331209072681/lupa-icon.png"
            alt="lupa"
          />
        </SearchContainer>

        <RightContainer>
          <ProfileContainer>
            <span>
              Welcome, <span>Romulo</span>
            </span>
            <img
              src="https://avatars.githubusercontent.com/u/127253895?v=4"
              alt="Romulo Andriolo"
              onClick={handleClick}
            />

            <LoginContainer style={{ display: isHidden ? "flex" : "none" }}>
              <TextContainer>
                <span>
                  Para ver seus pedidos e ter uma experiencia personalizada,
                  acesse sua conta 😊
                </span>
              </TextContainer>
              <Link to={"/login"}>
                <ButtonContainer>Entrar</ButtonContainer>
              </Link>
              <Link to={"/register"}>
                <ButtonContainer>Cadastrar</ButtonContainer>
              </Link>
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
