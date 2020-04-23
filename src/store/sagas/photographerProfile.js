import { put, call } from "redux-saga/effects";
import API from "../../network/apis/photographerProfile";
import { photographerProfileRecieve } from "../actions/photographerProfile";

export function* photographerProfile({payload}) {
  try {
    const response = yield call(API.photographerProfile,payload);
    yield put(photographerProfileRecieve(response.data));
  } catch (err) {
    console.log(err);
  }
}