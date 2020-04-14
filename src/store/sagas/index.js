import { takeLatest } from "redux-saga/effects";
import * as types from "../types/search";
import { search } from "./search";

export function* watchAll() {
  yield takeLatest(types.SEARCH_PHOTOS_REQUEST, search);
}