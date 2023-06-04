// store/tokenReducer.ts
import Cookies from "js-cookie";
import { TokenActionTypes, TokenState } from "./types";

const initialState: TokenState = {
  token: Cookies.get("token") || "",
};

const tokenReducer = (
  // eslint-disable-next-line default-param-last
  state = initialState,
  action: TokenActionTypes
): TokenState => {
  switch (action.type) {
    case "SET_TOKEN":
      Cookies.set("token", action.payload);

      return {
        ...state,
        token: action.payload,
      };
    case "CLEAR_TOKEN":
      // Remove the token from the cookie
      Cookies.remove("token");
      return {
        ...state,
        token: "",
      };
    default:
      return state;
  }
};

export default tokenReducer;
