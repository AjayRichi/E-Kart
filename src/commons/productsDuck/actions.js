export const ACTIONS = {
  GET_PRODUCTS: "GET_PRODUCTS",
  SET_PRODUCTS: "SET_PRODUCTS",
};

export const getProductsAction = (payload) => {
  return {
    type: ACTIONS.GET_PRODUCTS,
    payload: payload,
  };
};

export const setProductsAction = (payload) => {
  return {
    type: ACTIONS.SET_PRODUCTS,
    payload: payload,
  };
};
