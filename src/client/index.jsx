import React from 'react';
import {Provider} from 'react-redux';
import {hot} from 'react-hot-loader';
import {getRoutes} from './routes';

const Root = ({ Router, location, context, store}) => {
    const routes = getRoutes({Router, store, context, location});

    return (
        <Provider store={store}>
            {routes}
        </Provider>
    );
}

export default hot(module)(Root);
