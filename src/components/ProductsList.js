import React, { useState, useEffect } from "react";
import styled from "styled-components";

import contentful from "../api/contentful";

import ProductItem from "./ProductItem";

const ProductsWrapper = styled.div`
  max-width: 1248px;
  min-height: 100vh;
  margin: 0 auto;
  color: var(--clr-black);
`;

const Header = styled.div`
  color: var(--clr-black);
  font-size: 4.8rem;
  font-weight: 700;
  display: block;
  text-align: center;
  margin: 8rem 0 2rem 0;
`;

const ProductsList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 25rem));
  justify-content: space-evenly;
  align-content: space-between;
  align-items: start;
  padding: 4rem 0;
  grid-gap: 3rem 1rem;
`;

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      const { items } = await contentful.getEntries({
        content_type: "computers"
      });

      setProducts(
        items.map(item => {
          const images = item.fields.images.map(image => {
            return image.fields.file.url;
          });
          const id = item.sys.id;
          return { ...item.fields, images, id };
        })
      );
    }

    getProducts();
  }, [products]);

  return (
    <ProductsWrapper>
      <Header>Our Products</Header>
      <ProductsList>
        {products.map(product => (
          <ProductItem key={product.id} product={product} />
        ))}
      </ProductsList>
    </ProductsWrapper>
  );
};

export default Products;
