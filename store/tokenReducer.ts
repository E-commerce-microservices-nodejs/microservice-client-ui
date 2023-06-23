// store/tokenReducer.ts
<<<<<<< HEAD
import { TokenActionTypes, TokenState } from "./types";

const initialState: TokenState = {
  token: "",
=======
import Cookies from "js-cookie";
import { TokenActionTypes, TokenState } from "./types";

const initialState: TokenState = {
  token: Cookies.get("token") || "",
>>>>>>> origin/main
};

const tokenReducer = (
  // eslint-disable-next-line default-param-last
  state = initialState,
  action: TokenActionTypes
): TokenState => {
  switch (action.type) {
    case "SET_TOKEN":
<<<<<<< HEAD
=======
      Cookies.set("token", action.payload);

>>>>>>> origin/main
      return {
        ...state,
        token: action.payload,
      };
<<<<<<< HEAD
=======
    case "CLEAR_TOKEN":
      // Remove the token from the cookie
      Cookies.remove("token");
      return {
        ...state,
        token: "",
      };
>>>>>>> origin/main
    default:
      return state;
  }
};

export default tokenReducer;
