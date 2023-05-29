import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface PageConfigState {
  pageNumber: number,
  pageSizeLimit: number,
}

const initialState: PageConfigState = {
  pageNumber: 1,
  pageSizeLimit: 25
}

export const pageConfigSlice = createSlice({
  name: 'pageConfig',
  initialState,
  reducers: {
    setPageNumber: (state, action: PayloadAction<number>) => {
      state.pageNumber = action.payload
    },
    setPageSizeLimit: (state, action: PayloadAction<number>) => {
      state.pageSizeLimit = action.payload
    }
  }
})

export const { setPageSizeLimit } = pageConfigSlice.actions
export default pageConfigSlice.reducer