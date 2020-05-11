import React from 'react';
import PropTypes from 'prop-types';
import {getMovieYear} from '../../utils/movie-props';

export function MovieYear({movie, className}) {
    const {release_date = ''} = movie;

    return (
        <time dateTime={release_date} className={className}>{getMovieYear(movie)}</time>
    );
}

MovieYear.propsType = {
    movie: PropTypes.object,
    className: PropTypes.string,
};

MovieYear.defaultProps = {
    movie: {},
    className: '',
};
