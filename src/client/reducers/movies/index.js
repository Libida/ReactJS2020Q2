import {
    UPDATE_MOVIES,
    UPDATE_SEARCH_TERM,
    UPDATE_SEARCH_BY,
    UPDATE_SORT_BY,
    RESET_SEARCH,
    SEARCH_BY_DEFAULT_VALUE,
    SORT_BY_DEFAULT_VALUE,
    SORT_ORDER_VALUE
} from '../../constants';

const initialState = {
    movies: [],
    moviesAmount: 0,
    searchTerm: '',
    searchBy: SEARCH_BY_DEFAULT_VALUE,
    sortBy: SORT_BY_DEFAULT_VALUE,
    sortOrder: SORT_ORDER_VALUE
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
        case RESET_SEARCH:
            return {
                ...state,
                ...initialState
            };

        default:
            return state;
    }
};
