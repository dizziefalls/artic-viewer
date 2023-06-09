import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"

//stored as whole artworks rn. could probably change this to just use ids.
export interface FavoritesState {
  favorites: any[]
}

const initialState: FavoritesState = {
  favorites: localStorage.getItem("favorites") ? 
    JSON.parse(localStorage.getItem("favorites")!) :
    []
}

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFav: (state, action: PayloadAction<any>) => {
      if (!state.favorites.includes(action.payload.id)) {
        state.favorites.push(action.payload)
      } else {
        console.log("artwork already registered")
      }
    },
    removeFav: (state, action: PayloadAction<any>) => {
      state.favorites = state.favorites.filter(fav => fav.id !== action.payload.id)
    }
  }
})

export const { addFav, removeFav } = favoritesSlice.actions
export default favoritesSlice.reducer