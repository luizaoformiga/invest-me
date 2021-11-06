import { call, put, CallEffect, PutEffect } from "redux-saga/effects";
import { api } from "../../../services/axios";

import { loadSuccess, loadFailure } from "./actions";

export function* load(): Generator<
  CallEffect<unknown> | PutEffect<any>,
  void,
  unknown
> {
  try {
    const response: any = yield call(api.get, "/");
    console.log("DATA", response);

    yield put(loadSuccess(response.data));
  } catch (err) {
    yield put(loadFailure());
  }
}
