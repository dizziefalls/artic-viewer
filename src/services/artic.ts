import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const articApi = createApi({
  reducerPath: 'articApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.artic.edu/api/v1/'}),
  endpoints: (builder) => ({
    getAllWorks: builder.query({
      query: () => 'artworks?page=2&limit=20', 
    }),
  })
})

export const { useGetAllWorksQuery } = articApi