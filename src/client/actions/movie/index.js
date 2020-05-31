import {
    MOVIE_API_URL,
    UPDATE_MOVIE
} from "../../constants";

const axios = require("axios");

function fetchMovie(id) {
    const movieURL = `${MOVIE_API_URL}/${id}`;

    return axios(movieURL);
}

export function showMovie(data) {
    return {
        type: UPDATE_MOVIE,
        movie: data
    }
}

export function getMovie(id) {
    return function(dispatch) {
        return fetchMovie(id)
            .then(function (response = {}) {
                dispatch(showMovie(response.data))
            })
            .catch(error => console.log(error));
    }
}
