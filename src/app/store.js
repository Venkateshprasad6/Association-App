import { configureStore } from '@reduxjs/toolkit'
import rootReducer from '../features/rootReducer'
import {practiceformApi} from '../services/practiceformAPI';

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(practiceformApi.middleware),
})