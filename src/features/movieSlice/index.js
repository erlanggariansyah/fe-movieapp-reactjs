import { createSlice } from "@reduxjs/toolkit";
import data from "../../utils/constants/data";

const movieSlice = createSlice({
    name: "Movies Slice",
    initialState: {
        movies: data
    },
    reducers: {
        addMovie(state, action) {
            state.movies.push(action.payload)
        },
        updateMovie(state, action) {
            state.movies = action.payload;
        }
    }
})

const { actions, reducer } = movieSlice;
const { addMovie, updateMovie } = actions;

export default reducer;
export { addMovie, updateMovie }
