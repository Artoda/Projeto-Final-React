import { useEffect, useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { api } from "../../services/api";
import useAuth from "../../hooks/useAuth";
import ReactPlayer from "react-player";
import { BsCart3 } from "react-icons/bs";
import {
  Container,
  ButtonCategorie,
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
  VideoContainer,
  LogoIcon,
} from "./style";

export function Home() {
  const location = useLocation();
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [isHidden, setIsHidden] = useState(true);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const { checkCartItems } = useAuth();

  function handleResize() {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (windowSize.width > 700) {
      setIsHidden(true);
    }
  }, [windowSize.width, windowSize.height]);

  useEffect(() => {
    async function fetchData() {
      let { data: product } = await api.get("/produtos/dto");
      setProducts(product);
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
  const handleClick = () => {
    if (windowSize.width < 700) setIsHidden((current) => !current);
    else null;
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
        <ButtonCategorie>
          <button
            onClick={() => {
              handleClick();
            }}
          >
            Categorias
          </button>
        </ButtonCategorie>
        <NavBarContainer style={{ display: isHidden ? "flex" : "none" }}>
          <NavBar>
            <Link to={"/"} onClick={handleClick}>
              <NavItem isActive={location.pathname === "/"}>Home</NavItem>
            </Link>
            <Link to={"/artes"} onClick={handleClick}>
              <NavItem isActive={location.pathname === "/artes"}>Artes</NavItem>
            </Link>
            <Link to={"/antiguidades"} onClick={handleClick}>
              <NavItem isActive={location.pathname === "/antiguidades"}>
                Antiguidades
              </NavItem>
            </Link>
            <Link to={"/armas"} onClick={handleClick}>
              <NavItem isActive={location.pathname === "/armas"}>Armas</NavItem>
            </Link>
            <Link to={"/jogos"} onClick={handleClick}>
              <NavItem isActive={location.pathname === "/jogos"}>Jogos</NavItem>
            </Link>
            <Link to={"/livros"} onClick={handleClick}>
              <NavItem isActive={location.pathname === "/livros"}>
                Livros
              </NavItem>
            </Link>
          </NavBar>
        </NavBarContainer>
        <TitleContainer>
          <LogoIcon>
            <span className="square1"></span>
            <span className="square2"></span>
            <span className="square3"></span>
          </LogoIcon>
          <h1>A sua loja de penhores favorita!</h1>
        </TitleContainer>
        <ProductsContainer>
          {location.pathname === "/" ? (
            <HomeContainer>
              <span>Bem vindo ao <span>G2PAWNSHOP!</span><br /> A melhor loja de penhores da sua região!</span>
              <VideoContainer>
                <ReactPlayer
                  width={"100%"}
                  height={500}
                  url="https://youtu.be/MANh1Ys2tDQ"
                />
              </VideoContainer>
            </HomeContainer>
          ) : null}
          {location.pathname === "/antiguidades"
            ? products
                .filter((prod) => prod.categoriaProdDto.id_categoria == 5)
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
                        {productM.qtd_estoque === 0 ? (
                          <span>ESGOTADO</span>
                        ) : (
                          <>
                            <span>R$ {productM.valor_unitario}</span>
                            <BsCart3
                              onClick={() => {
                                handleAddToCart(productM);
                              }}
                              className="icon"
                            />
                          </>
                        )}
                      </ShopContainer>
                    </Product>
                  );
                })
            : null}
          {location.pathname === "/artes"
            ? products
                .filter((prod) => prod.categoriaProdDto.id_categoria == 4)
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
                        {productM.qtd_estoque === 0 ? (
                          <span>ESGOTADO</span>
                        ) : (
                          <>
                            <span>R$ {productM.valor_unitario}</span>
                            <BsCart3
                              onClick={() => {
                                handleAddToCart(productM);
                              }}
                              className="icon"
                            />
                          </>
                        )}
                      </ShopContainer>
                    </Product>
                  );
                })
            : null}
          {location.pathname === "/armas"
            ? products
                .filter((prod) => prod.categoriaProdDto.id_categoria == 6)
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
                        {productM.qtd_estoque === 0 ? (
                          <span>ESGOTADO</span>
                        ) : (
                          <>
                            <span>R$ {productM.valor_unitario}</span>
                            <BsCart3
                              onClick={() => {
                                handleAddToCart(productM);
                              }}
                              className="icon"
                            />
                          </>
                        )}
                      </ShopContainer>
                    </Product>
                  );
                })
            : null}
          {location.pathname === "/jogos"
            ? products
                .filter((prod) => prod.categoriaProdDto.id_categoria == 7)
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
                        {productM.qtd_estoque === 0 ? (
                          <span>ESGOTADO</span>
                        ) : (
                          <>
                            <span>R$ {productM.valor_unitario}</span>
                            <BsCart3
                              onClick={() => {
                                handleAddToCart(productM);
                              }}
                              className="icon"
                            />
                          </>
                        )}
                      </ShopContainer>
                    </Product>
                  );
                })
            : null}
          {location.pathname === "/livros"
            ? products
                .filter((prod) => prod.categoriaProdDto.id_categoria == 8)
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
                        {productM.qtd_estoque === 0 ? (
                          <span>ESGOTADO</span>
                        ) : (
                          <>
                            <span>R$ {productM.valor_unitario}</span>
                            <BsCart3
                              onClick={() => {
                                handleAddToCart(productM);
                              }}
                              className="icon"
                            />
                          </>
                        )}
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
