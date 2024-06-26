import { call, put, takeLatest } from "redux-saga/effects";
import {
  fetchHomeDataStart,
  fetchHomeDataSuccess,
  fetchHomeDataFailure,
} from "../slices/homeSlice";
// import { fetchHomeData } from "../../services/homeApi";

function* fetchHomeDataSaga() {
  try {
    yield put(fetchHomeDataStart());
    // const data = yield call(fetchHomeData);
    // yield put(fetchHomeDataSuccess(data));
  } catch (error) {
    yield put(fetchHomeDataFailure(error.message));
  }
}

export default function* homeSaga() {
  yield takeLatest("home/fetchHomeData", fetchHomeDataSaga);
}
