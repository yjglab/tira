import {
  all,
  call,
  delay,
  fork,
  put,
  take,
  takeEvery,
} from "redux-saga/effects";
import axios from "axios";

function logInAPI(data) {
  return axios.post("/api/logIn", data);
}

function* logIn(action) {
  try {
    // const result = yield call(logInAPI, action.data); // logInAPI, loginAPI의 인자
    delay(1000);
    yield put({
      type: "LOG_IN_SUCCESS",
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: "LOG_IN_FAILURE",
      data: err.response.data,
    });
  }
}

function logOutAPI() {
  return axios.post("/api/logOut");
}

function* logOut() {
  try {
    // const result = yield call(logOutAPI);
    delay(1000);
    yield put({
      type: "LOG_OUT_SUCCESS",
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: "LOG_OUT_FAILURE",
      data: err.response.data,
    });
  }
}

function addPostAPI(data) {
  return axios.post("/api/addPost", data);
}

function* addPost(action) {
  try {
    // const result = yield call(addPostAPI, action.data);
    delay(1000);
    yield put({
      type: "ADD_POST_SUCCESS",
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: "ADD_POST_FAILURE",
      data: err.response.data,
    });
  }
}

function* watchLogIn() {
  yield takeEvery("LOG_IN_REQUEST", logIn);
}
function* watchLogOut() {
  yield takeEvery("LOG_OUT_REQUEST", logOut);
}
function* watchAddPost() {
  yield takeEvery("ADD_POST_REQUEST", addPost);
}
export default function* rootSaga() {
  yield all([fork(watchLogIn)]);
}
