import { createSlice } from '@reduxjs/toolkit'

// Function to save the state to localStorage
const saveStateToLocalStorage = (state) => {
    localStorage.setItem('watchlist', JSON.stringify(state));
};

// Function to load the state from localStorage (if temporary data exists)
const loadStateFromLocalStorage = () => {
    const savedState = localStorage.getItem('watchlist');
    if (savedState) {
        return JSON.parse(savedState);
    }
}

const initialState = loadStateFromLocalStorage()  || {};//Initialize with an empty object if no saved state is found

export const watchListSlice = createSlice({
    name: 'watchlist',
    initialState,
    reducers: {
        setWatchList: (state, action) => {
            saveStateToLocalStorage(state);
            return action.payload; // Replace the watchlist with the new array
        },
        // addToWatchList: (state, action) => {
        //     state.push(action.payload); // Add a new movie object
        // },
        // removeFromWatchList: (state, action) => {
        //     return state.filter(item => item.id !== action.payload); // Remove by id
        // },
    },
})

// Action creators are generated for each case reducer function
export const { setWatchList, addToWatchList, removeFromWatchList } = watchListSlice.actions

export default watchListSlice.reducer