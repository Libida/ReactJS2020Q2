import {
    UPDATE_MOVIES,
    UPDATE_SEARCH_BY,
    UPDATE_SEARCH_TERM,
    UPDATE_SORT_BY
} from '../../constants';
import {getMoviesSearchURL} from '../../utils/urls';

const axios = require("axios");

function fetchMoviesInner(params) {
    const url = getMoviesSearchURL(params);

    return axios(url);
}

function fetchMovies(params) {
    return fetchMoviesInner(params)
        .catch(error => console.log(error));
}

export function updateMovies(params) {
    return function (dispatch) {
        return fetchMovies(params).then(data => {
            dispatch(showMovies(data));
        });
    };
}

function showMovies(data = {}) {
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
};

export function updateSortByAsync(sortBy) {
    return function (dispatch) {
        dispatch(updateSortBy(sortBy));
        return Promise.resolve();
    }
};

export function updateSearchBy(searchBy) {
    return {
        type: UPDATE_SEARCH_BY,
        payload: searchBy
    };
}
