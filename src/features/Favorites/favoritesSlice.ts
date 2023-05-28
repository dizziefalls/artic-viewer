import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"

export interface FavoritesState {
  favorites: string[]
}

const initialState: FavoritesState = {
  favorites: []
}

export const favoritesSlice = createSlice({
  name: 'favorites',
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

export const { addFav, removeFav } = favoritesSlice.actions
export default favoritesSlice.reducer