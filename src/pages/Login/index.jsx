import { useLocation, Link } from "react-router-dom";
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
  LoginBt,
  FooterContainer,
  FormContainer,
} from "./style";

export function Login() {
  const location = useLocation();

  console.log("olá");

  return (
    <>
      <Container>
        <BoxContainer>
          <ContentContainer>
            <TitleContainer>
              <span>
                <FiUser />
              </span>
              <h2>login do cliente</h2>
            </TitleContainer>
            <FormContainer>
              <EmailContainer>
                <span>* e-mail</span>
                <input type="text" placeholder="  joao@gmail.com" />
              </EmailContainer>
              <PasswordContainer>
                <span>* senha</span>
                <PasswordInput>
                  <input type="password" placeholder=" ********" />
                  <AiOutlineEyeInvisible className="icon" />
                </PasswordInput>
              </PasswordContainer>
              <LoginBt isActive={location.pathname === "/"}>login</LoginBt>
            </FormContainer>
            <FooterContainer>
              <span>
                Não tem cadastro?
                <Link to={"/register"}>
                  <span> cadastre-se</span>
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
