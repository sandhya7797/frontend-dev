import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './CounterStore'
import watchListReducer from './WatchListStore'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    watchlist: watchListReducer,
  },
})