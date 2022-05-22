import { combineReducers } from "redux";
import cartReducer from "./cartReducer.js";

let reducers = combineReducers({
  cartReducer: cartReducer,
});

const rootReducer = (state, action) => {
  //   console.log("rootreducer called with action:", action.type);
  return reducers(state, action);
};

export default rootReducer;
