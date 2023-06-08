import { Outlet } from "react-router-dom";

import {
  Container,
  AboutUsContainer,
  LogoContainer,
  HelpContainer,
} from "./style";

export function Footer() {
  return (
    <>
      <Container>
        <AboutUsContainer>
          <span>Sobre Nós</span>
        </AboutUsContainer>
        <LogoContainer>
          <img
            src="https://media.discordapp.net/attachments/1081311873481322597/1116384022155755650/logo-serratec_1.png"
            alt="SerraTec"
          />
        </LogoContainer>
        <HelpContainer>
          <span>Fala Conosco</span>
        </HelpContainer>
      </Container>
      <Outlet />
    </>
  );
}
