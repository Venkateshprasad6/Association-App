import { combineReducers } from "@reduxjs/toolkit";

import practiceReducer from "./practiceSlice";

import { practiceformApi } from "../services/practiceformAPI";
import { expensesApi } from "../services/expensesAPI";

const rootReducer = combineReducers({
  practice: practiceReducer,
  [practiceformApi.reducerPath]: practiceformApi.reducer,
  [expensesApi.reducerPath]: expensesApi.reducer,
});

export default rootReducer;
