import {
    MOVIE_API_URL,
    UPDATE_MOVIE
} from '../../constants';

const axios = require('axios').default;

export function showMovie(data) {
    return {
        type: UPDATE_MOVIE,
        movie: data
    }
}

export function getMovie(id) {
    return function(dispatch) {
        return axios
            .get(`${MOVIE_API_URL}/${id}`)
            .then(function (response = {}) {
                dispatch(showMovie(response.data))
            })
            .catch(error => console.log(error));
    }
}
