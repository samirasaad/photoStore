import { put, call } from "redux-saga/effects";
import API from "../../network/apis/downloadApi";
import { downloadApPhotoRecieve } from "../actions/download";

export function* download({payload}) {
  try {
    const response = yield call(API.downloadAPhoto,payload);
    yield put(downloadApPhotoRecieve(response.data));
    console.log(response)
  } catch (err) {
    console.log(err);
  }
}