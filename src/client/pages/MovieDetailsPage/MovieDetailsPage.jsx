import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {get} from 'lodash';

import {MovieDetails} from '../../components/MovieDetails';
import {getMovie} from '../../actions/movie';

class MovieDetailsPage extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        };
    }

    componentDidMount() {
        const {match} = this.props;
        const movieId = get(match, 'params.id');

        this.props.getMovie(movieId);
    }

    static getDerivedStateFromError(error) {
        return {hasError: true};
    }

    render() {
        const { movie } = this.props;

        if (this.state.hasError) {
            return <h1>Something went wrong.</h1>;
        }

        return (
            <div className="container">
                <MovieDetails movie={movie}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const {movieDetails} = state;
    const {movie} = movieDetails;

    return {
        movie
    }
};

const mapDispatchToProps = {
    getMovie
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetailsPage);

