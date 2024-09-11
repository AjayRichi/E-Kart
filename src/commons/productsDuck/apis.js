import axios from "axios";

const BASE_URL = "https://fakestoreapi.com";

export function fetchProductsApi({ pathParams = {} }) {
  const { category } = pathParams;
  if (category) {
    return axios.get(`${BASE_URL}/products/category/${category}`);
  } else {
    return axios.get(`${BASE_URL}/products`);
  }
}

export function fetchProductCategoriesApi() {
  return axios.get(`${BASE_URL}/products/categories`);
}
