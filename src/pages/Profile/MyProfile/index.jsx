import { useEffect, useState } from "react";
import { FiUser } from "react-icons/fi";
import useAuth from "../../../hooks/useAuth";
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
    NomeContainer,
} from "./style";

export function MyProfile() {
    // LOGIN
    const { checkIsLoggedIn } = useAuth();

    const location = useLocation();
    // const [clients, setClients] = useState([]);
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const respUsers = await apiLocal.get("/users");
                const users = respUsers.data;
                setUserData(users);
                console.log(users)

                const userData = users.map((user) => {
                    const { username, email } = user;
                    return { username, email };
                });
                console.log(userData)
                setUserData(userData);


            } catch (error) {
                console.error("Erro ao obter dados do usuários:", error);
            }
        }

        checkIsLoggedIn();
        fetchData();
    }, []);

    const filteredUserData = userData.filter(data => data.email === localStorage.getItem("user_email"));

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
                            <UserData>
                                <h2> Dados e endereço completos</h2>
                                <EnderecoContainer>
                                    <Link to={"/profile"}>
                                        <span>Clique aqui para preencher todos os dados e realizar a compra</span>
                                    </Link>
                                </EnderecoContainer>
                            </UserData>

                        </BoxContainer>
                    ))}
                </ContentContainer>
            </Container >

        </>
    );
}
