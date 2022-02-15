import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: teal;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

const Banner = () => {
  return <Container>Super Deal! Free Shipping on Orders Over Rs.500</Container>;
};

export default Banner;
