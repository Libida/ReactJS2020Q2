import React, {Fragment} from 'react';
import './ButtonGroup.scss';
import PropTypes from 'prop-types';

function ButtonGroup({id, groupArray, handler, selectedValue, incomeClasses, isDisabled}) {
    let buttonGroupItems = groupArray.map((btnToggle, index) => {
        const text = btnToggle.text || '';
        const value = btnToggle.value || text || '';
        const textLowerCase = text.toLowerCase();
        const valueLowerCase = value.toLowerCase();
        const isChecked = selectedValue ? (selectedValue.toLowerCase() === valueLowerCase) : (index === 0);
        const idPostfix = `${id}-${index}`;

        return (
            <label className={`btn btn-secondary ${isChecked ? 'active' : ''} ${isDisabled ? 'disabled' : ''}`}
                   key={text.replace(/\s/g, '_')} id={`label-${idPostfix}`}>
                <input type="radio" onClick={handler} name={id} id={idPostfix} value={valueLowerCase} defaultChecked={isChecked} disabled={isDisabled}/>
                {textLowerCase}
            </label>
        );
    });

    return (
        <Fragment>
            <input type="hidden" name={id} value={selectedValue} />
            <div className={`btn-group btn-group-toggle ${incomeClasses}`} id={id}>
                {buttonGroupItems}
            </div>
        </Fragment>
    );
};

ButtonGroup.propsType = {
    id: PropTypes.string,
    groupArray: PropTypes.array,
    handler: PropTypes.func,
    selectedValue: PropTypes.string,
    incomeClasses: PropTypes.string,
};

ButtonGroup.defaultProps = {
    selectedValue: '',
    incomeClasses: '',
    handler: () => {}
};

export default React.memo(ButtonGroup, (props1, props2) =>
    (props1.id === props2.id &&
        props1.selectedValue === props2.selectedValue &&
            props1.isDisabled === props2.isDisabled));

