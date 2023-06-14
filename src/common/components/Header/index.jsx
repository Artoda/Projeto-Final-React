import { useState, useEffect, useContext } from "react";
import { BsCart3, BsPersonCircle } from "react-icons/bs";
import { AiOutlineDown } from "react-icons/ai";
import { Link, Outlet, useLocation } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import LogoComponent from "../Logo";

import {
  ButtonContainer,
  Container,
  LoginContainer,
  LogoutContainer,
  LogoContainer,
  ProfileContainer,
  RightContainer,
  SearchBar,
  SearchContainer,
  SearchItens,
  SearchResults,
  ShopContainer,
  TextContainer,
  TextContainer2
} from "./style";

export function Header() {
  const [isHidden, setIsHidden] = useState(false);
  const location = useLocation();
  const [products, setProducts] = useState([]);
  const [message, setMessage] = useState("");

  const { signout, checkIsLoggedIn, isLoggedIn, cartItems, nome, getName } =
    useAuth();

  const handleSignout = () => {
    const res = signout();
    alert("deslogado");
    if (res) {
      setError(res);
      return;
    }
  };

  useEffect(() => {
    getName();
  }, [isLoggedIn]);

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
            <LogoComponent />
          </Link>
        </LogoContainer>

        <SearchContainer
          style={{
            display:
              location.pathname === "/" ||
                location.pathname === "/artes" ||
                location.pathname === "/antiguidades" ||
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

          <SearchItens
            products={products}
            style={{ display: message.length === 0 ? "none" : "flex" }}
          >
            {products.map((prod, id) => {
              return (
                <Link
                  to={prod.categoriaProdDto.nome}
                  onClick={() => setMessage("")}
                >
                  <SearchResults>
                    <span key={id}>{prod.nome}</span>
                    <img src={prod.url_imagem} />
                  </SearchResults>
                </Link>
              );
            })}
          </SearchItens>
        </SearchContainer>

        <RightContainer>
          <ProfileContainer
            onClick={() => {
              handleClick();
            }}
          >
            <TextContainer style={{ display: isLoggedIn ? "none" : "flex" }}>
              <span className="helloText">Olá... Entre!</span>
              <span className="loginText">Fazer login <AiOutlineDown/></span>
            </TextContainer>

            <TextContainer2 style={{ display: isLoggedIn ? "flex" : "none" }}>
              <BsPersonCircle className="icon" />
              <span className="nome"> Olá, {nome} </span>
              <AiOutlineDown/>
            </TextContainer2>

            <LoginContainer
              style={{ display: isHidden && isLoggedIn ? "flex" : "none" }}
            >
              <span className="triangle"></span>
              <span className="nomes"> {nome} </span>
              <Link to={"/myprofile"}>
                <ButtonContainer>Meu Perfil</ButtonContainer>
              </Link>
              <ButtonContainer
                onClick={() => {
                  handleSignout();
                  checkIsLoggedIn();
                }}
              >
                Deslogar
              </ButtonContainer>
            </LoginContainer>
            
            <LogoutContainer
              style={{ display: isHidden && !isLoggedIn ? "flex" : "none" }}
            >
              <span className="triangle"></span>
              <span>
                Para ter uma experiência personalizada, acesse sua conta 😊
              </span>
              <Link to={"/login"}>
                <ButtonContainer>Entrar</ButtonContainer>
              </Link>
              <Link to={"/register"}>
                <ButtonContainer>Cadastrar</ButtonContainer>
              </Link>
            </LogoutContainer>
          </ProfileContainer>

          <ShopContainer>
            <Link to={"/cart"}>
              <BsCart3 className="icon" />
            </Link>
            <span style={{ display: cartItems > 0 ? "flex" : "none" }}>
              {cartItems}
            </span>
          </ShopContainer>
        </RightContainer>
      </Container>
      <Outlet />
    </>
  );
}
