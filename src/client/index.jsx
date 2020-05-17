import './style.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { MovieDetailsView } from './pages/MovieDetailsPage';
import { MoviesListingView } from './pages/MoviesListingPage';

ReactDOM.render(<MoviesListingView/>, document.getElementById('root1'));
ReactDOM.render(<MovieDetailsView/>, document.getElementById('root2'));
