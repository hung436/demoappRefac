import { call, put, takeLatest } from "redux-saga/effects";
import {
  fetchAboutDataStart,
  fetchAboutDataSuccess,
  fetchAboutDataFailure,
} from "../slices/aboutSlice";
// import { fetchAboutData } from "../../services/aboutApi";

function* fetchAboutDataSaga() {
  try {
    yield put(fetchAboutDataStart());
    // const data = yield call(fetchAboutData);
    // yield put(fetchAboutDataSuccess(data));
  } catch (error) {
    yield put(fetchAboutDataFailure(error.message));
  }
}

export default function* aboutSaga() {
  yield takeLatest("about/fetchAboutData", fetchAboutDataSaga);
}
