import React from 'react';
import {Router, Switch, Route, Redirect} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { syncHistoryWithStore } from 'react-router-redux';

import { Header } from './../components/Header';
import {MovieDetailsPage} from './../pages/MovieDetailsPage';
import {MoviesListingPage} from './../pages/MoviesListingPage';
import {NotFound} from './../pages/NotFound';

const getRoutes = (store) => {
    const browserHistory = createBrowserHistory();
    const history = syncHistoryWithStore(browserHistory, store);

    return (
        <Router history={history}>
            <Header/>
            <Switch>
                <Route path="/" exact render={(props) => <MoviesListingPage isHome={true} {...props} />}/>
                <Route path="/search" component={MoviesListingPage}/>
                <Route path="/film/:id" component={MovieDetailsPage}/>
                <Route path="/404" component={NotFound}/>
                <Redirect to="/404"/>
            </Switch>
        </Router>
    );
};

export default getRoutes;
