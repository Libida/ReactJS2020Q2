import {
    AMOUNT_OF_ITEMS_PER_PAGE,
    MOVIE_API_URL, SORT_ORDER_PARAM_TEXT, SORT_ORDER_VALUE
} from '../../constants';

export const getMoviesSearchURL = (params = {}) => {
    const queryParams = getMoviesSearchQuery(params);

    return `${MOVIE_API_URL}${queryParams}`;
};

export const getMoviesSearchQuery = (params = {}) => {
    const esc = encodeURIComponent;
    const fullParams = {
        ...params,
        [SORT_ORDER_PARAM_TEXT]: SORT_ORDER_VALUE,
        limit: AMOUNT_OF_ITEMS_PER_PAGE
    };
    const queryParams = Object.keys(fullParams)
        .map(k => esc(k) + '=' + esc(fullParams[k]))
        .join('&');

    return queryParams ? `?${queryParams}` : ''
};

