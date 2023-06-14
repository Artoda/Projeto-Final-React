import React, { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { useLocation } from "react-router-dom";
import ButtonComponent from "../../common/components/Button";
import InputComponent from "../../common/components/Input";
import { api } from "../../services/api";
import {
  BoxContainer,
  Container,
  ContentContainer,
  EmailContainer,
  FormContainer,
  MessageContainer,
  NameContainer,
  TitleContainer,
} from "./style";

export function Contact() {
  const location = useLocation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSendMessage = async () => {
    if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    try {
      await api.post("/clientes/mensagem", {
        nome: name,
        email: email,
        mensagem: message,
      });
      alert("Mensagem enviada com sucesso. Responderemos em breve!");

      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error(error);
      alert(
        "Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente."
      );
    }
  };

  return (
    <>
      <Container>
        <BoxContainer>
          <TitleContainer>
            <AiOutlineMail className="icon" />
            <h2>Nos mande uma mensagem :)</h2>
          </TitleContainer>
          <ContentContainer>
            <FormContainer>
              <NameContainer>
                <span>* Nome</span>
                <InputComponent
                  type="text"
                  placeholder="Digite seu nome completo"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </NameContainer>
              <EmailContainer>
                <span>* E-mail</span>
                <InputComponent
                  type="email"
                  placeholder="Digite seu e-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </EmailContainer>
              <MessageContainer>
                <span>* Mensagem</span>
                <textarea
                  type="textarea"
                  placeholder="Escreva sua mensagem aqui..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </MessageContainer>
              <ButtonComponent
                Text="Enviar Mensagem"
                onClick={handleSendMessage}
              />
            </FormContainer>
          </ContentContainer>
        </BoxContainer>
      </Container>
    </>
  );
}
