import { put, call } from "redux-saga/effects";
import API from "../../network/apis/searchApi";
import { searchRecieve } from "../actions/search";

export function* search({payload}) {
  debugger
  try {
    const response = yield call(API.searchForPhotos,payload);
    console.log(payload)
    yield put(searchRecieve(response));
    console.log(response)
  } catch (err) {
    console.log(err);
  }
}