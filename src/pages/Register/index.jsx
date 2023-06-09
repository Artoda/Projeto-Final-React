import React, { useState } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";

import InputComponent from "../../common/components/Input";
import ButtonComponent from "../../common/components/Button";

import useAuth from "../../hooks/useAuth";

import { FiUser } from "react-icons/fi";
// import { AiOutlineEyeInvisible } from "react-icons/ai";

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
  LabelError
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
    navigate("/");
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
                <span>* nome</span>
                <InputComponent
                  type="nome"
                  placeholder="digite seu nome completo"
                  value={nome}
                  onChange={(e) => [setNome(e.target.value), setError("")]}
                />
              </NameContainer>
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
                  <InputComponent
                    type="senha"
                    placeholder="digite sua senha"
                    value={senha}
                    onChange={(e) => [setSenha(e.target.value), setError("")]}
                  />
                </PasswordInput>
              </PasswordContainer>
              <PasswordContainer>
                <span>* confirmar senha</span>
                <PasswordInput>
                <InputComponent
                    type="senha"
                    placeholder="digite sua senha"
                    value={senhaConf}
                    onChange={(e) => [setSenhaConf(e.target.value), setError("")]}
                  />
                </PasswordInput>
              </PasswordContainer>
              <LabelError>{error}</LabelError>
              <ButtonComponent Text="finalizar cadastro" onClick={handleSignup} />
            </FormContainer>
          </ContentContainer>
        </BoxContainer>
      </Container>
    </>
  );
}
