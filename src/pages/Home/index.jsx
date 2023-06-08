import { useLocation } from "react-router-dom";
import { Footer } from "../../common/components/Footer";
import {
  Container,
  TitleContainer,
  NavBar,
  NavItem,
  ProductsContainer,
  Product,
  ImageContainer,
  ProductTitleContainer,
  ShopContainer,
} from "./style";

export function Home() {
  const location = useLocation();
  return (
    <>
      <Container>
        <NavBar>
          <NavItem>
            <NavItem isActive={location.pathname === "/"}>Home</NavItem>
            <NavItem isActive={location.pathname === "/artes"}>Artes</NavItem>
            <NavItem isActive={location.pathname === "/antiguidades"}>
              Antiguidades
            </NavItem>
            <NavItem isActive={location.pathname === "joias"}>Jóias</NavItem>
            <NavItem isActive={location.pathname === "/armas"}>Armas</NavItem>
            <NavItem isActive={location.pathname === "/jogos"}>Jogos</NavItem>
            <NavItem isActive={location.pathname === "/livros"}>Livros</NavItem>
          </NavItem>
        </NavBar>
        <TitleContainer>
          <img
            src="https://media.discordapp.net/attachments/1081311873481322597/1116375624991383572/title.png?width=1440&height=89"
            alt="Logo"
          />
        </TitleContainer>
        <ProductsContainer>
          <Product>
            <ImageContainer>
              <img
                src="https://media.discordapp.net/attachments/1081311873481322597/1116428142421221386/image_9.png"
                alt="Arma"
              />
            </ImageContainer>
            <ProductTitleContainer>
              <h2>-Carabina muito loca-</h2>
            </ProductTitleContainer>
            <ShopContainer>
              <span>R$20.000</span>
            </ShopContainer>
          </Product>
        </ProductsContainer>
      </Container>
    </>
  );
}
