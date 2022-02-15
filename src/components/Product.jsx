import React from "react";
import styled from "styled-components";
import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";

const ActionWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  z-index: 3;
  background-color: rgba(0, 0, 0, 0.2);
  opacity: 0;
  transition: all 0.7s ease;
`;

const Container = styled.div`
  flex: 1;
  min-width: 280px;
  height: 300px;
  background-color: #f0f7dc;
  position: relative;
  padding: 10px;
  margin: 5px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover ${ActionWrapper} {
    opacity: 1;
  }
`;

const Circle = styled.div`
  position: absolute;
  /* top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto; */
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  z-index: 1;
`;

const Image = styled.img`
  position: absolute;
  width: 250px;
  height: 250px;
  object-fit: cover;
  z-index: 2;
`;

const IconWrapper = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.5s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;

const Product = ({ item }) => {
  return (
    <Container>
      <Circle />
      <Image src={item.img} />
      <ActionWrapper>
        <IconWrapper>
          <ShoppingCartOutlined />
        </IconWrapper>
        <IconWrapper>
          <SearchOutlined />
        </IconWrapper>
        <IconWrapper>
          <FavoriteBorderOutlined />
        </IconWrapper>
      </ActionWrapper>
    </Container>
  );
};

export default Product;
