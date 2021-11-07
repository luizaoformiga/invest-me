export const item = [] /**import { all, put, takeLatest, PutEffect } from "redux-saga/effects";
import { CART_SUCESS, CART_AMOUNT_SUCESS } from "./actions";
import { Cart_INITIAL_CART } from "./types";

interface OwnProps {
  cart: Cart_INITIAL_CART;
}

function* addToCart(id: number): Generator<PutEffect<any>, void, unknown> {
  const book = cart.map((book) => (book.id === id ? book : null));

  yield put(CART_SUCESS([book[id - 1]]));
  yield put(CART_AMOUNT_SUCESS(id));
}

export default all([takeLatest([], addToCart)]); //Cart.CART_ADD, */
