import { Link, Outlet } from "react-router-dom";

import {
  Container,
  AboutUsContainer,
  LogoContainer,
  HelpContainer,
} from "./style";

export function Footer() {
  return (
    <>
      <Outlet />
      <Container>
        <AboutUsContainer>
          <Link to={"/aboutus"}>
            <button>Sobre Nós</button>
          </Link>
        </AboutUsContainer>
        <LogoContainer>
          <a href="https://serratec.org" target="_blank">
            <img
              src="https://media.discordapp.net/attachments/1081311873481322597/1116384022155755650/logo-serratec_1.png"
              alt="SerraTec"
            />
          </a>
        </LogoContainer>
        <HelpContainer>
          <Link to={"/contact"}>
            <button>Fale Conosco</button>
          </Link>
        </HelpContainer>
      </Container>
    </>
  );
}
