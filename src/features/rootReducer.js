import { combineReducers } from "@reduxjs/toolkit";

import practiceReducer from "./practiceSlice";

import {practiceformApi} from '../services/practiceformAPI';

const rootReducer = combineReducers({
    practice: practiceReducer,
    [practiceformApi.reducerPath]: practiceformApi.reducer,
});
  
export default rootReducer;