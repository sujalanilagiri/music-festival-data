import { takeEvery, put, call } from "redux-saga/effects";
import FestivalDataApi from "./FestivalDataApi";


function* fetchData(action) {
  try {
    const response = yield call(FestivalDataApi.get);
    if (response.data) {
        yield put({ type: "FESTIVAL_DATA", response} );
    }
  } catch (error) {
    yield put({ type: "FESTIVAL_DATA_ERROR", error} );
  }
}

function* watchsaga() {
  yield takeEvery("GET_FESTIVAL_DATA", fetchData);
}

export const FestivalDataSagas = [watchsaga()];
