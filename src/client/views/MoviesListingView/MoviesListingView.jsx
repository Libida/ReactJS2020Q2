import React, { PureComponent } from 'react';
import { Movies } from '../../components/Movies';
import { Search } from '../../components/Search';
import {data} from '../../data/movies.json';
import { SORT_BY_DEFAULT_VALUE, SEARCH_BY_DEFAULT_VALUE }from '../../constants';

export class MoviesListingView extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            movies: data || [],
            searchTerm: '',
            searchBy: SEARCH_BY_DEFAULT_VALUE,
            sortBy: SORT_BY_DEFAULT_VALUE,
            sortOrder: '',
            hasError: false
        };
    }

    handleSearchTerm(target) {
        this.setState({
            searchTerm: target
        });
    }

    handleSearchBy(target) {
        this.setState({
            searchBy: target
        });
    }

    handleSortBy(target) {
        this.setState({
            sortBy: target
        });
    }

    handleFullSearch(event) {
        // TODO: in next labs
    }

    static getDerivedStateFromError(error) {
        return {
            hasError: true
        };
    }

    render() {
        const {hasError, movies, searchTerm, searchBy, sortBy} = this.state;

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
