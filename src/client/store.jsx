import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {rootReducer} from './reducers';
import createMemoryHistory from 'history/createMemoryHistory';

export const history = createMemoryHistory();

export default (initialState) => {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunkMiddleware)
    );
};
