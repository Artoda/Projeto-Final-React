import { Link, Outlet, json, useLocation } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import useAuth from "../../../hooks/useAuth";
import { GrSearch } from 'react-icons/gr';
import { BsCart3 } from 'react-icons/bs';

import {
  Container,
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

  const { signout, checkIsLoggedIn, isLoggedIn, cartItems } = useAuth();

  const handleSignout = () => {
    const res = signout();
    alert("deslogado");
    if (res) {
      setError(res);
      return;
    }
  };

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
        
        <LogoContainer>
          <Link to={"/"}>
            <img
              src="https://cdn.discordapp.com/attachments/1081311873481322597/1116370527892819978/g2pawnshop-logo.png"
              alt="Logo"
            />
          </Link>
        </LogoContainer>

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
          
            <GrSearch className="icon" />
          

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
          <ProfileContainer onClick={() => {
                handleClick();
              }}>
            
            <span style={{ display: isLoggedIn ? "none" : "flex" }}>
              Olá, faça login ou cadastre-se ↓
            </span>
            <span style={{ display: isLoggedIn ? "flex" : "none" }}>
              Welcome,
              <Link to={"/myProfile"}>
                <span>Romulo</span>
              </Link>
            </span>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/European_Brown_Bear.jpg/280px-European_Brown_Bear.jpg"
              alt="urso"
              style={{ display: isLoggedIn ? "flex" : "none" }}
            />

            <LoginContainer style={{ display: isHidden ? "flex" : "none" }}>
                <span className="square"></span>
                <span style={{ display: isLoggedIn ? "none" : "flex" }}>
                  Para ver seus pedidos e ter uma experiência personalizada,
                  acesse sua conta 😊
                </span>
              <Link to={"/login"}>
                <ButtonContainer
                  style={{ display: isLoggedIn ? "none" : "flex" }}
                >
                  entrar
                </ButtonContainer>
              </Link>
              <Link to={"/register"}>
                <ButtonContainer
                  style={{ display: isLoggedIn ? "none" : "flex" }}
                >
                  cadastrar
                </ButtonContainer>
              </Link>
              <Link to={"/myprofile"}>
                <ButtonContainer
                  style={{ display: isLoggedIn ? "flex" : "none" }}
                >
                  meu perfil
                </ButtonContainer>
              </Link>
              <ButtonContainer
                style={{ display: isLoggedIn ? "flex" : "none" }}
                onClick={() => {
                  handleSignout();
                  checkIsLoggedIn();
                }}
              >
                deslogar
              </ButtonContainer>
            </LoginContainer>
          </ProfileContainer>

          <ShopContainer>
            
          <Link to={"/cart"}>
            <BsCart3 className="icon" />
          </Link>
           <span style={{ display: cartItems > 0 ? "flex" : "none" }} >{cartItems}</span>
          </ShopContainer>
        </RightContainer>

      </Container>
      <Outlet />
    </>
  );
}
