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
import { ProductCard, useDebounce } from "../../components";
import styled from "styled-components";
import { Filters } from "./Filters";
import { formatterText } from "../../commons/utils/currenyFormatter";
import { FaChevronDown, FaChevronRight, FaSpinner } from "react-icons/fa";
import { Sort } from "./Sort";
import { Search } from "./Search";

/** STYLED COMPONENTS - START **/
const FixedHeader = styled.header`
  position: sticky;
  top: 82px;
  z-index: 99;
`;

const FilterWrapper = styled.header`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  column-gap: 20px;
  row-gap: 10px;
  padding: 24px;
  background-color: #ffffff;
`;

const ProductsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 0px 24px 50px;
`;

const Title = styled.div`
  background-color: #f8f7fc;
  padding: 24px;
`;

const HeaderText = styled.div`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 8px;
`;

const SubHeaderText = styled.div`
  font-size: 14px;
  font-weight: 400;
`;

const StyledButton = styled.button`
  position: absolute;
  top: 20px;
  right: 24px;
  cursor: pointer;
  padding: 5px;
  background-color: #ffffff;
  border-radius: 10px;
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

  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSort, setSelectedSort] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [isFiltersOpen, setIsFiltersOpen] = useState(true);
  const debouncedValue = useDebounce(searchValue, 500);

  useEffect(() => {
    dispatch(getProductCategoriesAction());
  }, []);

  useEffect(() => {
    if (debouncedValue) {
      const results = products.filter((product) => {
        const title = product.title ? product.title.toLowerCase() : "";
        const value = debouncedValue.toLowerCase();
        return title.includes(value);
      });
      setFilteredProducts(results);
    } else {
      setFilteredProducts(products);
    }
  }, [products, debouncedValue]);

  useEffect(() => {
    dispatch(
      getProductsAction({
        pathParams: {
          category: selectedCategory,
        },
        queryParams: {
          sort: selectedSort,
          search: debouncedValue,
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

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchValue(value);
  };

  return (
    <React.Fragment>
      <FixedHeader>
        <StyledButton onClick={() => setIsFiltersOpen(!isFiltersOpen)}>
          {isFiltersOpen ? (
            <FaChevronDown size={24} />
          ) : (
            <FaChevronRight size={24} />
          )}
        </StyledButton>
        {isFiltersOpen && (
          <FilterWrapper>
            <Filters
              productCategories={productCategories}
              handleSelect={handleFilter}
            />
            <Sort
              selectedSort={selectedSort}
              sortOptions={sortOptions}
              handleSelect={handleSort}
            />
            <Search searchValue={searchValue} handleSearch={handleSearch} />
          </FilterWrapper>
        )}
        <Title>
          <HeaderText>Products</HeaderText>
          <SubHeaderText>
            {formatterText({
              type: "capitalizeFirstLetter",
              text: selectedCategory,
            })}
          </SubHeaderText>
        </Title>
      </FixedHeader>
      <ProductsWrapper>
        {isLoading ? (
          <FaSpinner size={100} />
        ) : filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} details={product} />
          ))
        ) : (
          <div>No Products found</div>
        )}
      </ProductsWrapper>
    </React.Fragment>
  );
};

export { Products };
