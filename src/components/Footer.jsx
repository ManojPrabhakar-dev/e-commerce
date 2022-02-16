import {
  Email,
  Facebook,
  Instagram,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@mui/icons-material";
import styled from "styled-components";

const Container = styled.div`
  height: 35vh;
  display: flex;
  justify-content: center;
  /* align-items: center; */
`;

const LeftWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 10px;
  /* margin-top: 15px; */
  margin-right: 40px;
`;

const Title = styled.h1`
  font-size: 26px;
  /* margin-bottom: 20px; */
`;
const Desc = styled.span`
  font-size: 15px;
  /* margin-bottom: 15px; */
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 15px;
`;

const IconWrapper = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #${(props) => props.color};
  color: #fff;
`;

const MiddleWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const LinkTitle = styled.h3`
  margin: 20px 0px;
`;

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  /* width: 100%; */
`;

const ListItem = styled.li`
  list-style: none;
  width: 50%;
  margin-bottom: 10px;
`;

const RightWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const ContackTitle = styled.h3`
  margin: 20px 0px;
`;

const Info = styled.span`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
`;

const PaymentImage = styled.img`
  height: 20px;
  width: 60%;
`;

const Footer = () => {
  return (
    <Container>
      <LeftWrapper>
        <Title>Shopify</Title>
        <Desc>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.
        </Desc>
        <SocialIcons>
          <IconWrapper color="3B5999">
            <Facebook />
          </IconWrapper>
          <IconWrapper color="E4405F">
            <Instagram />
          </IconWrapper>
          <IconWrapper color="55ACEE">
            <Twitter />
          </IconWrapper>
          <IconWrapper color="E60023">
            <Pinterest />
          </IconWrapper>
        </SocialIcons>
      </LeftWrapper>
      <MiddleWrapper>
        <LinkTitle>Useful Links</LinkTitle>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Women Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Support</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </MiddleWrapper>
      <RightWrapper>
        <ContackTitle>Contact</ContackTitle>
        <Info>
          <Room />
          144 Tin factory, south bangalore 560093
        </Info>
        <Info>
          <Phone />
          +1 234 567 89
        </Info>
        <Info>
          <Email />
          contact@shopify.com
        </Info>
        <PaymentImage src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </RightWrapper>
    </Container>
  );
};

export default Footer;
