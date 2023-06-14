import { useEffect, useState } from "react";
import { FiUser } from "react-icons/fi";
import useAuth from "../../../hooks/useAuth";
import ButtonComponent from "../../../common/components/Button";
import { Link, useLocation } from "react-router-dom";
import { apiLocal } from "../../../services/api";
import {
    BoxContainer,
    Container,
    ContentContainer,
    EmailContainer,
    EnderecoContainer,
    InformationContainer,
    UserData,
    PersonalContainer,
    AddressContainer,
    NomeContainer,
} from "./style";

export function MyProfile() {
    // LOGIN
    const { checkIsLoggedIn } = useAuth();

    const location = useLocation();
    const [userData, setUserData] = useState([]);
    const [clientData, setClientData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const respUsers = await apiLocal.get("/users");
                const users = respUsers.data;
                setUserData(users);
                // console.log(users)

                // const userData = 
                users.map((user) => {
                    const { username, email } = user;
                    return { username, email };
                });
                // console.log(userData)
                // setUserData(userData);

            } catch (error) {
                console.error("Erro ao obter dados do usuários:", error);
            }
        }

        checkIsLoggedIn();
        fetchData();
    }, []);

    useEffect(() => {
        async function fetchData() {
            try {
                const respClients = await apiLocal.get("/clientes");
                const clients = respClients.data;
                setClientData(clients);
                // console.log(clients)

                // const clientData = 
                clients.map((client) => {
                    const { cpf, data_nascimento, email } = client;
                    return { cpf, data_nascimento, email };
                });
                // console.log(clientData)
                // setClientData(clientData);

            } catch (error) {
                console.error("Erro ao obter dados de cliente:", error);
            }
        }

        fetchData();
    }, []);


    const filteredUserData = userData.filter(data => data.email === localStorage.getItem("user_email"));
    const filteredClientData = clientData.filter((client) => client.email === localStorage.getItem("user_email"));

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
                    {filteredUserData.map((data) => (
                        <BoxContainer key={data.email}>
                            <NomeContainer>
                                <h2> nome</h2>
                                {data.username}
                            </NomeContainer>
                            <EmailContainer>
                                <h2> email</h2>
                                {data.email}
                            </EmailContainer>
                            {filteredClientData.length > 0 ? (
                                <UserData>
                                    <h2> Dados pessoais</h2>
                                    {filteredClientData.map((client) => (
                                        <div key={client.id_cliente}>
                                            <PersonalContainer>
                                                <h3>Nome</h3>
                                                {client.nome_completo}
                                                <h3>CPF</h3>
                                                {client.cpf}
                                                <h3>Telefone</h3>
                                                {client.telefone}
                                                <h3>Data de nascimento</h3>
                                                {client.data_nascimento}
                                            </PersonalContainer>
                                            <h2> Endereço </h2>
                                            <AddressContainer>
                                                {client.endereco.logradouro},
                                                {client.endereco.numero}
                                                {client.endereco.complemento}
                                                <h3>Bairro</h3>
                                                {client.endereco.bairro}
                                                <h3>Cidade</h3>
                                                {client.endereco.localidade}
                                                <h3>CEP</h3>
                                                {client.endereco.cep}
                                            </AddressContainer>
                                            <Link to={"/profile"}>
                                                <h2>Seus dados estão atualizados</h2>
                                                <ButtonComponent Text="Deseja alterar endereço? Clique aqui"></ButtonComponent>
                                            </Link>
                                        </div>
                                    ))}

                                </UserData>
                            ) : (
                                <EnderecoContainer>
                                    <Link to={"/profile"}>
                                        <h2>Seus dados não estão atualizados</h2>
                                        <ButtonComponent Text="Clique aqui para cadastrar endereço"></ButtonComponent>
                                    </Link>
                                </EnderecoContainer>
                            )}
                        </BoxContainer>
                    ))}
                </ContentContainer>
            </Container >

        </>
    );
}
