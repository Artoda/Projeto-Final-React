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
  const [passwordConf, setPasswordConf] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const { signup } = useAuth();

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSignup = () => {
    if (!nome | !email | !passwordConf | !password) {
      setError("preencha todos os campos");
      return;
    } else if (password !== passwordConf) {
      setError("as senhas não são iguais");
      return;
    }

    const res = signup(email, password);

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
                  type="text"
                  placeholder="digite seu nome completo"
                  value={nome}
                  onChange={(e) => [setNome(e.target.value), setError("")]}
                />
              </NameContainer>
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
                   {/*ao apertar o icone, mudar o type do input para text*/}
                  <InputComponent
                    type={showPassword ? 'text' : 'password'}
                    placeholder="digite sua senha"
                    value={password}
                    onChange={(e) => [setPassword(e.target.value), setError("")]}
                  />
                </PasswordInput>
              </PasswordContainer>
              <PasswordContainer>
                <h3>* confirmar senha</h3>
                <PasswordInput>
                  <AiOutlineEyeInvisible className="icon" onClick={handleTogglePassword} />
                  <InputComponent
                      type={showPassword ? 'text' : 'password'}
                      placeholder="digite sua senha"
                      value={passwordConf}
                      onChange={(e) => [setPasswordConf(e.target.value), setError("")]}
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
