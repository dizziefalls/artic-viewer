import { configureStore } from "@reduxjs/toolkit";
import { articApi } from "../services/artic";
import userReducer from '../features/user/userSlice'

export const store = configureStore({
  reducer: {
    [articApi.reducerPath]: articApi.reducer,
    user: userReducer
  },
  middleware: (getDefaultMiddleware) => 
     getDefaultMiddleware().concat(articApi.middleware),
})

// Infers types from the store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch