import './style.scss';
import React from 'react';
import {hydrate} from 'react-dom';
import {Provider} from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import {createStore, applyMiddleware, compose} from 'redux';
import {rootReducer} from './reducers';
import {getRoutes} from './routes';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware(thunkMiddleware)
    )
);

const routes = getRoutes(store);

hydrate(
    <Provider store={store}>
        {routes}
    </Provider>,
    document.getElementById('root')
);
