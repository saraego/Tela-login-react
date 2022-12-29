import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup"


import {
  Container,
  ContainerItens,
  Label,
  Input,
  Button,
  SingInLink,
  ErrorMensagem
} from "./styles";

function Login() {

  const schema = yup.object().shape({
    email:yup.string().email("Digite um email válido").required("Email Obrigatorio"),
    password: yup.string().required("Senha Obrigatoria").min(6,"minino 6 digitos")
  })

  const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = data => console.log(data);



  return (
    <Container>
     
      <ContainerItens>
       
        <h1>Login</h1>
        <form onSubmit={handleSubmit(onSubmit)}>

          <Label>Email</Label>
          <Input formNoValidate  {... register('email')} error={errors.email?.message}/>
          <ErrorMensagem>{errors.email?.message}</ErrorMensagem>

          <Label>Senha</Label>
          <Input formNoValidate  type="password" {... register('password')} error={errors.password?.message}/>
          <ErrorMensagem>{errors.password?.message}</ErrorMensagem>

          <Button type="submit">Sign In</Button>
        </form>

        <SingInLink>
          Não possui conta ? <a href="#">SingUp</a>
        </SingInLink>
      </ContainerItens>
    </Container>
  );
}

export default Login;
