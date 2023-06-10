import React, { useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";

import useAuth from "../../hooks/useAuth";
import InputComponent from "../../common/components/Input";
import ButtonComponent from "../../common/components/Button";

import { FiUser } from "react-icons/fi";
import { AiOutlineEyeInvisible } from "react-icons/ai";

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
  const { signin } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = () => {
    if (!email | !password) {
      setError("Preencha todos os campos");
      return;
    }

    const res = signin(email, password);

    if (res) {
      setError(res);
      return;
    }
    alert("seja bem vindo!");
    navigate("/");
  };

  //RETORNO HTML
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
                <h3>* e-mail</h3>

                <InputComponent
                  type="text"
                  placeholder="digite seu e-mail"
                  value={email}
                  onChange={(e) => [setEmail(e.target.value), setError("")]}
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
              <ButtonComponent Text="login" onClick={handleLogin} />
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
