// reducers/userReducer.ts

<<<<<<< HEAD
=======
import Cookies from "js-cookie";
>>>>>>> origin/main
import { UserState } from "./types";

const initialState: UserState = {
  authenticatedUser: null,
  error: null,
};

// eslint-disable-next-line default-param-last
const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "SET_USER":
<<<<<<< HEAD
=======
      Cookies.set("user", JSON.stringify(action.payload));
>>>>>>> origin/main
      return {
        ...state,
        authenticatedUser: action.payload,
      };
    case "LOGOUT_USER":
<<<<<<< HEAD
=======
      Cookies.remove("user");

>>>>>>> origin/main
      return {
        ...state,
        authenticatedUser: null,
      };
    case "LOGIN_ERROR":
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
