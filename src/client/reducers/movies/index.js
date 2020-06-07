import {
    UPDATE_MOVIES,
    SEARCH_BY_DEFAULT_VALUE,
    SORT_BY_DEFAULT_VALUE, UPDATE_SEARCH_TERM, UPDATE_SEARCH_BY, UPDATE_SORT_BY
} from '../../constants';

const initialState = {
    movies: [],
    moviesAmount: 0,
    searchTerm: "",
    searchBy: SEARCH_BY_DEFAULT_VALUE,
    sortBy: SORT_BY_DEFAULT_VALUE,
    sortOrder: ""
};

export const moviesReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case UPDATE_MOVIES:
            return Object.assign({}, state, {
                movies: action.payload.data,
                moviesAmount: action.payload.total,
            });
        case UPDATE_SEARCH_TERM:
            return Object.assign({}, state, {
                searchTerm: action.payload
            });
        case UPDATE_SEARCH_BY:
            return Object.assign({}, state, {
                searchBy: action.payload
            });
        case UPDATE_SORT_BY:
            return Object.assign({}, state, {
                sortBy: action.payload
            });
        default:
            return state;
    }
};
