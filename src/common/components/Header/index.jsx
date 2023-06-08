import { Outlet } from "react-router-dom";

import {
  Container,
  LeftContainer,
  LogoContainer,
  ProfileContainer,
  ShopContainer,
  RightContainer,
  SearchContainer,
  SearchBar,
} from "./style";

export function Header() {
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

        <SearchContainer>
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
            />
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
