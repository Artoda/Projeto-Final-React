import { useEffect, useState } from 'react';
import { FiUser } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import ButtonComponent from "../../common/components/Button";
import InputComponent from "../../common/components/Input";
import useAuth from '../../hooks/useAuth';
import { api, apiLocal } from '../../services/api';
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
    ImageContainer,
} from "./style";

export function Profile() {
    const [nameSurname, setNameSurname] = useState("");
    const [cpf, setCpf] = useState("");
    const [phone, setPhone] = useState("");
    const [birthday, setBirthday] = useState("");
    const [addressId, setAddressId] = useState();
    const [cep, setCep] = useState("");
    const [number, setNumber] = useState("");
    const [complement, setComplement] = useState("");
    const [state, setState] = useState("");
    const [street, setStreet] = useState("");
    const [city, setCity] = useState("");
    const [bairro, setBairro] = useState("");
    const [isAddressSubmitted, setIsAddressSubmitted] = useState(false);
    const [image, setImage] = useState(null);

    const emailUser = localStorage.getItem("user_email");
    const [email, setEmail] = useState(emailUser);
    const username = localStorage.getItem("user_db");

    // LOGIN
    const { checkIsLoggedIn } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (checkIsLoggedIn() === false) {
            navigate("/login");
        }
        else {
            return
        }
    }, []);

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
            setState(responseAddress.data.uf);
            setStreet(responseAddress.data.logradouro);
            setBairro(responseAddress.data.bairro);
            setCity(responseAddress.data.localidade);
            // console.log(responseAddress.data.id_endereco);

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
        try {
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
        } catch (error) {
            if (error.response && error.response.status === 400) {
                alert("Provavelmente CPF inválido! Verifique o CPF digitado. Senão verifique caracteres do nome.");
            } else {
                console.error("Erro ao cadastrar cliente:", error);
            }
        }

    };


    const handleImageChange = (e) => {
        const selectedImage = e.target.files[0];
        setImage(URL.createObjectURL(selectedImage));
    };

    return (
        <>
            <Container>
                <ContentContainer>
                    <TitleContainer>
                        <TitleContainer>
                            <FiUser size={"30px"} />
                            <h2>Bem vindo/a, {username}</h2>
                        </TitleContainer>
                    </TitleContainer>
                    <FormContainer>
                        <h2>* nome </h2>
                        {username}
                        <h2>* e-mail</h2>
                        {emailUser}
                        <ImageContainer>
                            <h2>Adicione sua imagem aqui</h2>
                            <input type="file" onChange={handleImageChange} />
                            {image && <img src={image} alt="Selected" />}
                        </ImageContainer>
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
                            <span>Rua: {street}</span>
                            <span>Bairro: {bairro}</span>
                        </BoxContainer>
                        <BoxContainer>
                            <span>Cidade: {city}</span>
                            <span>UF: {state}</span>
                        </BoxContainer>
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
                        <span>CPF (11 dígitos)</span>
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
                            onChange={() => { }} // tem que deixar senão dá erro com readOnly
                            readOnly
                        />
                        <span>Data de nascimento (formato DD-MM-AAAA)</span>
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
