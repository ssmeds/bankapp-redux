import { configureStore } from "@reduxjs/toolkit";

import bankReducer from './reducers'

export const store = configureStore({
  reducer: bankReducer,
})
