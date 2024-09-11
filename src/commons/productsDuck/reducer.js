import { ACTIONS } from "./actions";

const initialState = {
  products: [],
  categories: [],
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.SET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case ACTIONS.SET_PRODUCT_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };
    default:
      return state;
  }
};

export default productsReducer;
