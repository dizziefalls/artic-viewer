import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../features/user/userSlice'

export const store = configureStore({
  reducer: {
    user: userReducer
  },
})

// Infers types from the store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch