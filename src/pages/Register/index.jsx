import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ButtonComponent from "../../common/components/Button";
import InputComponent from "../../common/components/Input";

import useAuth from "../../hooks/useAuth";

import { AiOutlineEyeInvisible } from "react-icons/ai";
import { FiUser } from "react-icons/fi";
import { api } from "../../services/api";
import {
  BoxContainer,
  Container,
  ContentContainer,
  EmailContainer,
  FooterContainer,
  FormContainer,
  LabelError,
  NameContainer,
  PasswordContainer,
  PasswordInput,
  TitleContainer,
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

  // const { signup } = useAuth();

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSignup = async () => {
    if (!nome | !email | !password | !passwordConf) {
      setError("preencha todos os campos");
      return;
    } else if (password !== passwordConf) {
      setError("as senhas não são iguais");
      return;
    } else if (password.length < 6) {
      setError("a senha tem que ter mais que seis dígitos");
      return;
    } else if (nome.length > 11) {
      setError("O nome escolhido é muito grande!");
      return;
    }

    // TESTANDO SALVAMENTO NO BANCO
    try {
      await api.post("/auth/signup", {
        username: nome,
        email: email,
        password: password,
        role: ["user"],
      });

      alert("usuário cadatrado com sucesso!");
      navigate("/login");
    } catch (error) {
      console.error(error);
      alert("Ocorreu um erro ao salvar os dados. Email já cadastrado.");
    }
  };

  return (
    <>
      <Container>
        <BoxContainer>
          <ContentContainer>
            <TitleContainer>
              <FiUser className="icon" />
              <h2>Cadastro do cliente</h2>
            </TitleContainer>
            <FormContainer>
              <NameContainer>
                <h3>* Nome</h3>
                <InputComponent
                  type="text"
                  placeholder="Digite seu nome completo"
                  value={nome}
                  onChange={(e) => [setNome(e.target.value), setError("")]}
                />
              </NameContainer>
              <EmailContainer>
                <h3>* E-mail</h3>
                <InputComponent
                  type="text"
                  placeholder="Digite seu e-mail"
                  value={email}
                  onChange={(e) => [setEmail(e.target.value), setError("")]}
                />
              </EmailContainer>
              <PasswordContainer>
                <h3>* Senha</h3>
                <PasswordInput>
                  <AiOutlineEyeInvisible
                    className="icon"
                    onClick={handleTogglePassword}
                  />
                  {/*ao apertar o icone, mudar o type do input para text*/}
                  <InputComponent
                    type={showPassword ? "text" : "password"}
                    placeholder="Digite sua senha"
                    value={password}
                    onChange={(e) => [
                      setPassword(e.target.value),
                      setError(""),
                    ]}
                  />
                </PasswordInput>
              </PasswordContainer>
              <PasswordContainer>
                <h3>* Confirmar senha</h3>
                <PasswordInput>
                  <AiOutlineEyeInvisible
                    className="icon"
                    onClick={handleTogglePassword}
                  />
                  <InputComponent
                    type={showPassword ? "text" : "password"}
                    placeholder="Digite sua senha"
                    value={passwordConf}
                    onChange={(e) => [
                      setPasswordConf(e.target.value),
                      setError(""),
                    ]}
                  />
                </PasswordInput>
                <LabelError>{error}</LabelError>
              </PasswordContainer>
              <ButtonComponent
                Text="Finalizar cadastro"
                onClick={() => {
                  handleSignup();
                }}
              />
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
