import { useEffect, useState } from "react";
import { FiUser } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import { apiLocal } from "../../../services/api";
import {
    BoxContainer,
    Container,
    ContentContainer,
    EmailContainer,
    EnderecoContainer,
    FooterContainer,
    InformationContainer,
    NomeContainer,
} from "./style";

export function MyProfile() {
    const location = useLocation();
    const [clients, setClients] = useState([]);
    const [clientData, setClientData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await apiLocal.get("/clientes");
                const clients = response.data;
                setClients(clients);
                console.log(clients)

                const clientData = clients.map((client) => {
                    const { nome_completo, email, endereco } = client;
                    return { nome_completo, email, endereco };
                });
                console.log(clientData);
                setClientData(clientData)

            } catch (error) {
                console.error("Erro ao obter dados dos clientes:", error);
            }
        }
        fetchData();
    }, []);


    return (
        <>
            <Container>
                <ContentContainer>
                    <InformationContainer>
                        <span>
                            <FiUser size={"30px"} />
                        </span>
                        <h2>Minha Conta</h2>
                    </InformationContainer>
                    {clientData.map((data) => (
                        <BoxContainer key={data.id_client}>
                            <NomeContainer>
                                <span> nome</span>
                                <h2>{data.nome_completo}</h2>
                            </NomeContainer>
                            <EmailContainer>
                                <span> e-mail</span>
                                <h2>  {data.email}</h2>
                            </EmailContainer>
                            <EnderecoContainer>
                                <span>endereço</span>
                            </EnderecoContainer>
                        </BoxContainer>
                    ))}
                    <FooterContainer>
                        <Link to={"/profile"}>
                            <span>"clique aqui" para alterar endereço</span>
                        </Link>
                    </FooterContainer>
                </ContentContainer>
            </Container >

        </>
    );
}
