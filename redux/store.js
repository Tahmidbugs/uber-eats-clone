import { legacy_createStore as createStore } from "redux";

import reducer from "./reducers/index";

export default function configureStore(initialState) {
  //   console.log("initial state is:", initialState);
  return createStore(reducer, initialState);
}
