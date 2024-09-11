import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  isLoadingSelector,
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
import { Sort } from "./Sort";

/** STYLED COMPONENTS - START **/
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
/** STYLED COMPONENTS - END **/

const sortOptions = [
  { label: "Normal", value: "" },
  { label: "High to low", value: "desc" },
  { label: "Low to High", value: "asc" },
];

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector(productsListSelector);
  const productCategories = useSelector(productCategoriesSelector);
  const isLoading = useSelector(isLoadingSelector);

  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSort, setSelectedSort] = useState("");

  useEffect(() => {
    dispatch(getProductCategoriesAction());
  }, []);

  useEffect(() => {
    dispatch(
      getProductsAction({
        pathParams: {
          category: selectedCategory,
        },
        queryParams: {
          sort: selectedSort,
        },
      })
    );
  }, [selectedCategory, selectedSort]);

  const handleFilter = (e) => {
    const value = e.target.value;
    if (value === "all") {
      setSelectedCategory("");
    } else {
      setSelectedCategory(value);
    }
  };

  const handleSort = (value) => {
    setSelectedSort(value);
  };

  return (
    <React.Fragment>
      <FixedHeader>
        <div>
          <Filters
            productCategories={productCategories}
            handleSelect={handleFilter}
          />
          <Sort
            selectedSort={selectedSort}
            sortOptions={sortOptions}
            handleSelect={handleSort}
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
          products.length > 0 &&
          products.map((product) => (
            <ProductCard key={product.id} details={product} />
          ))
        )}
      </ProductsWrapper>
    </React.Fragment>
  );
};

export { Products };
