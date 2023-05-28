import { configureStore } from "@reduxjs/toolkit";
import { articApi } from "../services/artic";
import favoritesReducer from '../features/Favorites/favoritesSlice'

export const store = configureStore({
  reducer: {
    [articApi.reducerPath]: articApi.reducer,
    favorites: favoritesReducer
  },
  middleware: (getDefaultMiddleware) => 
     getDefaultMiddleware().concat(articApi.middleware),
})

// Infers types from the store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch