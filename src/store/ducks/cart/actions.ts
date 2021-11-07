import { action } from "typesafe-actions";
import { Cart, Cart_INITIAL_CART } from "./types";

export const CART_INCREMENT = () => action(Cart.CART_INCREMENT);
export const CART_DECREMENT = () => action(Cart.CART_DECREMENT);
export const CART_ADD = () => action(Cart.CART_ADD);
export const CART_SUCESS = (data: any) =>
  action(Cart.CART_SUCESS, { data });
export const CART_AMOUNT_SUCESS = (data: any) =>
  action(Cart.CART_AMOUNT_SUCESS, { data });
