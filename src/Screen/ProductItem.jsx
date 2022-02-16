import React from "react";
import styled from "styled-components";
import Banner from "../components/Banner";
import NavBar from "../components/NavBar";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";
import { Add, Remove } from "@mui/icons-material";

const Container = styled.div`
  display: flex;
  padding: 30px;
`;

const ImageContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin: 0px 30px;
  gap: 30px;
`;
const Title = styled.h1`
  font-weight: 400;
  font-size: 30px;
`;
const Desc = styled.span`
  font-size: 20px;
`;

const Price = styled.span`
  font-weight: 300;
  font-size: 32px;
`;

const ItemsWrapper = styled.div`
  display: flex;
  align-items: center;
`;
const InfoTitle = styled.span`
  font-weight: 200;
  font-size: 20px;
  margin-right: 10px;
`;
const Color = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.bgColor};
  margin: 0px 5px;
`;

const Select = styled.select`
  padding: 5px;
  cursor: pointer;
`;

const Option = styled.option``;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50%;
`;

const Quantity = styled.div`
  margin: 0px 5px;
  padding: 5px 10px;
  border-radius: 5px;
  border: 2px solid #b9b9b9;
`;

const Button = styled.button`
  padding: 10px;
  border: 2px solid teal;
  background-color: #fff;
  cursor: pointer;
`;

const ProductItem = () => {
  return (
    <div>
      <NavBar />
      <Banner />
      <Container>
        <ImageContainer>
          <Image src="https://i.ibb.co/S6qMxwr/jean.jpg" />
        </ImageContainer>
        <InfoContainer>
          <Title>Denim Jumpsuit</Title>
          <Desc>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
            iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
            tristique tortor pretium ut. Curabitur elit justo, consequat id
            condimentum ac, volutpat ornare.
          </Desc>
          <Price>$ 30</Price>
          <FilterContainer>
            <ItemsWrapper>
              <InfoTitle>Color</InfoTitle>
              <Color bgColor="#333" />
              <Color bgColor="blue" />
              <Color bgColor="green" />
            </ItemsWrapper>
            <ItemsWrapper>
              <InfoTitle>Size</InfoTitle>
              <Select>
                <Option selected>XS</Option>
                <Option>M</Option>
                <Option>L</Option>
              </Select>
            </ItemsWrapper>
          </FilterContainer>
          <FilterContainer>
            <ItemsWrapper>
              <Add style={{ cursor: "pointer" }} />
              <Quantity>1</Quantity>
              <Remove style={{ cursor: "pointer" }} />
            </ItemsWrapper>
            <Button>Add to Cart</Button>
          </FilterContainer>
        </InfoContainer>
      </Container>
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default ProductItem;
