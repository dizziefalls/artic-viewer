import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface PageConfigState {
  q: string | null,
  pageNumber: string,
  pageSizeLimit: string,
  imageBaseUrl: string
}

const initialState: PageConfigState = {
  q: null,
  pageNumber: "1",
  pageSizeLimit: "25",
  imageBaseUrl: "https://www.artic.edu/iiif/2"
}

export const pageConfigSlice = createSlice({
  name: 'pageConfig',
  initialState,
  reducers: {
    setQueryString: (state, action: PayloadAction<string>) => {
      state.q = action.payload
    },
    resetQueryString: (state) => {
      state.q = null
    },
    setPageNumber: (state, action: PayloadAction<string>) => {
      state.pageNumber = action.payload
    },
    resetPageNumber: (state) => {
      state.pageNumber = initialState.pageNumber
    },
    setPageSizeLimit: (state, action: PayloadAction<string>) => {
      state.pageSizeLimit = action.payload
    },
    setImageBaseUrl: (state, action: PayloadAction<string>) => {
      state.imageBaseUrl = action.payload
    }
  }
})

export const { 
  setQueryString, 
  resetQueryString, 
  setPageNumber, 
  resetPageNumber, 
  setPageSizeLimit, 
  setImageBaseUrl } = pageConfigSlice.actions
export default pageConfigSlice.reducer