import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type IResponse from '../types/response'

// extend to accept UI generated query params
// using return types are breaking it currently
export const articApi = createApi({
  reducerPath: 'articApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.artic.edu/api/v1/'}),
  endpoints: (builder) => ({
    getAllWorks: builder.query({
      query: ({options}) => `artworks?page=${options.pageNumber}&limit=${options.pageSizeLimit}`,
    }),
    getWorkById: builder.query({
      query: (id) => `artworks/${id}`
    }),
    getWorksByQuery: builder.query({
      query: (searchString) => `artworks/search?q=${searchString}`
    })
  })
})

export const { useGetAllWorksQuery, useGetWorkByIdQuery, useGetWorksByQueryQuery } = articApi