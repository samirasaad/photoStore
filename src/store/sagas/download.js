import { put, call } from "redux-saga/effects";
import API from "../../network/apis/downloadApi";
import { downloadApPhotoRecieve } from "../actions/download";
import FileSaver from 'file-saver';

export function* download({payload}) {
  try {
    const response = yield call(API.downloadAPhoto,payload);
    FileSaver.saveAs(response.data.url, 'image.jpg');
    yield put(downloadApPhotoRecieve(response.data));
  } catch (err) {
    console.log(err);
  }
}