import {showMovie} from './index';
import {UPDATE_MOVIE} from '../../constants';
import mockMovie from '../../mocks/movie';

describe('actions', () => {
    it('should create an action to show movie', () => {
        const expectedAction = {
            type: UPDATE_MOVIE,
            movie: mockMovie
        };

        expect(showMovie(mockMovie)).toEqual(expectedAction)
    })
});
