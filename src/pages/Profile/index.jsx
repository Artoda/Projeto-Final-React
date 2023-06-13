import { useEffect, useState } from 'react';
import { FiUser } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import ButtonComponent from "../../common/components/Button";
import InputComponent from "../../common/components/Input";
import useAuth from '../../hooks/useAuth';
import { api } from '../../services/api';
import {
    AddressContainer,
    BoxContainer,
    ComplementContainer,
    Container,
    ContentContainer,
    FormContainer,
    NameContainer,
    NumberContainer,
    TitleContainer,
    UserData,
} from "./style";

export function Profile() {
    const [nameSurname, setNameSurname] = useState("");
    const [email, setEmail] = useState("");
    const [cpf, setCpf] = useState("");
    const [phone, setPhone] = useState("");
    const [birthday, setBirthday] = useState("");
    const [addressId, setAddressId] = useState();
    const [cep, setCep] = useState("");
    const [number, setNumber] = useState("");
    const [complement, setComplement] = useState("");
    const [isAddressSubmitted, setIsAddressSubmitted] = useState(false);

    // LOGIN
    const { checkIsLoggedIn } = useAuth();
    const navigate = useNavigate();
    const username = localStorage.getItem("user_db");
    const emailUser = localStorage.getItem("user_email");

    const handleClick = async () => {
        if (isAddressSubmitted) {
            alert("Dados de endereço cadastrados, preencha seus dados pessoais!");
            return;
        }

        try {
            const responseAddress = await api.post("/enderecos", {
                cep: cep,
                numero: number,
                complemento: complement
            });

            setAddressId(responseAddress.data.id_endereco);
            console.log(responseAddress.data.id_endereco);

            alert("Dados de endereço cadastrados, preencha seus dados pessoais!");
            setIsAddressSubmitted(true);
        }
        catch (error) {
            console.error("Erro ao obter dados dos clientes:", error);
        }
    };

    const handleClick2 = async () => {
        if (!isAddressSubmitted) {
            alert("Preencha o endereço");
            return;
        }
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

        alert("Dados do cliente cadastrados com sucesso!");
        navigate("/cart");
    };

    useEffect(() => {
        checkIsLoggedIn();
    }, []);

    const handleEmailChange = (e) => {
        const newEmail = e.target.value;
        setEmail(newEmail);

        if (newEmail.trim() !== emailUser.trim()) {
            // console.log(emailUser)
            // console.log(newEmail)
            console.log("Email não coincide com o de usuário");
            alert
        }
    };

    return (
        <>
            <Container>
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
                    <AddressContainer>
                        <h2> Endereço</h2>
                        <span> Preencha somente CEP, número e complemento, o restante será preenchido automaticamente </span>
                        cep
                        <InputComponent
                            type="text"
                            placeholder=" 00000-000"
                            onChange={(e) => setCep(e.target.value)}
                        />
                        <BoxContainer>
                            <NumberContainer>
                                <span>número</span>
                                <InputComponent
                                    type="número"
                                    placeholder=" 000"
                                    onChange={(e) => setNumber(e.target.value)}
                                />
                            </NumberContainer>
                            <ComplementContainer>
                                <span>complemento</span>
                                <InputComponent
                                    type="complemento"
                                    placeholder=" centro"
                                    onChange={(e) => setComplement(e.target.value)}
                                />
                            </ComplementContainer>
                        </BoxContainer>
                        <ButtonComponent Text="Confirmar endereço" onClick={() => {
                            handleClick();
                        }}>
                        </ButtonComponent>
                    </AddressContainer>
                    <UserData>
                        <NameContainer>
                            <h2> Preencha suas informações </h2>
                            <span>Nome (3 a 14 carateres)</span>
                            <InputComponent
                                type="text"
                                value={nameSurname}
                                onChange={(e) => setNameSurname(e.target.value)}
                                placeholder="Seu nome completo"
                            />
                        </NameContainer>
                        <span>CPF</span>
                        <InputComponent
                            type="cpf"
                            value={cpf}
                            onChange={(e) => setCpf(e.target.value)}
                            placeholder="Seu CPF"
                        />
                        <span>Telefone (9 dígitos)</span>
                        <InputComponent
                            type="phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="Seu telefone"
                        />
                        <span>Email (mesmo email de usuário)</span>
                        <InputComponent
                            type="email"
                            value={email}
                            onChange={handleEmailChange}
                            placeholder="Seu email REPITA O DE USUARIO"
                        />
                        <span>Data de nascimento (formato AAAA-MM-DD)</span>
                        <InputComponent
                            type="birthday"
                            value={birthday}
                            onChange={(e) => setBirthday(e.target.value)}
                            placeholder="Data de nascimento"
                        />
                    </UserData>
                    <ButtonComponent Text="Confirmar dados pessoais" onClick={() => {
                        handleClick2();
                    }}>
                    </ButtonComponent>
                </ContentContainer>
            </Container>
        </>
    );
}
