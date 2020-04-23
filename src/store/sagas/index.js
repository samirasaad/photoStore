import { takeLatest } from "redux-saga/effects";
import * as types from "../types";
import { search } from "./search";
import { download } from "./download";
import { photographerProfile } from "./photographerProfile";

export function* watchAll() {
  yield takeLatest(types.SEARCH_PHOTOS_REQUEST, search);
  yield takeLatest(types.DOWNLOAD_A_PHOTO_REQUEST,download );
  yield takeLatest(types.PHOTOGRAPHER_PROFILE_REQUEST,photographerProfile );
}