import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"

export interface UserState {
  favorites: string[]
}

const initialState: UserState = {
  favorites: []
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addFav: (state, action: PayloadAction<string>) => {
      state.favorites.push(action.payload)
    },
    removeFav: (state, action: PayloadAction<string>) => {
      state.favorites = state.favorites.filter(fav => fav !== action.payload)
    }
  }
})

export const { addFav, removeFav } = userSlice.actions
export default userSlice.reducer