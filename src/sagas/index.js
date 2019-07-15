import { all } from "redux-saga/effects";
import { FestivalDataSagas } from "../components/FestivalData/modules/FestivalDataSagas";

export default function* sagas() {
  yield all([...FestivalDataSagas]);
}