import React, {PureComponent} from 'react';
import {connect} from 'react-redux';

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

        this.props.getMovie(match.params.id);
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

const mapDispatchToProps = dispatch => {
    return {
        getMovie: (id) => dispatch(getMovie(id)),
        dispatch
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetailsPage);

