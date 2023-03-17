import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const expensesApi = createApi({
  reducerPath: "expensesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3007" }),
  endpoints: (build) => ({
    getExpenses: build.query({
      query: () => ({
        url: "/expenses",
        method: "GET",
      }),
    }),
    postExpenses: build.mutation({
      query: (data) => ({
        url: "/expenses",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useGetExpensesQuery, usePostExpensesMutation } = expensesApi;
