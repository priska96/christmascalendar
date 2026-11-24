import { combineReducers } from "redux";

import doorSlice from "./doorsSlice";

const rootReducer = combineReducers({
  doors: doorSlice,
});

export default rootReducer;
