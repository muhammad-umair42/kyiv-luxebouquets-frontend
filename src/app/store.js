import { configureStore } from "@reduxjs/toolkit"
import interactionReducer from "./Slices/interactionSlice"

export const store = configureStore({
  reducer: interactionReducer,
})
