import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {createBrowserHistory, createMemoryHistory} from 'history';
import {syncHistoryWithStore} from 'react-router-redux';

import {Header} from './../components/Header';
import {MovieDetailsPage} from './../pages/MovieDetailsPage';
import {MoviesListingPage} from './../pages/MoviesListingPage';
import {NotFound} from './../pages/NotFound';

export const routes = [
    {
        path: '/',
        exact: true,
        component: (props) => <MoviesListingPage isHome={true} {...props} />
    },
    {
        path: '/search',
        component: MoviesListingPage
    },
    {
        path: '/film/:id',
        component: MovieDetailsPage
    },
    {
        path: '/404',
        component: NotFound
    },
    {
        component: () => <Redirect to='/404'/>
    }
];

function RouteWithSubRoutes(route) {
    return (
        <Route
            path={route.path}
            render={props => (
                <route.component {...props} routes={route.routes} />
            )}
        />
    );
}

const getRoutes = ({Router, store, context, location}) => {
    const browserHistory = process.env.BROWSER ? createBrowserHistory() : createMemoryHistory();
    const history = syncHistoryWithStore(browserHistory, store);

    return (
        <Router history={history} context={context} location={location}>
            <Header/>
            <Switch>
                {routes.map((route, i) => (
                    <RouteWithSubRoutes key={i} {...route} />
                ))}
            </Switch>
        </Router>
    );
};

export default getRoutes;
