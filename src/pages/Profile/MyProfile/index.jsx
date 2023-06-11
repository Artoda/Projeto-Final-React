import { useLocation, Link } from "react-router-dom";
import { FiUser } from "react-icons/fi";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import {
    Container,
    InformationContainer,
    ContentContainer,
    NomeContainer,
    EmailContainer,
    EnderecoContainer,
    BoxContainer,
    FooterContainer,
} from "./style";






export function MyProfile() {
    const location = useLocation();

   
    return (
        <>
            <Container>
                <ContentContainer>
                    <InformationContainer>
                        <span>
                            <FiUser />
                        </span>
                        <h2>Minha Conta</h2>
                    </InformationContainer>
                    <BoxContainer>
                        <NomeContainer>
                            <span> nome</span>
                        </NomeContainer>
                        <EmailContainer>
                            <span> e-mail</span>
                        </EmailContainer>
                        <EnderecoContainer>
                            <span>endereço</span>
                        </EnderecoContainer>
                    </BoxContainer>
                    <FooterContainer>
                        <Link to={"/profile"}>
                            <span>"clique aqui" para alterar endereço</span>
                        </Link>
                    </FooterContainer>
                </ContentContainer>
            </Container>
        </>
    );
}