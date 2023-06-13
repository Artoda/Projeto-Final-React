import React, { useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";

import useAuth from "../../hooks/useAuth";
import InputComponent from "../../common/components/Input";
import ButtonComponent from "../../common/components/Button";

import { FiUser } from "react-icons/fi";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { api } from "../../services/api";
import {
  Container,
  BoxContainer,
  TitleContainer,
  ContentContainer,
  EmailContainer,
  PasswordContainer,
  PasswordInput,
  FooterContainer,
  FormContainer,
  LabelError
} from "./style";

export function Login() {
  const location = useLocation();

  // LOGIN
  const { checkIsLoggedIn } = useAuth();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async () => {
    if (!username | !password) {
      setError("Preencha todos os campos");
      return;
    }

    // TESTANDO LOGIN pelo BANCO
    try {
      const response = await api.post("/auth/signin", {
        username: username,
        password: password
      });

      console.log(response) // verifica objeto salvo

      const accessToken = response.data.accessToken;
      const newUsername = response.data.username;
      const userEmail = response.data.email;
      // console.log(accessToken);
      // console.log(newUsername);
      // console.log(userEmail);

      localStorage.setItem("user_token", accessToken);
      localStorage.setItem("user_db", newUsername);
      localStorage.setItem("user_email", userEmail);

      checkIsLoggedIn();

      alert("seja bem vindo!");
      navigate("/");
    }
    catch (error) {
      console.error(error);
      alert("Ocorreu um erro no login. Usuário ou senha inválidos. Tente novamente");
    }
  };

  return (
    <>
      <Container>
        <BoxContainer>
          <ContentContainer>
            <TitleContainer>
              <FiUser className="icon" />
              <h2>login do cliente</h2>
            </TitleContainer>
            <FormContainer>
              <EmailContainer>
                <h3>* nome de usuário</h3>

                <InputComponent
                  type="text"
                  placeholder="digite seu e-mail"
                  value={username}
                  onChange={(e) => [setUsername(e.target.value), setError("")]}
                />

              </EmailContainer>
              <PasswordContainer>
                <h3>* senha</h3>
                <PasswordInput>
                  <AiOutlineEyeInvisible className="icon" onClick={handleTogglePassword} />
                  <InputComponent
                    type={showPassword ? 'text' : 'password'}
                    placeholder="digite sua senha"
                    value={password}
                    onChange={(e) => [setPassword(e.target.value), setError("")]}
                  />
                </PasswordInput>
                <LabelError>{error}</LabelError>
              </PasswordContainer>
              <ButtonComponent Text="login" onClick={() => {
                handleLogin();
                checkIsLoggedIn();
              }} />
            </FormContainer>
            <FooterContainer>
              <span>
                Não tem cadastro?
                <Link to={"/register"}>
                  <span className="alert">&nbsp;cadastre-se</span>
                </Link>
              </span>
              <span>
                Ao continuar com o acesso, você concorda com a nossa política de
                privacidade
              </span>
            </FooterContainer>
          </ContentContainer>
        </BoxContainer>
      </Container>
    </>
  );
}
