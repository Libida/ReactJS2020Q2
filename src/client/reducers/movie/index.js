import {UPDATE_MOVIE} from '../../constants';

const initialState = {
    movie: {}
};

export const movieReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case UPDATE_MOVIE:
            return {
                ...state,
                movie: action.movie
            };
        default:
            return state
    }
};
