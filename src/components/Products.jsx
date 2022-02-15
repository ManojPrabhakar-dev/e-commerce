import React from "react";
import styled from "styled-components";
import Product from "./Product";
import { popularProducts } from "../data";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 20px;
  /* gap: 10px; */
`;

const Products = () => {
  return (
    <Container>
      {popularProducts.map((item) => {
        return <Product item={item} />;
      })}
    </Container>
  );
};

export default Products;
