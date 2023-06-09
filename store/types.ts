// store/types.ts
import { UserType } from "../common/types/@appTypes";

// types.ts

export interface UserState {
  authenticatedUser: UserType | null;
  error?: string | null;
}

export interface SetUserAction {
  type: "SET_USER";
  payload: UserType;
}

export interface LogoutUserAction {
  type: "LOGOUT_USER";
}
export interface LoginErrorAction {
  type: "LOGIN_ERROR";
  payload: string;
}
export type UserAction = SetUserAction | LogoutUserAction | LoginErrorAction;

export interface TokenState {
  token: string | null;
}

export interface SetTokenAction {
<<<<<<< HEAD
  type: "SET_TOKEN";
=======
  type: "SET_TOKEN" | "CLEAR_TOKEN";
>>>>>>> origin/main
  payload: string;
}

export type TokenActionTypes = SetTokenAction;

export interface Product {
  _id: any;
  title: string;
  description: string;
  price: number;
  quantity?: number;
  rating?: string;
  image?: string[];
  inStock?: boolean;
  review?: string[];
  categories: string;
}

export interface ProductsState {
  products: Product[];
  shoppingCart: Product[];
}

export interface SetProductsAction {
<<<<<<< HEAD
  type: "SET_PRODUCTS" | "ADD_TO_SHOPPING_CART" | "REMOVE_FROM_SHOPPING_CART";
=======
  type:
    | "SET_PRODUCTS"
    | "SET_SHOPPING_CART"
    | "ADD_TO_SHOPPING_CART"
    | "REMOVE_FROM_SHOPPING_CART";
>>>>>>> origin/main
  payload: any;
}

export interface RootState {
  user: UserState;
  token: TokenState;
  products: ProductsState;
<<<<<<< HEAD
=======
  order: any;
>>>>>>> origin/main
}

export type ProductActionTypes = SetProductsAction;
