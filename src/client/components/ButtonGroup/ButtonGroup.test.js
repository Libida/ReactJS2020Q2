import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {ButtonGroup} from './index';
import {GENRE_TEXT, SEARCH_BY_DEFAULT_VALUE, SEARCH_BY_PARAM_TEXT, TITLE_TEXT} from '../../constants';

configure({ adapter: new Adapter() });

describe('ButtonGroup component', () => {
    const buttonGrp = shallow(<ButtonGroup groupArray={[{text: TITLE_TEXT}, {text: GENRE_TEXT}]}
                                           id={SEARCH_BY_PARAM_TEXT} handler={() => ('Change was triggered')}
                                           selectedValue={SEARCH_BY_DEFAULT_VALUE} />);

    it('should be rendered properly with passed groupArray', () => {
        expect(buttonGrp.find('.btn-secondary:first-child').text()).toEqual(TITLE_TEXT);
    });
});
