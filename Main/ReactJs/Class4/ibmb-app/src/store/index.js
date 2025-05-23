import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './CounterStore'
import watchListReducer from './WatchListStore'
import movieListReducer from './MovieList'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    watchlist: watchListReducer,
    movielist : movieListReducer,
  },
})