import { all } from "redux-saga/effects";
import homeSaga from "./homeSaga";
import aboutSaga from "./aboutSaga";

export default function* rootSaga() {
  yield all([homeSaga(), aboutSaga()]);
}
