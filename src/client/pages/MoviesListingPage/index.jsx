import React, { PureComponent } from 'react';
import {connect} from 'react-redux';
import {
    updateMovies,
    updateSearchBy,
    updateSearchTerm,
    updateSortByAsync,
} from '../../actions/movies';
import { Movies } from '../../components/Movies';
import { Search } from '../../components/Search';
import {
    SEARCH_BY_DEFAULT_VALUE,
    SEARCH_BY_PARAM_TEXT,
    SEARCH_TERM_PARAM_TEXT, SORT_BY_DEFAULT_VALUE,
    SORT_BY_PARAM_TEXT
} from '../../constants';

class MoviesListingPage extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        };
    }

    componentDidMount() {
        this.handleFullSearch();
    }

    handleSearchTerm(target) {
        this.props.dispatch(updateSearchTerm(target));
    }

    handleSearchBy(target) {
        this.props.dispatch(updateSearchBy(target));
    }

    handleSortBy(target) {
        this.props.dispatch(updateSortByAsync(target)).then(() => {
            this.handleFullSearch();
        });
    }

    handleFullSearch() {
        this.props.dispatch(updateMovies(this.getParamsForActions()));
    }

    getParamsForActions() {
        const {searchTerm, searchBy, sortBy} = this.props;

        return {
            [SEARCH_TERM_PARAM_TEXT]: searchTerm,
            [SEARCH_BY_PARAM_TEXT]: searchBy || SEARCH_BY_DEFAULT_VALUE,
            [SORT_BY_PARAM_TEXT]: sortBy || SORT_BY_DEFAULT_VALUE
        };
    }

    static getDerivedStateFromError(error) {
        return {
            hasError: true
        };
    }

    render() {
        const {movies, searchTerm, searchBy, sortBy} = this.props;
        const {hasError} = this.state;

        if (hasError) {
            return <h1>Something went wrong.</h1>;
        }

        return (
            <>
                <Search
                    handleFullSearch={this.handleFullSearch.bind(this)}
                    handleSortBy={this.handleSortBy.bind(this)}
                    handleSearchBy={this.handleSearchBy.bind(this)}
                    handleSearchTerm={this.handleSearchTerm.bind(this)}
                    movies={movies}
                    searchTerm={searchTerm}
                    searchBy={searchBy}
                    sortBy={sortBy}
                />
                <Movies movies={movies} />
            </>
        );
    }
}

const mapStateToProps = (state) => {
    const { moviesListing } = state;
    const { movies, searchBy, sortBy, searchTerm } = moviesListing;

    return {
        movies,
        searchBy,
        sortBy,
        searchTerm
    }
};

export default connect(mapStateToProps)(MoviesListingPage);
