export const ACTIONS = {
  GET_PRODUCTS: "GET_PRODUCTS",
  SET_PRODUCTS: "SET_PRODUCTS",
  GET_PRODUCT_CATEGORIES: "GET_PRODUCT_CATEGORIES",
  SET_PRODUCT_CATEGORIES: "SET_PRODUCT_CATEGORIES",
};

export const actionCreator = (type) => {
  return (payload) => ({ type, payload });
};

//get actions
export const getProductsAction = actionCreator(ACTIONS.GET_PRODUCTS);
export const getProductCategoriesAction = actionCreator(
  ACTIONS.GET_PRODUCT_CATEGORIES
);

//set actions
export const setProductsAction = actionCreator(ACTIONS.SET_PRODUCTS);
export const setProductCategoriesAction = actionCreator(
  ACTIONS.SET_PRODUCT_CATEGORIES
);
