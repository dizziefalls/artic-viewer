import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// would be nice to build the options separately and always append them...
// using return types are breaking it currently
export const articApi = createApi({
  reducerPath: 'articApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.artic.edu/api/v1/'}),
  endpoints: (builder) => ({
    getAllWorks: builder.query({
      query: (queryOptions) => `artworks?${queryOptions}`,
    }),
    getWorkById: builder.query({
      query: (id) => `artworks/${id}`
    }),
    getWorksByQuery: builder.query({
      query: (queryOptions) => `artworks/search?q=${queryOptions}`
    })
  })
})

export const { useGetAllWorksQuery, useGetWorkByIdQuery, useGetWorksByQueryQuery } = articApi