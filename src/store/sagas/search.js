import { put, call } from "redux-saga/effects";
import API from "../../network/apis/searchApi";
import { searchRecieve } from "../actions/search";

export function* search({payload}) {
  try {
    const response = yield call(API.searchForPhotos,payload);
    yield put(searchRecieve(response.data));
    console.log(response)
  } catch (err) {
    console.log(err);
  }
}