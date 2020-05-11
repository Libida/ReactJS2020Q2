import React from 'react';
import PropTypes from 'prop-types';
import './MoviesListingItem.scss';
import { Image } from '../Image';
import { MovieYear } from '../MovieYear';
import { NO_MOVIE_TITLE } from '../../constants';

export function MovieListingItem({movie}) {
    const {id, title = NO_MOVIE_TITLE, release_date = '', poster_path} = movie;

    return (
        <div className="card mb-4 shadow-sm movie-listing-item">
            <a href="#" className="movie-listing-item__link">
                <Image src={poster_path} title={title} incomeClasses="movie-listing-item__img card-img-top"
                       incomeWrapClasses="movie-listing-item__img-wrap"/>
                <div className="card-body">
                    <h3>{title}</h3>
                    <MovieYear movie={movie}/>
                </div>
            </a>
        </div>
    );
}

MovieListingItem.propsType = {
    movie: PropTypes.object,
};
