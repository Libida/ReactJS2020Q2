import React, { PureComponent } from 'react';
import { MovieDetails } from '../../components/MovieDetails';
import { data } from '../../data/movie.json';

export class MovieDetailsView extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
            movie: data || {},
        };
    }

    static getDerivedStateFromError(error) {
        return {hasError: true};
    }

    render() {
        if (this.state.hasError) {
            return <h1>Something went wrong.</h1>;
        }

        return (
            <div className="container">
                <MovieDetails movie={ this.state.movie }/>
            </div>
        );
    }
}
