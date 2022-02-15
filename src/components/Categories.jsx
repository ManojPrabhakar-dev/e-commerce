import React from "react";
import styled from "styled-components";
import CategoryItem from "./CategoryItem";
import { categories } from "../data";

const Container = styled.div`
  display: flex;
  padding: 20px;
  gap: 10px;
`;

const Categories = () => {
  return (
    <Container>
      {categories.map((item) => {
        return <CategoryItem item={item} />;
      })}
    </Container>
  );
};

export default Categories;
