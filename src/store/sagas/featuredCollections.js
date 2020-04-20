import { put, call } from "redux-saga/effects";
import API from "../../network/apis/featuredCollectionsApi";
import { featuredCollectionsRecieve } from "../actions/featuredCollections";

export function* featuredCollections({payload}) {
  try {
    const response = yield call(API.featuredCollections,payload);
    yield put(featuredCollectionsRecieve(response.data));
    console.log(response.data)
  } catch (err) {
    console.log(err);
  }
}