import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import {updateSearchTerm, updateSortByAsync, updateMovies} from './index';
import {UPDATE_SEARCH_TERM, UPDATE_SORT_BY, SORT_BY_DEFAULT_VALUE, UPDATE_MOVIES, MOVIE_API_URL} from '../../constants';
import moviesMock from '../../mocks/movies';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const mockAxios = new MockAdapter(axios);

describe('movies', () => {
    describe('sync actions', () => {
        it('should create an action to update search term', () => {
            const searchTerm = 'green';
            const expectedAction = {
                type: UPDATE_SEARCH_TERM,
                payload: searchTerm
            };

            expect(updateSearchTerm(searchTerm)).toEqual(expectedAction)
        });
    });

    describe('async actions', () => {
        it('async action to update sort by should work correctly', () => {
            const store = mockStore({ moviesListing: {} });

            store.dispatch(updateSortByAsync(SORT_BY_DEFAULT_VALUE)).then(() => {
                expect(store.getActions()).toEqual([{
                    type: UPDATE_SORT_BY,
                    payload: SORT_BY_DEFAULT_VALUE
                }])
            });
        });

        it('creates UPDATE_MOVIES when updateMovies has been done', () => {
            var mock = new MockAdapter(axios);
            mock.onGet(`${MOVIE_API_URL}?sortOrder=desc&limit=12`, {headers: { 'content-type': 'application/json' }}).reply(200, {
                moviesMock
            });

            const store = mockStore({ moviesListing: {} });

            return store.dispatch(updateMovies()).then(() => {
                // return of async actions
                expect(store.getActions()[0].type).toEqual(UPDATE_MOVIES)
            })
        });
    });
});
