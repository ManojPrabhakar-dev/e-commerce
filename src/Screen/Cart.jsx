import React from "react";
import styled from "styled-components";
import Banner from "../components/Banner";
import NavBar from "../components/NavBar";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";
import { Add, Remove } from "@mui/icons-material";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
`;

const Title = styled.h1`
  text-align: center;
  font-weight: 400;
`;
const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const LinkWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const Link = styled.span`
  font-size: 20px;
  text-decoration: underline;
  cursor: pointer;
`;

const Button = styled.button`
  background-color: ${(props) => (props.type === "filled" ? "#333" : "#fff")};
  color: ${(props) => (props.type === "filled" ? "#fff" : "#333")};
  border: ${(props) => (props.type === "filled" ? "none" : "1px solid #333")};
  padding: 10px 20px;
  cursor: pointer;
`;

const InfoContainer = styled.div`
  display: flex;
`;

const ProductInfoContainer = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
`;

const ImageContainer = styled.div`
  width: 200px;
`;

const Image = styled.img`
  width: 100%;
`;

const ProductInfoWrapper = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ProductItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const TextItem = styled.span`
  font-size: ${(props) => props.size}px;
  font-weight: ${(props) => props.weight};
`;

const Color = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.bgColor};
`;

const AmountContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  gap: 20px;
`;
const QuantityWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Hr = styled.hr`
  background-color: lightgrey;
  border: none;
  height: 2px;
`;

const OrderInfoContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
  padding: 20px;
  margin: 10px;
  border: 1px solid #b9b9b9;
`;
const TotalWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Cart = () => {
  return (
    <div>
      <NavBar />
      <Banner />
      <Container>
        <Title>YOUR BAG</Title>
        <TopContainer>
          <Button type="outline">CONTINUE SHOPPING</Button>
          <LinkWrapper>
            <Link>Shopping Bag (2)</Link>
            <Link>Your Wishlist (0)</Link>
          </LinkWrapper>
          <Button type="filled">CHECKOUT NOW</Button>
        </TopContainer>
        <InfoContainer>
          <ProductInfoContainer>
            <ProductItem>
              <ImageContainer>
                <Image src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" />
              </ImageContainer>
              <ProductInfoWrapper>
                <TextItem size="18">
                  <b>Product</b> JESSIE THUNDER SHOES
                </TextItem>
                <TextItem size="18">
                  <b>ID</b> 98367549
                </TextItem>
                <Color bgColor="#333" />
                <TextItem size="18">
                  <b>Size</b> 37.5
                </TextItem>
              </ProductInfoWrapper>
              <AmountContainer>
                <QuantityWrapper>
                  <Add />
                  <TextItem size="24" weight="500">
                    2
                  </TextItem>
                  <Remove />
                </QuantityWrapper>
                <TextItem size="26" weight="400">
                  $ 30
                </TextItem>
              </AmountContainer>
            </ProductItem>
            <Hr />
            <ProductItem>
              <ImageContainer>
                <Image src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png" />
              </ImageContainer>
              <ProductInfoWrapper>
                <TextItem size="18">
                  <b>Product</b> HAKURA T-SHIRT
                </TextItem>
                <TextItem size="18">
                  <b>ID</b> 89743567
                </TextItem>
                <Color bgColor="#333" />
                <TextItem size="18">
                  <b>Size</b> M
                </TextItem>
              </ProductInfoWrapper>
              <AmountContainer>
                <QuantityWrapper>
                  <Add />
                  <TextItem size="20" weight="500">
                    1
                  </TextItem>
                  <Remove />
                </QuantityWrapper>
                <TextItem size="26" weight="400">
                  $ 20
                </TextItem>
              </AmountContainer>
            </ProductItem>
          </ProductInfoContainer>
          <OrderInfoContainer>
            <Title>ORDER SUMMARY</Title>
            <TotalWrapper>
              <TextItem size="20">Subtotal</TextItem>
              <TextItem size="20">$ 80</TextItem>
            </TotalWrapper>
            <TotalWrapper>
              <TextItem size="20">Estimated Shipping</TextItem>
              <TextItem size="20">$ 7.80</TextItem>
            </TotalWrapper>
            <TotalWrapper>
              <TextItem size="20">Shipping Discount</TextItem>
              <TextItem size="20">$ -7.80</TextItem>
            </TotalWrapper>
            <TotalWrapper>
              <TextItem size="22" weight="600">
                Total
              </TextItem>
              <TextItem size="22" weight="600">
                $ 80
              </TextItem>
            </TotalWrapper>
            <Button type="filled">CHECKOUT NOW</Button>
          </OrderInfoContainer>
        </InfoContainer>
      </Container>
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default Cart;
