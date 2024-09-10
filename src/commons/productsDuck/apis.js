import axios from "axios";

export function fetchProductsApi() {
  return axios.get(
    "https://www.increasingly.co/Clients/Interview/products.json"
  );
}
