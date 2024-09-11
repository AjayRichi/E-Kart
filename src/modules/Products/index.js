import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  productCategoriesSelector,
  productsListSelector,
} from "../../commons/productsDuck/selectors";
import {
  getProductCategoriesAction,
  getProductsAction,
} from "../../commons/productsDuck/actions";
import { ProductCard } from "../../components";
import styled from "styled-components";
import { Filters } from "./Filters";
import { formatterText } from "../../commons/utils/currenyFormatter";
import { FaSpinner } from "react-icons/fa";

const FixedHeader = styled.header`
  position: fixed;
  width: 100%;
  top: 82px;
  left: 115px;
  z-index: 99;
  // height: 70px;
  background-color: #f8f7fc;
`;

const ProductsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 0px;
  margin-top: 100px;
`;

const HeaderText = styled.div`
  font-family: Proxima Nova;
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 8px;
`;

const SubHeaderText = styled.div`
  font-family: Proxima Nova;
  font-size: 14px;
  font-weight: 400;
`;

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector(productsListSelector);
  const productCategories = useSelector(productCategoriesSelector);

  const [isLoading, setIsLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    dispatch(getProductCategoriesAction());
  }, []);

  useEffect(() => {
    setIsLoading(true);
    dispatch(
      getProductsAction({
        pathParams: {
          category: selectedCategory,
        },
        resolve: () => {
          setIsLoading(false);
        },
        reject: () => {
          setIsLoading(false);
        },
      })
    );
  }, [selectedCategory]);

  const handleSelect = (e) => {
    const value = e.target.value;
    if (value === "all") {
      setSelectedCategory("");
    } else {
      setSelectedCategory(value);
    }
  };

  return (
    <React.Fragment>
      <FixedHeader>
        <div>
          <Filters
            productCategories={productCategories}
            handleSelect={handleSelect}
          />
        </div>
        <div>
          <HeaderText>Products</HeaderText>
          <SubHeaderText>
            {formatterText({
              type: "capitalizeFirstLetter",
              text: selectedCategory,
            })}
          </SubHeaderText>
        </div>
      </FixedHeader>
      <ProductsWrapper>
        {isLoading ? (
          <FaSpinner size={100} />
        ) : (
          products &&
          products.map((product) => (
            <ProductCard key={product.id} details={product} />
          ))
        )}
      </ProductsWrapper>
    </React.Fragment>
  );
};

export { Products };
