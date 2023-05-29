import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface PageConfigState {
  pageSizeLimit: number,
}

const initialState: PageConfigState = {
  pageSizeLimit: 25
}

export const pageConfigSlice = createSlice({
  name: 'pageConfig',
  initialState,
  reducers: {
    setPageSizeLimit: (state, action: PayloadAction<number>) => {
      state.pageSizeLimit = action.payload
    }
  }
})

export const { setPageSizeLimit } = pageConfigSlice.actions
export default pageConfigSlice.reducer