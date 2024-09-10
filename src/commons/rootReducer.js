import { combineReducers } from "redux";
import productsReducer from "./productsDuck/reducer";

const rootReducer = combineReducers({ products: productsReducer });

export default rootReducer;
