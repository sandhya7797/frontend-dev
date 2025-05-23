import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    movies : [],
    totalPages: 0,
}

export const movieListSlice = createSlice({
    name: 'movielist',
    initialState,
    reducers: {
        setMovies: (state, action) => {
            state.movies = action.payload; 
        },
        setTotalPages: (state, action) => {
            state.totalPages = action.payload; 
        }
    },
})

// Action creators are generated for each case reducer function
export const { setMovies, setTotalPages } = movieListSlice.actions;

export default movieListSlice.reducer;