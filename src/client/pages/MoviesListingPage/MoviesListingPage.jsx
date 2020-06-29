import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {createSelector} from 'reselect';

import {
    updateMovies,
    updateSearchBy,
    updateSearchTerm,
    updateSortByAsync,
    updateSortBy,
    resetMoviesSearch
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
        const {isHome} = this.props;

        if (!isHome) {
            this.showMovies();
        } else {
            this.props.resetMoviesSearch();
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const {isHome} = this.props;

        // On Home return everything to initial empty state
        if (isHome && (isHome !== prevProps.isHome)) {
            this.props.resetMoviesSearch();
        }
    }

    handleSearchTerm = (target) => {
        this.props.updateSearchTerm(target);
    }

    handleSearchBy = (target) => {
        this.props.updateSearchBy(target);
    }

    handleSortBy = (target) => {
        const {location} = this.props;
        let params = new URLSearchParams(location.search);

        params.set(SORT_BY_PARAM_TEXT, target);
        this.props.updateSortByAsync(target).then(() => {
            this.handleFullSearch(params);
        });
    }

    handleFullSearch = (params) => {
        const {history} = this.props;

        history.push({
            pathname: '/search',
            search: new URLSearchParams(params).toString()
        });

        this.showMovies();
    }

    showMovies() {
        this.props.updateMovies(this.getParamsForActions());
    }

    getParamsForActions() {
        const {searchTerm, searchBy, sortBy} = this.props;

        return {
            [SEARCH_TERM_PARAM_TEXT]: searchTerm,
            [SEARCH_BY_PARAM_TEXT]: searchBy,
            [SORT_BY_PARAM_TEXT]: sortBy
        };
    }

    static getDerivedStateFromError(error) {
        return {
            hasError: true
        };
    }

    render() {
        const {movies, searchTerm, searchBy, sortBy, isHome} = this.props;
        const {hasError} = this.state;

        if (hasError) {
            return <h1>Something went wrong.</h1>;
        }

        return (
            <>
                <Search
                    handleFullSearch={this.handleFullSearch}
                    handleSortBy={this.handleSortBy}
                    handleSearchBy={this.handleSearchBy}
                    handleSearchTerm={this.handleSearchTerm}
                    movies={movies}
                    searchTerm={searchTerm}
                    searchBy={searchBy}
                    sortBy={sortBy}
                    isSearchByDisabled={isHome}
                />
                <Movies movies={movies} />
            </>
        );
    }
}

const getMovies = (state, ownProps) => state.moviesListing.movies;
const getSearchBy = (state, ownProps) => state.moviesListing.searchBy;
const getSortBy = (state, ownProps) => state.moviesListing.sortBy;
const getSearchTerm = (state, ownProps) => state.moviesListing.searchTerm;
const getLocation = (state, ownProps) => ownProps.location.search;

const getMoviesProps = createSelector(
    [getMovies, getSearchBy, getSortBy, getSearchTerm, getLocation],
    (movies, searchBy, sortBy, searchTerm, queryString) => {
        const params = new URLSearchParams(queryString);

        return {
            movies,
            searchBy: searchBy || params.get(SEARCH_BY_PARAM_TEXT) || SEARCH_BY_DEFAULT_VALUE,
            sortBy: sortBy || params.get(SORT_BY_PARAM_TEXT) || SORT_BY_DEFAULT_VALUE,
            searchTerm: searchTerm || params.get(SEARCH_TERM_PARAM_TEXT) || '',
        }
    }
)

const mapStateToProps = (state, ownProps) => {
    return {
        ...getMoviesProps(state, ownProps)
    }
};

const mapDispatchToProps = {
    resetMoviesSearch,
    updateMovies,
    updateSortBy,
    updateSortByAsync,
    updateSearchBy,
    updateSearchTerm,
};

export default connect(mapStateToProps, mapDispatchToProps)(MoviesListingPage);
