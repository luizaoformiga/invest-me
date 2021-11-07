import { all, AllEffect, ForkEffect } from "redux-saga/effects";

import cart from "./cart/sagas";

export default function* rootSaga(): Generator<
  AllEffect<AllEffect<ForkEffect<never>>>,
  any,
  unknown
> {
  return yield all([cart]);
}
