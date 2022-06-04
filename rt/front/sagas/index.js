import {
  all,
  call,
  delay,
  fork,
  put,
  take,
  takeEvery,
} from "redux-saga/effects";

import postSaga from "./post";
import userSaga from "./user";

export default function* rootSaga() {
  yield all([fork(postSaga), fork(userSaga)]);
}
