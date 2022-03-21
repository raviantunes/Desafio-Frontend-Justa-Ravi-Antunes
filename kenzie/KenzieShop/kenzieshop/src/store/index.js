import { createStore, combineReducers } from "redux";
import cartProductsReducer from "./modules/CartProducts/reducer";
import productsReducer from "./modules/products";

const reducers = combineReducers({
  cartProducts: cartProductsReducer,
  products: productsReducer,
});

const store = createStore(reducers);

export default store;
