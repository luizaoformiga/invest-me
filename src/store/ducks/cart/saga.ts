import { call, put, CallEffect, PutEffect } from "redux-saga/effects";
import { api } from "../../../services/axios";
import { loadFailure } from "../repositories/actions";

import { addItem, removeItem } from "./actions";

export function* Add(): Generator<
  CallEffect<unknown> | PutEffect<any>,
  void,
  unknown
> {
  try {
    const response: any = yield call(api.get, "/");

    yield put(addItem(response.data));
  } catch (err) {
    yield put(loadFailure());
  }
}

export function* Remove(): Generator<
  CallEffect<unknown> | PutEffect<any>,
  void,
  unknown
> {
  try {
    const response: any = yield call(api.get, "/");

    yield put(removeItem(response.data));
  } catch (err) {
    yield put(loadFailure());
  }
}
