import React from 'react';
import ButtonGroup from './ButtonGroup';
import {GENRE_TEXT, SEARCH_BY_PARAM_TEXT, TITLE_TEXT} from '../../constants';

export default { title: 'ButtonGroup' };

export const defaultVariant = () => (
    <ButtonGroup groupArray={[{text: TITLE_TEXT}, {text: GENRE_TEXT}]}
                 id={SEARCH_BY_PARAM_TEXT} />
);

export const disabledVariant = () => (
    <ButtonGroup groupArray={[{text: TITLE_TEXT}, {text: GENRE_TEXT}]}
                 id={SEARCH_BY_PARAM_TEXT} isDisabled={true} />
);
