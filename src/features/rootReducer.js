import { combineReducers } from "@reduxjs/toolkit";

import practiceReducer from "./practiceSlice";

const rootReducer = combineReducers({
    practice: practiceReducer,
});
  
export default rootReducer;