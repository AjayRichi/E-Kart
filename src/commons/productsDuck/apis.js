import axios from "axios";

const BASE_URL = "https://fakestoreapi.com";

export function fetchProductsApi({ pathParams = {}, queryParams = {} }) {
  const { category } = pathParams;
  const { sort, search } = queryParams;

  const categoryParam = category ? `/category/${category}` : "";
  const sortParam = sort ? `?sort=${sort}` : "";
  const searchParam = search ? `?title=${search}` : "";

  return axios.get(
    `${BASE_URL}/products${categoryParam}${sortParam}${searchParam}`
  );
}

export function fetchProductCategoriesApi() {
  return axios.get(`${BASE_URL}/products/categories`);
}
