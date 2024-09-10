import axios from "axios";

export function fetchProductsApi() {
  return axios.get("https://fakestoreapi.com/products");
}
