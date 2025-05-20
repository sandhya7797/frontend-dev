import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './CounterStore'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})