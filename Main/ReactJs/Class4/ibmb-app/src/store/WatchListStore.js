import { createSlice } from '@reduxjs/toolkit'

const initialState = [];//to maintain list of objects ({id:movie_id,movie:movie})

export const watchListSlice = createSlice({
    name: 'watchlist',
    initialState,
    reducers: {
        setWatchList: (state, action) => {
            return action.payload; // Replace the watchlist with the new array
        },
        addToWatchList: (state, action) => {
            state.push(action.payload); // Add a new movie object
        },
        removeFromWatchList: (state, action) => {
            return state.filter(item => item.id !== action.payload); // Remove by id
        },
    },
})

// Action creators are generated for each case reducer function
export const { setWatchList, addToWatchList, removeFromWatchList } = watchListSlice.actions

export default watchListSlice.reducer