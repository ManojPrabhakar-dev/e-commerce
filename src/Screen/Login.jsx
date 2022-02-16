import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.3)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
`;

const FormWrapper = styled.div`
  width: 30%;
  padding: 20px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  gap: 15px;
`;

const Title = styled.span`
  font-weight: 400;
  font-size: 30px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  padding: 10px;
`;

const Info = styled.span`
  font-size: 16px;
  text-decoration: underline;
`;

const Button = styled.button`
  padding: 10px 20px;
  background: teal;
  color: #fff;
  border: none;
  cursor: pointer;
`;

const Login = () => {
  return (
    <Container>
      <FormWrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="username" />
          <Input placeholder="password" />
        </Form>
        <Button>LOGIN</Button>
        <Info>DO NOT REMEMBER YOUR PASSWORD </Info>
        <Info>CREATE A NEW ACCOUNT </Info>
      </FormWrapper>
    </Container>
  );
};

export default Login;
