import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const practiceformApi = createApi({
  reducerPath: 'practiceformApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3007'}),
  endpoints: (build) => ({
    getPractice: build.query({
        query: () => ({
            url: "/practice-forms",
            method: "GET",
        }),
    }),
    postPractice: build.mutation({
      query: (values) => ({
        url: "/practice-forms",
        method: "POST",
        body: values,
      }),
    }),
  }),
})

export const { useGetPracticeQuery,usePostPracticeMutation } = practiceformApi