import { useLocation } from "react-router-dom";
import { FiUser } from "react-icons/fi";
import { useForm } from 'react-hook-form';
import { Link } from "react-router-dom";

import {
    Container,
    ContentContainer,
    BoxContainer,
    TitleContainer,
    FormContainer,
    FooterContainer,
    NumberContainer,
    ComplementContainer,
} from "./style";


export function Profile() {
    const location = useLocation();
    const { register, handleSubmit, setValue, setFocus } = useForm();

const onSubmit = (data) => {
    console.log(data);
}

    const checkCEP = (e) => {
        const cep = e.target.value.replace(/\D/g, '');
      //  console.log(cep);
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then(res => res.json()).then(data => {
                console.log(data);
                setValue('endereco', data.logradouro);
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
                            <FiUser className="icon" />
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

                        <input type="text" {...register("cep")} onBlur={checkCEP} />

                        <span>endereço</span>

                        <input type="endereço" {...register("endereco")} />
                        <BoxContainer>
                            <NumberContainer>
                                <span>número</span>
                                <input type="número" {...register("numero")} />
                            </NumberContainer>
                            <ComplementContainer>
                                <span>complemento</span>
                                <input type="complemento"  />
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