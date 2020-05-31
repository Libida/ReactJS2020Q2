import './style.scss';
import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import MovieDetailsPage from './pages/MovieDetailsPage';
import MoviesListingPage from './pages/MoviesListingPage';
import {rootReducer} from './reducers';

const store = createStore(
    rootReducer,
    applyMiddleware(thunkMiddleware)
);

render(
    <Provider store={store}>
        <MovieDetailsPage />
        <MoviesListingPage />
    </Provider>,
    document.getElementById('root')
);
