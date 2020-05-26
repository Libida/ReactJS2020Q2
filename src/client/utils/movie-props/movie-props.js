import { NO_MOVIE_YEAR } from '../../constants';

export const getMovieYear = (movie = {}) => {
    const {release_date = NO_MOVIE_YEAR} = movie;

    return (release_date === NO_MOVIE_YEAR) ? NO_MOVIE_YEAR : release_date.substring(0, 4);
};

export const getMovieGenresString = (movie = {})  => {
    const {genres = []} = movie;

    return genres.toString();
};
