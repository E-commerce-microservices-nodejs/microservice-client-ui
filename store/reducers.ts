// store/reducers.ts
import { combineReducers, Reducer } from "redux";
import userReducer from "./userReducer";
import tokenReducer from "./tokenReducer";
import productReducer from "./productReducer";
import { RootState } from "./types";
<<<<<<< HEAD
=======
import orderReducer from "./orderReducer";
>>>>>>> origin/main

const rootReducer: Reducer<RootState> = combineReducers({
  user: userReducer,
  token: tokenReducer,
  products: productReducer,
<<<<<<< HEAD
=======
  order: orderReducer,
>>>>>>> origin/main
});

export default rootReducer;
