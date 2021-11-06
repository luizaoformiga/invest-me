import { all, takeLatest, AllEffect, ForkEffect } from "redux-saga/effects";

import { RepositoriesTypes } from "./repositories/types";
import { load } from "./repositories/sagas";

export default function* rootSaga(): Generator<
  AllEffect<ForkEffect<never>>,
  any,
  unknown
> {
  return yield all([takeLatest(RepositoriesTypes.LOAD_REQUEST, load)]);
}
