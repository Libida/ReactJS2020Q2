import {
    UPDATE_MOVIES, UPDATE_SEARCH_TERM, UPDATE_SEARCH_BY, UPDATE_SORT_BY
} from '../../constants';

const initialState = {
    movies: [],
    moviesAmount: 0,
    searchTerm: '',
    searchBy: '',
    sortBy: '',
    sortOrder: ''
};

export const moviesReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case UPDATE_MOVIES:
            return {
                ...state,
                movies: action.payload.data,
                moviesAmount: action.payload.total,
            };
        case UPDATE_SEARCH_TERM:
            return {
                ...state,
                searchTerm: action.payload
            };
        case UPDATE_SEARCH_BY:
            return {
                ...state,
                searchBy: action.payload
            };
        case UPDATE_SORT_BY:
            return {
                ...state,
                sortBy: action.payload
            };
        default:
            return state;
    }
};
