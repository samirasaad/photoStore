import { put, call } from "redux-saga/effects";
import API from "../../network/apis/photographerProfile";
import { photographerProfileRecieve, photographerLikesRecieve, photographerCollectionsRecieve } from "../actions/photographerProfile";

//PHOTOS
export function* photographerProfile({payload}) {
  try {
    const response = yield call(API.photographerProfile,payload);
    yield put(photographerProfileRecieve(response.data));
  } catch (err) {
    console.log(err);
  }
}

//LIKES
export function* photographerLikes({payload}) {
  try {
    const response = yield call(API.photographerLikes,payload);
    yield put(photographerLikesRecieve(response.data));
  } catch (err) {
    console.log(err);
  }
}

//COLLECTIONS
export function* photographerCollections({payload}) {
  try {
    const response = yield call(API.photographerCollections,payload);
    yield put(photographerCollectionsRecieve(response.data));
  } catch (err) {
    console.log(err);
  }
}