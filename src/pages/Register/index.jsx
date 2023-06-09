import React, { useState } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";

import InputComponent from "../../common/components/Input";
import ButtonComponent from "../../common/components/Button";

import useAuth from "../../hooks/useAuth";

import { FiUser } from "react-icons/fi";
import { AiOutlineEyeInvisible } from "react-icons/ai";

import {
  Container,
  BoxContainer,
  TitleContainer,
  ContentContainer,
  NameContainer,
  EmailContainer,
  PasswordContainer,
  PasswordInput,
  FormContainer,
  LabelError,
  FooterContainer
} from "./style";

export function Register() {
  const location = useLocation();

  //REGISTER
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senhaConf, setSenhaConf] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { signup } = useAuth();

  const handleSignup = () => {
    if (!nome | !email | !senhaConf | !senha) {
      setError("preencha todos os campos");
      return;
    } else if (senha !== senhaConf) {
      setError("as senhas não são iguais");
      return;
    }

    const res = signup(email, senha);

    if (res) {
      setError(res);
      return;
    }

    alert("usuário cadatrado com sucesso!");
    navigate("/login");
  };

  return (
    <>
      <Container>
        <BoxContainer>
          <ContentContainer>
            <TitleContainer>
                <FiUser className="icon" />
              <h2>cadastro do cliente</h2>
            </TitleContainer>
            <FormContainer>
              <NameContainer>
                <h3>* nome</h3>
                <InputComponent
                  type="nome"
                  placeholder="digite seu nome completo"
                  value={nome}
                  onChange={(e) => [setNome(e.target.value), setError("")]}
                />
              </NameContainer>
              <EmailContainer>
                <h3>* e-mail</h3>
                <InputComponent
                  type="email"
                  placeholder="digite seu e-mail"
                  value={email}
                  onChange={(e) => [setEmail(e.target.value), setError("")]}
                />
              </EmailContainer>
              <PasswordContainer>
                <h3>* senha</h3>
                <PasswordInput>
                  <AiOutlineEyeInvisible className="icon" /> 
                  <InputComponent
                    type="senha"
                    placeholder="digite sua senha"
                    value={senha}
                    onChange={(e) => [setSenha(e.target.value), setError("")]}
                  />
                </PasswordInput>
              </PasswordContainer>
              <PasswordContainer>
                <h3>* confirmar senha</h3>
                <PasswordInput>
                  <AiOutlineEyeInvisible className="icon" />
                  <InputComponent
                      type="senha"
                      placeholder="digite sua senha"
                      value={senhaConf}
                      onChange={(e) => [setSenhaConf(e.target.value), setError("")]}
                    />
                </PasswordInput>
              <LabelError>{error}</LabelError>
              </PasswordContainer>
              <ButtonComponent Text="finalizar cadastro" onClick={handleSignup} />
            </FormContainer>
            <FooterContainer>
              <span>
                Já possui conta?
                <Link to={"/login"}>
                  <span className="alert">&nbsp;faça o login</span>
                </Link>
              </span>
              
            </FooterContainer>
          </ContentContainer>
        </BoxContainer>
      </Container>
    </>
  );
}
