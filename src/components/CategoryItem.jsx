import React from "react";
import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  height: 70vh;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const InfoWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CategoryName = styled.span`
  font-size: 24px;
  color: #fff;
  margin-bottom: 20px;
`;

const Button = styled.button`
  background-color: #ebe5e5;
  padding: 10px;
  font-size: 14px;
  font-weight: 600;
  color: #555;
  border: none;
  cursor: pointer;
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <InfoWrapper>
        <CategoryName>{item.title}</CategoryName>
        <Button>SHOP NOW</Button>
      </InfoWrapper>
    </Container>
  );
};

export default CategoryItem;
