import './style.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { MovieDetailsView } from './views/MovieDetailsView';
import { MoviesListingView } from './views/MoviesListingView';

ReactDOM.render(<MoviesListingView/>, document.getElementById('root1'));
ReactDOM.render(<MovieDetailsView/>, document.getElementById('root2'));
