import React from 'react';
import { getMovieYear, getMovieGenresString } from './movie-props';
import { NO_MOVIE_YEAR } from '../../constants';

describe('Movie Props util', () => {
    describe('getMovieYear()', () => {
        it('have default year in case of empty value', () => {
            expect(getMovieYear({})).toBe(NO_MOVIE_YEAR);
        });

        it('have default year in case of empty value', () => {
            expect(getMovieYear({
                'release_date': '2015-07-28'
            })).toBe('2015');
        });
    });

    describe('getMovieGenresString()', () => {
        it('should return a string of genres', () => {
            expect(getMovieGenresString({
                genres: [
                    'Drama',
                    'Adventure'
                ]
            })).toBe('Drama,Adventure');
        });
    });
});
