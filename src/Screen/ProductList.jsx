import React from "react";
import styled from "styled-components";
import Banner from "../components/Banner";
import NavBar from "../components/NavBar";
import Products from "../components/Products";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";

const Container = styled.div`
  padding: 30px;
`;

const Title = styled.h1`
  margin-bottom: 30px;
`;
const SelectionContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SectionWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
const SectionTitle = styled.span`
  font-size: 20px;
  font-weight: 600;
`;

const Select = styled.select`
  font-size: 20px;
  width: 130px;
  padding: 10px;
  border: 1px solid #b9b9b9;
`;

const Option = styled.option``;

const ProductList = () => {
  return (
    <div>
      <NavBar />
      <Banner />
      <Container>
        <Title>Dresses</Title>
        <SelectionContainer>
          <SectionWrapper>
            <SectionTitle>Filter Products:</SectionTitle>
            <Select>
              <Option disabled selected>
                Color
              </Option>
              <Option>White</Option>
              <Option>Black</Option>
              <Option>Red</Option>
              <Option>Blue</Option>
              <Option>Yellow</Option>
              <Option>Green</Option>
            </Select>
            <Select>
              <Option disabled selected>
                Size
              </Option>
              <Option>XS</Option>
              <Option>S</Option>
              <Option>M</Option>
              <Option>L</Option>
              <Option>XL</Option>
            </Select>
          </SectionWrapper>
          <SectionWrapper>
            <SectionTitle>Sort Products:</SectionTitle>
            <Select>
              <Option selected>Newest</Option>
              <Option>Price: low-high</Option>
              <Option>Price: high-low</Option>
            </Select>
          </SectionWrapper>
        </SelectionContainer>
        <Products />
        <NewsLetter />
        <Footer />
      </Container>
    </div>
  );
};

export default ProductList;
