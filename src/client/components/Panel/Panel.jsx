import React from "react";
import PropTypes from 'prop-types';
import "./Panel.scss";
import { ButtonGroup } from "../ButtonGroup";
import {
    RELEASE_DATE_TEXT,
    RATING_TEXT,
    RELEASE_DATE_VALUE,
    SORT_ORDER_VALUE,
    SORT_ORDER_PARAM_TEXT, SORT_BY_PARAM_TEXT, RATING_VALUE
} from "../../constants";

export function Panel({sortBy, movies, handleSortBy}) {
    const handlerSortBy = (event) => {
        handleSortBy(event.target.value, movies);
    };

    return(
        <div className="row mt-5 align-items-center">
            <div className="col-12 col-sm-6">
                <h2 className="h5 mb-0">Movies found: {movies.length}</h2>
            </div>
            <div className="col-12 col-sm-6">
                <input type="hidden" name={SORT_ORDER_PARAM_TEXT} value={SORT_ORDER_VALUE} />
                <ButtonGroup groupArray={[{text: RELEASE_DATE_TEXT, value: RELEASE_DATE_VALUE}, {text: RATING_TEXT, value: RATING_VALUE}]}
                             incomeClasses="panel-sort-by"
                             id={SORT_BY_PARAM_TEXT} handler={handlerSortBy} selectedValue={sortBy}/>
            </div>
        </div>
    );
}

Panel.propsType = {
    sortBy: PropTypes.string,
    movies: PropTypes.object,
    handleSortBy: PropTypes.func,
};

Panel.defaultProps = {
    movies: {},
};
