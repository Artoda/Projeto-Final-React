import { useLocation, Link } from "react-router-dom";
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
  RegisterBt,
  FormContainer,
} from "./style";

export function Register() {
  const location = useLocation();

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
                <input type="text" placeholder="  João" />
              </NameContainer>
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
              <PasswordContainer>
                <span>* confirmar senha</span>
                <PasswordInput>
                  <input type="password" placeholder=" ********" />
                  <AiOutlineEyeInvisible className="icon" />
                </PasswordInput>
              </PasswordContainer>
              <RegisterBt isActive={location.pathname === "/"}>finalizar cadastro</RegisterBt>
            </FormContainer>
          </ContentContainer>
        </BoxContainer>
      </Container>
    </>
  );
}
