export enum Cart {
  CART_INCREMENT = "@cart/incremented",
  CART_DECREMENT = "@cart/decremented",
  CART_ADD = "add",
  CART_SUCESS = "@cart/addSuccess",
  CART_AMOUNT_SUCESS = "@cart/amountSuccess",
}

export interface CartAmount {
  amount: [];
}

export interface Cart_INITIAL_CART {
  cart: [];
}

export interface CartAmountRepository {
  readonly amount: CartAmount[];
}

export interface CartRepository {
  readonly cart: Cart_INITIAL_CART[];
}