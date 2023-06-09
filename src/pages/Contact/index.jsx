import { useLocation, Link } from "react-router-dom";
import { AiOutlineMail } from "react-icons/ai";
import {
  Container,
  BoxContainer,
  TitleContainer,
  ContentContainer,
  NameContainer,
  EmailContainer,
  MessageContainer,
  SendMsgBt,
  FormContainer,
} from "./style";

export function Contact() {
  const location = useLocation();

  return (
    <>
      <Container>
        <BoxContainer>
          <TitleContainer>
              <AiOutlineMail className="icon" />
            <h2>nos mande uma mensagem :)</h2>
          </TitleContainer>
          <ContentContainer>
            <FormContainer>
              <NameContainer>
                <span>* nome</span>
                <input type="text" placeholder="  João" />
              </NameContainer>
              <EmailContainer>
                <span>* e-mail</span>
                <input type="text" placeholder="  joao@gmail.com" />
              </EmailContainer>
              <MessageContainer>
                <span>* mensagem</span>
                <input type="text" placeholder="  Escreva sua mensagem aqui..." />
              </MessageContainer>
             
             
              <SendMsgBt className="red-bt" isActive={location.pathname === "/"}>enviar mensagem</SendMsgBt>
            </FormContainer>
          </ContentContainer>
        </BoxContainer>
      </Container>
    </>
  );
}
