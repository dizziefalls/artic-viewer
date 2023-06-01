import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"

export interface FavoritesState {
  favorites: any[]
}

const initialState: FavoritesState = {
  favorites: []
}

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFav: (state, action: PayloadAction<string>) => {
      const favIds = state.favorites.map(fav => fav.id)
      if (!favIds.includes(action.payload.id!)) {
        console.log("artwork already registered")
        state.favorites.push(action.payload)
      }
    },
    removeFav: (state, action: PayloadAction<string>) => {
      state.favorites = state.favorites.filter(fav => fav.id !== action.payload.id)
    }
  }
})

export const { addFav, removeFav } = favoritesSlice.actions
export default favoritesSlice.reducer