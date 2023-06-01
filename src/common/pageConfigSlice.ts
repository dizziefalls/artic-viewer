import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface PageConfigState {
  pageNumber: string,
  pageSizeLimit: string,
  imageBaseUrl: string
}

const initialState: PageConfigState = {
  pageNumber: "1",
  pageSizeLimit: "25",
  imageBaseUrl: ""
}

export const pageConfigSlice = createSlice({
  name: 'pageConfig',
  initialState,
  reducers: {
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

export const { setPageNumber, resetPageNumber, setPageSizeLimit, setImageBaseUrl } = pageConfigSlice.actions
export default pageConfigSlice.reducer