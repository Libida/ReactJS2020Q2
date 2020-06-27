import React from 'react';
import {hydrate} from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

import App from './index';
import configureStore from './store';

const store = configureStore(window.INIT_STATE);

const root = (
    <App
        Router={BrowserRouter}
        store={store}
    />
);

hydrate(root, document.getElementById('root'));
