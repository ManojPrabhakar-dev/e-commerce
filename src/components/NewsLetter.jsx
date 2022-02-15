import { Send } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 50vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fcf5f5;
`;

const Title = styled.h1`
  font-size: 50px;
  margin-bottom: 20px;
`;

const Desc = styled.span`
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 18px;
`;

const FormWrapper = styled.div`
  width: 40%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #b9b9b9;
`;

const Input = styled.input`
  flex: 6;
  height: 100%;
  border: none;
  padding: 10px;
`;

const Button = styled.button`
  flex: 1;
  border: none;
  height: 100%;
  background-color: teal;
  color: #fff;
  cursor: pointer;
`;

const NewsLetter = () => {
  return (
    <Container>
      <Title>NewsLetter</Title>
      <Desc>Get timely updates from your favorite products.</Desc>
      <FormWrapper>
        <Input placeholder="Your Email" />
        <Button>
          <Send />
        </Button>
      </FormWrapper>
    </Container>
  );
};

export default NewsLetter;
