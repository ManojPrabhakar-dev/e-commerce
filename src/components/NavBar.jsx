import React from "react";
import styled from "styled-components";
import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import { Badge } from "@mui/material";

const Container = styled.div`
  height: 60px;
  background-color: #ffee;
  display: flex;
  align-items: center;
  padding: 10px 20px;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 20px;
  font-weight: 400;
  margin-right: 20px;
  cursor: pointer;
`;

const SearchWrapper = styled.div`
  display: flex;
  border: 2px solid #b9b9b9;
  padding: 5px;
`;

const SearchInput = styled.input`
  border: none;
`;

const Middle = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.span`
  font-size: 32px;
  font-weight: 700;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;

const ActionItem = styled.span`
  font-size: 18px;
  font-weight: 600;
  margin-left: 20px;
  cursor: pointer;
`;

const NavBar = () => {
  return (
    <Container>
      <Left>
        <Language>EN</Language>
        <SearchWrapper>
          <SearchInput />
          <Search style={{ color: "#b9b9b9", fontSize: "20px" }} />
        </SearchWrapper>
      </Left>
      <Middle>
        <Logo>Shopify</Logo>
      </Middle>
      <Right>
        <ActionItem>REGISTER</ActionItem>
        <ActionItem>SIGN IN</ActionItem>
        <ActionItem>
          <Badge badgeContent={4} color="primary">
            <ShoppingCartOutlined />
          </Badge>
        </ActionItem>
      </Right>
    </Container>
  );
};

export default NavBar;
