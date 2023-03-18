import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const eventsApi = createApi({
  reducerPath: "eventsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3007" }),
  endpoints: (build) => ({
    getEvents: build.query({
      query: () => ({
        url: "/events",
        method: "GET",
      }),
    }),
    postEvents: build.mutation({
      query: (data) => ({
        url: "/events",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useGetEventsQuery, usePostEventsMutation } = eventsApi;
