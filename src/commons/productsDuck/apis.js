import axios from "axios";

const BASE_URL = "https://fakestoreapi.com";

export function fetchProductsApi({ pathParams = {}, queryParams = {} }) {
  const { category } = pathParams;
  const { sort } = queryParams;

  const categoryParam = category ? `/category/${category}` : "";
  const sortParam = sort ? `?sort=${sort}` : "";

  return axios.get(`${BASE_URL}/products${categoryParam}${sortParam}`);
}

export function fetchProductCategoriesApi() {
  return axios.get(`${BASE_URL}/products/categories`);
}
