import {
    UPDATE_MOVIES,
    UPDATE_SEARCH_BY,
    UPDATE_SEARCH_TERM,
    UPDATE_SORT_BY,
    RESET_SEARCH
} from '../../constants';
import {getMoviesSearchURL} from '../../utils/urls';

const axios = require('axios').default;

export function updateMovies(params) {
    return function (dispatch) {
        return axios.get(getMoviesSearchURL(params))
            .catch(error => console.log(error))
            .then(data => {
                dispatch(showMovies(data));
            });
    };
}

export function showMovies(data = {}) {
    return {
        type: UPDATE_MOVIES,
        payload: data.data
    };
}

export function updateSearchTerm(searchTerm) {
    return {
        type: UPDATE_SEARCH_TERM,
        payload: searchTerm
    };
}

export function updateSortBy(sortBy) {
    return {
        type: UPDATE_SORT_BY,
        payload: sortBy
    };
}

export function updateSortByAsync(sortBy) {
    return function (dispatch) {
        dispatch(updateSortBy(sortBy));
        return Promise.resolve();
    }
}

export function resetMoviesSearch() {
    return {
        type: RESET_SEARCH
    };
}

export function updateSearchBy(searchBy) {
    return {
        type: UPDATE_SEARCH_BY,
        payload: searchBy
    };
}
