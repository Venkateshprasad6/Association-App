import { combineReducers } from "@reduxjs/toolkit";

import practiceReducer from "./practiceSlice";

import { practiceformApi } from "../services/practiceformAPI";
import { expensesApi } from "../services/expensesAPI";
import { eventsApi } from "../services/eventsAPI";

const rootReducer = combineReducers({
  practice: practiceReducer,
  [practiceformApi.reducerPath]: practiceformApi.reducer,
  [expensesApi.reducerPath]: expensesApi.reducer,
  [eventsApi.reducerPath]: eventsApi.reducer,
});

export default rootReducer;
