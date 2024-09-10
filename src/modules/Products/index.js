import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { productsListSelector } from "../../commons/productsDuck/selectors";
import { getProductsAction } from "../../commons/productsDuck/actions";
import { ProductCard } from "../../components";
import styled from "styled-components";

const FixedHeader = styled.header`
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 99;
  height: 70px;
  background-color: #f8f7fc;
`;

const ProductsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-top: 70px;
  padding: 0px;
`;

const HeaderText = styled.div`
  font-family: Proxima Nova;
  font-size: 24px;
  font-weight: 700;
  line-height: 29.23px;
  text-align: left;
  margin-bottom: 8px;
`;

const SubHeaderText = styled.div`
  font-family: Proxima Nova;
  font-size: 14px;
  font-weight: 400;
  line-height: 16.78px;
  text-align: left;
  margin-bottom: 24px;
`;

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector(productsListSelector);

  useEffect(() => {
    dispatch(getProductsAction());
  }, [dispatch]);

  return (
    <div>
      <FixedHeader>
        <HeaderText>Products</HeaderText>
        <SubHeaderText>Men's clothing</SubHeaderText>
      </FixedHeader>
      <ProductsWrapper>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} details={product} />
          ))}
      </ProductsWrapper>
    </div>
  );
};

export { Products };
