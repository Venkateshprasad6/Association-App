import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../features/rootReducer";
import { practiceformApi } from "../services/practiceformAPI";
import { expensesApi } from "../services/expensesAPI";
import { eventsApi } from "../services/eventsAPI";

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      practiceformApi.middleware,
      expensesApi.middleware,
      eventsApi.middleware
    ),
});
