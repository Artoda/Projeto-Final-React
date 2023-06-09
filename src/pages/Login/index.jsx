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
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (!email | !senha) {
      setError("Preencha todos os campos");
      return;
    }

    const res = signin(email, senha);

    if (res) {
      setError(res);
      return;
    }

    navigate("/home");
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
                <span>* e-mail</span>

                <InputComponent
                  type="email"
                  placeholder="digite seu e-mail"
                  value={email}
                  onChange={(e) => [setEmail(e.target.value), setError("")]}
                />

              </EmailContainer>
              <PasswordContainer>
                <span>* senha</span>
                <PasswordInput>
                  <AiOutlineEyeInvisible className="icon" />
                  <InputComponent
                    type="password"
                    placeholder="digite sua senha"
                    value={senha}
                    onChange={(e) => [setSenha(e.target.value), setError("")]}
                  />
                </PasswordInput>
                <LabelError>{error}</LabelError>
              </PasswordContainer>
              <ButtonComponent Text="Login" onClick={handleLogin} />
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
