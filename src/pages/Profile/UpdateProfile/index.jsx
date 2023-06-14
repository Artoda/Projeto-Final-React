import { useEffect, useState } from "react";
import { FiUser } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import ButtonComponent from "../../../common/components/Button";
import InputComponent from "../../../common/components/Input";
import useAuth from "../../../hooks/useAuth";
import { api } from "../../../services/api";
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

export function UpdateProfile() {
  const [nameSurname, setNameSurname] = useState("");
  const [cpf, setCpf] = useState("");
  const [phone, setPhone] = useState("");
  const [birthday, setBirthday] = useState("");
  const [addressId, setAddressId] = useState();
  const [clientId, setClientId] = useState();
  const [cep, setCep] = useState("");
  const [number, setNumber] = useState("");
  const [complement, setComplement] = useState("");
  const [state, setState] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [bairro, setBairro] = useState("");
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
    } else {
      return;
    }
  }, []);

  useEffect(() => {
    const fetchAddressId = async () => {
      try {
        const response = await api.get(`/clientes?email=${emailUser}`);
        const clientes = response.data;
        const clienteLogado = clientes.find(
          (cliente) => cliente.email === emailUser
        );

        if (clienteLogado) {
          setAddressId(clienteLogado.endereco.id_endereco);
          setClientId(clienteLogado.id_cliente);
          setCpf(clienteLogado.cpf);
        }
      } catch (error) {
        console.error("Erro ao obter os dados de endereço:", error);
      }
    };

    fetchAddressId();
  }, []);

  // para verificar se o id cliente está correto
  // console.log(addressId + " idendereco");
  // console.log(clientId + " idcliente");

  const handleClick = async () => {
    try {
      const responseAddress = await api.put(`/enderecos/${addressId}`, {
        cep: cep,
        logradouro: street,
        bairro: bairro,
        localidade: city,
        numero: number,
        complemento: complement,
        uf: state,
        cliente: {
          id_cliente: clientId,
        },
      });

      setState(responseAddress.data.uf);
      setStreet(responseAddress.data.logradouro);
      setBairro(responseAddress.data.bairro);
      setCity(responseAddress.data.localidade);

      alert("Dados de endereço atualizados com sucesso!");
    } catch (error) {
      console.error("Erro ao obter dados dos clientes:", error);
    }
  };

  const handleClick2 = async () => {
    const responseClient = await api.put("/clientes", {
      id_cliente: clientId,
      nome_completo: nameSurname,
      email: email,
      cpf: cpf,
      telefone: phone,
      data_nascimento: birthday,
      endereco: {
        id_endereco: addressId,
      },
    });

    alert("Dados do cliente atualizados com sucesso!");
    navigate("/cart");
  };

  // testando imagem
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
              <h2>Bem vinde, {username}</h2>
            </TitleContainer>
          </TitleContainer>
          <FormContainer>
            <h2>* Nome </h2>
            {username}
            <h2>* E-mail</h2>
            {emailUser}
          </FormContainer>
          <ImageContainer>
            <h2>Adicione sua imagem aqui ⬇</h2>
            <input type="file" onChange={handleImageChange} />
            {image && <img src={image} alt="Selected" />}
          </ImageContainer>
          <AddressContainer>
            <h2> Endereço:</h2>
            <h3> Preencha seu endereço para atualização: </h3>
            CEP:
            <InputComponent
              type="text"
              placeholder=" 00000-000"
              onChange={(e) => setCep(e.target.value)}
            />
            <BoxContainer>
              <span>
                <span>Rua:</span> {street}
              </span>
              <span>
                <span>Bairro:</span> {bairro}
              </span>
            </BoxContainer>
            <BoxContainer>
              <span>
                {" "}
                <span>Cidade:</span> {city}
              </span>
              <span>
                <span>UF:</span> {state}
              </span>
            </BoxContainer>
            <BoxContainer>
              <NumberContainer>
                <span>
                  <span>Número:</span>
                </span>
                <InputComponent
                  type="número"
                  placeholder=" 000"
                  onChange={(e) => setNumber(e.target.value)}
                />
              </NumberContainer>
              <ComplementContainer>
                <span>
                  <span>Complemento:</span>
                </span>
                <InputComponent
                  type="complemento"
                  placeholder=" Centro"
                  onChange={(e) => setComplement(e.target.value)}
                />
              </ComplementContainer>
            </BoxContainer>
            <ButtonComponent
              Text="Atualizar endereço"
              onClick={() => {
                handleClick();
              }}
            ></ButtonComponent>
          </AddressContainer>
          <UserData>
            <NameContainer>
              <h2> Preencha suas informações ⬇ </h2>
              <span>Nome: (3 a 14 carateres)</span>
              <InputComponent
                type="text"
                value={nameSurname}
                onChange={(e) => setNameSurname(e.target.value)}
                placeholder="Seu nome completo"
              />
            </NameContainer>
            <span>CPF:</span>
            <input type="cpf" value={cpf} disabled />
            <span>Telefone: (9 dígitos)</span>
            <InputComponent
              type="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Seu telefone"
            />
            <span>
              Email:{" "}
              <span style={{ color: "red" }}>
                (Para alterar entre em contato com suporte!)
              </span>
            </span>
            <input type="email" value={email} disabled />
            <span>Data de nascimento: (Formato DD-MM-AAAA)</span>
            <input
              type="birthday"
              value={birthday}
              onChange={(e) => setBirthday(e.target.value)}
              placeholder="Data de nascimento"
            />
          </UserData>
          <ButtonComponent
            Text="Atualizar dados pessoais"
            onClick={() => {
              handleClick2();
            }}
          ></ButtonComponent>
        </ContentContainer>
      </Container>
    </>
  );
}
