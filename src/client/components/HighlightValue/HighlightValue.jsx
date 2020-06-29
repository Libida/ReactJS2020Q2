import React from 'react';
import './HighlightValue.scss';
import PropTypes from 'prop-types';

function HighlightValue({value, afterValue, className}) {
    return (
        <span className={`highlight-value ${className}`}>
            <span className="highlight-value__value">
                {value}
            </span>
            <span className="highlight-value__after-value">
                {afterValue}
            </span>
        </span>
    );
}

HighlightValue.propsType = {
    value: PropTypes.string,
    afterValue: PropTypes.string,
    className: PropTypes.string,
};

HighlightValue.defaultProps = {
    className: '',
};

export default HighlightValue;
