import { useEffect, useState } from 'react';
import { FiUser } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import ButtonComponent from '../../../common/components/Button';
import InputComponent from '../../../common/components/Input';
import useAuth from '../../../hooks/useAuth';
import { api } from '../../../services/api';
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
  const [isAddressSubmitted, setIsAddressSubmitted] = useState(false);

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


  useEffect(() => {
    const fetchAddressId = async () => {
      try {
        const response = await api.get(`/clientes?email=${emailUser}`);
        const clientes = response.data;
        const clienteLogado = clientes.find(cliente => cliente.email === emailUser);

        if (clienteLogado) {
          setAddressId(clienteLogado.endereco.id_endereco);
          setClientId(clienteLogado.id_cliente)
          setCpf(clienteLogado.cpf)
        }
      } catch (error) {
        console.error("Erro ao obter os dados de endereço:", error);
      }
    };

    fetchAddressId();
  }, []);

  console.log(addressId + " idendereco")
  console.log(clientId + " idcliente")

  const handleClick = async () => {
    try {
      const responseAddress = await api.put("/enderecos", {
        id_endereco: addressId,
        cep: cep,
        rua: street,
        bairro: bairro,
        cidade: city,
        numero: number,
        complemento: complement,
        uf: state,
        cliente: {
          id_cliente: clientId
        }
      });

      alert("Dados de endereço atualizados com sucesso!");
      setIsAddressSubmitted(true);
    }
    catch (error) {
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
        id_endereco: addressId
      }
    });

    alert("Dados do cliente atualizados com sucesso!");
    navigate("/cart");
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
          </FormContainer>
          <AddressContainer>
            <h2> Endereço</h2>
            <span> Preencha seu endereço para atualização </span>
            cep
            <InputComponent
              type="text"
              placeholder=" 00000-000"
              onChange={(e) => setCep(e.target.value)}
            />
            <BoxContainer>
              <InputComponent
                type="text"
                placeholder=" Rua tal"
                onChange={(e) => setStreet(e.target.value)}
              />
              <InputComponent
                type="text"
                placeholder=" Bairro"
                onChange={(e) => setBairro(e.target.value)}
              />
            </BoxContainer>
            <BoxContainer>
              <InputComponent
                type="text"
                placeholder=" Cidade"
                onChange={(e) => setCity(e.target.value)}
              />
              <InputComponent
                type="text"
                placeholder=" UF"
                onChange={(e) => setState(e.target.value)}
              />
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
            <ButtonComponent Text="Atualizar endereço" onClick={() => {
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
              onChange={() => { }}
              readOnly
            />
            <span>Telefone (9 dígitos)</span>
            <InputComponent
              type="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Seu telefone"
            />
            <span>Email (para alterar entre em contato com suporte)</span>
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
          <ButtonComponent Text="Atualizar dados pessoais" onClick={() => {
            handleClick2();
          }}>
          </ButtonComponent>
        </ContentContainer>
      </Container>
    </>
  );
}
