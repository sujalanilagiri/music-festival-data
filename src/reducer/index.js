import { combineReducers } from "redux";
import FestivalDataReducer from "../components/FestivalData/modules/FestivalDataReducer";

const rootReducer = combineReducers({
  festivalData: FestivalDataReducer
});

export default rootReducer;