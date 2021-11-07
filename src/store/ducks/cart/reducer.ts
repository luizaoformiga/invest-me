import produce from "immer";
import { Cart, CartAmount, Cart_INITIAL_CART } from "./types";

const INITIAL_AMOUNT: CartAmount = {
  amount: [],
};

const INITIAL_CART: Cart_INITIAL_CART = {
  cart: [],
};

const reducer = produce((draft, action) => {
  switch (action.type) {
    case Cart.CART_SUCESS:
      const { product } = action;
      draft.cart[product[0].id] = product;
      return draft;
    default:
      return draft;
  }
}, INITIAL_CART);

const reducerAmountCart = produce((draft, action) => {
  switch (action.type) {
    case Cart.CART_AMOUNT_SUCESS:
      if (typeof draft.amount[action.id] === "undefined")
        draft.amount[action.id] = 1;
      else draft.amount[action.id]++;
      break;
    case Cart.CART_INCREMENT:
      draft.amount[action.id]++;
      break;
    case Cart.CART_DECREMENT:
      if (draft.amount[action.id] > 0) draft.amount[action.id]--;
      break;
    default:
      return draft;
  }
}, INITIAL_AMOUNT);

export { reducer, reducerAmountCart };
