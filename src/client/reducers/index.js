import { combineReducers } from "redux";
import { movieReducer } from "./movie";
import { moviesReducer } from "./movies";

export const rootReducer = combineReducers({
    moviesListing: moviesReducer,
    movieDetails: movieReducer,
});
