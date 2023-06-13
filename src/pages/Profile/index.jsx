import { useForm } from 'react-hook-form';
import { FiUser } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from 'react';
import {
    BoxContainer,
    ComplementContainer,
    Container,
    ContentContainer,
    FooterContainer,
    FormContainer,
    NumberContainer,
    TitleContainer,
} from "./style";


export function Profile() {
    const location = useLocation();
    const { register, handleSubmit, setValue, setFocus } = useForm();

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await apiLocal.post("/clientes", {
                    nome_completo: name_surname,
                    email: email,
                    cpf: cpf,
                    telefone: phone,
                    data_nascimento: birthday,
                    endereco: {

                    }
                });

                console.log(response) // verifica objeto salvo
            } catch (error) {
                console.error("Erro ao obter dados dos clientes:", error);
            }
        }
        checkIsLoggedIn();
        fetchData();
    }, []);

    // useEffect(() => {
    //      aasync function fetchData() {
    //         try {
    //             const respClient = await apiLocal.get("/clientes");
    //             const clients = respClient.data;
    //             setClients(clients);
    //             console.log(clients)

    //             const clientData = clients.map((client) => {
    //                 const { nome_completo, email, endereco, id_cliente } = client;
    //                 return { nome_completo, email, endereco, id_cliente };
    //             });
    //             console.log(clientData);
    //             setClientData(clientData);

    //             const respUsers = await apiLocal.get("/users");
    //             const users = respUsers.data;
    //             setUserData(users);
    //             console.log(users)

    //             const userData = users.map((user) => {
    //                 const { username, email } = user;
    //                 return { username, email };
    //             });
    //             console.log(userData)
    //             setUserData(userData);


    //         } catch (error) {
    //             console.error("Erro ao obter dados dos clientes:", error);
    //         }
    //     }

    //     checkIsLoggedIn();
    //     fetchData();
    // }, []);

    const onSubmit = (data) => {
        console.log(data);
    }
    const checkCEP = (e) => {
        const cep = e.target.value.replace(/\D/g, '');
        //  console.log(cep);
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then(res => res.json()).then(data => {
                console.log(data);
                setValue('neighborhood', data.bairro);
                setValue('address', data.logradouro);
                setValue('locality', data.localidade);
                setFocus('numero');
            });
    }



    return (
        <>
            <Container>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <ContentContainer>
                        <TitleContainer>
                            <TitleContainer>
                                <FiUser size={"30px"} />
                                <h2>Minha Conta</h2>
                            </TitleContainer>
                        </TitleContainer>
                        <FormContainer>
                            <span>* nome</span>
                            <span>* e-mail</span>
                        </FormContainer>
                        <FooterContainer>
                            <span> endereço</span>

                            <span>cep</span>
                            <input type="text" {...register("cep")} onBlur={checkCEP} placeholder=" 00000-000" />


                            <span>bairro</span>
                            <input type="bairro" {...register("neighborhood")} placeholder=" Alto da Serra" />


                            <span>logradouro</span>
                            <input type="logradouro" {...register("address")} placeholder=" Rua Teresa - até 0608 - lado par" />



                            <span>localidade</span>
                            <input type="localidade" {...register("locality")} placeholder=" Petrópolis" />


                            <BoxContainer>
                                <NumberContainer>
                                    <span>número</span>
                                    <input type="número" {...register("numero")} placeholder=" 000" />
                                </NumberContainer>
                                <ComplementContainer>
                                    <span>complemento</span>
                                    <input type="complemento" placeholder=" centro" />
                                </ComplementContainer>
                            </BoxContainer>
                            <Link to={"/myprofile"}>
                                <button >Confirmar endereço</button>
                            </Link>
                        </FooterContainer>
                    </ContentContainer>
                </form>
            </Container>
        </>
    );
}