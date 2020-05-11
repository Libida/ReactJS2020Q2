import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

function ButtonFunc({type, text, incomeClasses, isDisabled}) {
    return (
        <button type={type} className={`btn ${incomeClasses}`} disabled={isDisabled}>{text}</button>
    );
}

ButtonFunc.propsType = {
    type: PropTypes.string,
    text: PropTypes.string,
    incomeClasses: PropTypes.string,
    isDisabled: PropTypes.bool,
};

ButtonFunc.defaultProps = {
    type: 'button',
    incomeClasses: '',
};

export const Button = React.memo(ButtonFunc);
