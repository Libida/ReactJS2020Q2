import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

function Button({type, text, incomeClasses, isDisabled}) {
    return (
        <button type={type} className={`btn ${incomeClasses}`} disabled={isDisabled}>{text}</button>
    );
}

Button.propsType = {
    type: PropTypes.string,
    text: PropTypes.string,
    incomeClasses: PropTypes.string,
    isDisabled: PropTypes.bool,
};

Button.defaultProps = {
    type: 'button',
    incomeClasses: '',
};

export default React.memo(Button);
