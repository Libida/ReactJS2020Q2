import React from 'react';
import { Input } from '../Input';
import { Button } from '../Button';
import { ButtonGroup } from '../ButtonGroup';
import { Panel } from '../Panel';
import {
    TITLE_TEXT,
    GENRE_TEXT,
    SEARCH_BY_PARAM_TEXT,
    SEARCH_TERM_PARAM_TEXT
} from '../../constants';
import PropTypes from 'prop-types';

export function Search({movies, searchTerm, searchBy, sortBy, handleSearchTerm, handleSearchBy, handleSortBy, handleFullSearch}) {
    const handlerSearchTerm = (event) => {
        handleSearchTerm(event.target.value);
    };

    const handlerSearchBy = (event) => {
        handleSearchBy(event.target.value);
    };

    const handlerSortBy = (target) => {
        handleSortBy(target);
    };

    const handlerFullSearch = (event) => {
        event.preventDefault();
        handleFullSearch(movies);
    };

    return (
        <div className="jumbotron pt-0 pb-5">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <form onSubmit={handlerFullSearch}>
                            <div className="row form-group">
                                <div className="col-12 col-lg-10">
                                    <h1 className="display-5">Find your movie</h1>
                                </div>
                            </div>
                            <div className="row form-group">
                                <div className="col-12 col-lg-10 mb-2">
                                    <Input incomeClasses="form-control-lg" text={searchTerm} handler={handlerSearchTerm}
                                           id={SEARCH_TERM_PARAM_TEXT}/>
                                </div>
                                <div className="col-12 col-lg-2">
                                    <Button text="Search" type="submit" incomeClasses="btn-primary btn-lg w-100"
                                            isDisabled={!searchTerm}/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-12">
                                    <ButtonGroup groupArray={[{text: TITLE_TEXT}, {text: GENRE_TEXT}]}
                                                 id={SEARCH_BY_PARAM_TEXT} handler={handlerSearchBy}
                                                 selectedValue={searchBy}/>
                                </div>
                            </div>

                            <Panel movies={movies} sortBy={sortBy} handleSortBy={handlerSortBy} />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

Search.propsType = {
    movies: PropTypes.object,
    searchTerm: PropTypes.string,
    searchBy: PropTypes.string,
    sortBy: PropTypes.string,
    handleSearchTerm: PropTypes.func,
    handleSearchBy: PropTypes.func,
    handleSortBy: PropTypes.func,
    handleFullSearch: PropTypes.handleFullSearch,
};

Search.defaultProps = {
    movies: {},
};
