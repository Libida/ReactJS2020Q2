import './style.scss';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import storage from 'redux-persist/lib/storage';
import MovieDetailsPage from './pages/MovieDetailsPage';
import MoviesListingPage from './pages/MoviesListingPage';
import {rootReducer} from './reducers';

const persistConfig = {
    key: 'root',
    storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(
    persistedReducer,
    applyMiddleware(thunkMiddleware)
);

const persistor = persistStore(store);

render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <MovieDetailsPage />
            <MoviesListingPage />
        </PersistGate>
    </Provider>,
    document.getElementById('root')
);
