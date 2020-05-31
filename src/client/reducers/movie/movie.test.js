import {UPDATE_MOVIE} from "../../constants";
import {movieReducer} from "../movie";
import mockMovie from "../../mocks/movie";

describe("Movie Reducer", () => {
    it("has a default state", () => {
        expect(movieReducer(undefined, {type: "unexpected"})).toEqual({"movie": {"id": mockMovie.id}});
    });

    it(`Can handle ${UPDATE_MOVIE}`, () => {
        expect(movieReducer(undefined, {
            type: UPDATE_MOVIE,
            movie: mockMovie
        }));
    })
});
