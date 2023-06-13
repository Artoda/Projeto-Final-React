import { useForm } from 'react-hook-form';
import { FiUser } from "react-icons/fi";
import useAuth from '../../hooks/useAuth';
import InputComponent from "../../common/components/Input";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import {
    BoxContainer,
    ComplementContainer,
    Container,
    ContentContainer,
    FooterContainer,
    UserData,
    FormContainer,
    NameContainer,
    NumberContainer,
    TitleContainer,
} from "./style";

export function Profile() {
    const location = useLocation();
    const { register } = useForm();
    const [nameSurname, setNameSurname] = useState("");
    const [email, setEmail] = useState("");
    const [cpf, setCpf] = useState("");
    const [phone, setPhone] = useState("");
    const [birthday, setBirthday] = useState("");
    const [addressId, setAddressId] = useState();
    const [cep, setCep] = useState("");
    const [number, setNumber] = useState("");
    const [complement, setComplement] = useState("");

    // LOGIN
    const { checkIsLoggedIn } = useAuth();

    const handleClick = async () => {
        try {
            const responseAddress = await api.post("/enderecos", {
                cep: cep,
                numero: number,
                complemento: complement
            });

            console.log(responseAddress); // Verifica objeto salvo

            setAddressId(responseAddress.data.id_endereco);

            const responseClient = await api.post("/clientes", {
                nome_completo: nameSurname,
                email: email,
                cpf: cpf,
                telefone: phone,
                data_nascimento: birthday,
                endereco: {
                    id_endereco: addressId // alterar
                }
            });

            console.log(responseClient); // Verifica objeto salvo

            alert("Dados do cliente cadastrados com sucesso!");
            navigate("/cart");
        } catch (error) {
            console.error("Erro ao obter dados dos clientes:", error);
        }
    };

    const username = localStorage.getItem("user_db");
    const emailUser = localStorage.getItem("user_email");

    useEffect(() => {
        checkIsLoggedIn();
    }, []);

    return (
        <>
            <Container>
                <form>
                    <ContentContainer>
                        <TitleContainer>
                            <TitleContainer>
                                <FiUser size={"30px"} />
                                <h2>Minha Conta</h2>
                            </TitleContainer>
                        </TitleContainer>
                        <FormContainer>
                            <h2>* nome</h2>
                            {username}
                            <h2>* e-mail</h2>
                            {emailUser}
                        </FormContainer>
                        <UserData>
                            <NameContainer>
                                <h2> Preenha suas informações </h2>
                                <InputComponent
                                    type="text"
                                    value={nameSurname}
                                    onChange={(e) => setNameSurname(e.target.value)}
                                    placeholder="Seu nome completo"
                                />
                            </NameContainer>
                            <InputComponent
                                type="cpf"
                                value={cpf}
                                onChange={(e) => setCpf(e.target.value)}
                                placeholder="Seu CPF"
                            />
                            <InputComponent
                                type="phone"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                placeholder="Seu telefone"
                            />
                            <InputComponent
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Seu email REPITA O DE USUARIO"
                            />
                            <InputComponent
                                type="birthday"
                                value={birthday}
                                onChange={(e) => setBirthday(e.target.value)}
                                placeholder="Data de nascimento"
                            />
                        </UserData>
                        <FooterContainer>
                            <h2> Endereço</h2>
                            <span> Preencha somente CEP, número e complemento,</span>
                            <span>  o restante será preenchido automaticamente </span>
                            cep
                            <input
                                type="text"
                                {...register("cep")}
                                placeholder=" 00000-000"
                                onChange={(e) => setCep(e.target.value)}
                            />

                            {/* <span>bairro</span>
                            <input
                                type="bairro"
                                {...register("neighborhood")}
                                placeholder=" Alto da Serra"
                            />

                            <span>logradouro</span>
                            <input
                                type="logradouro"
                                {...register("address")}
                                placeholder=" Rua Teresa - até 0608 - lado par"
                            />

                            <span>localidade</span>
                            <input
                                type="localidade"
                                {...register("locality")}
                                placeholder=" Petrópolis"
                            /> */}

                            <BoxContainer>
                                <NumberContainer>
                                    <span>número</span>
                                    <input
                                        type="número"
                                        {...register("numero")}
                                        placeholder=" 000"
                                        onChange={(e) => setNumber(e.target.value)}
                                    />
                                </NumberContainer>
                                <ComplementContainer>
                                    <span>complemento</span>
                                    <input
                                        type="complemento"
                                        placeholder=" centro"
                                        onChange={(e) => setComplement(e.target.value)}
                                    />
                                </ComplementContainer>
                            </BoxContainer>
                            <button onClick={handleClick}>Confirmar endereço</button>
                        </FooterContainer>
                    </ContentContainer>
                </form>
            </Container>
        </>
    );
}
