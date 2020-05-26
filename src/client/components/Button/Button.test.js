import React from 'react';
import renderer from 'react-test-renderer';
import {Button} from './Button';

describe('Button component', () => {
    const component = renderer.create(
        <Button text="Search" />
    );

    let tree = component.toJSON();

    it('should be rendered properly with default props', () => {
        expect(tree).toMatchSnapshot();
    });

    it('should be rendered properly if disabled', () => {
        tree.props.isDisabled = 'true';
        expect(tree).toMatchSnapshot();
    });

    it('should be rendered properly with different type', () => {
        tree.props.type = 'submit';
        expect(tree).toMatchSnapshot();
    });

    it('should be rendered properly with additional classes', () => {
        tree.props.incomeClasses = 'btn-primary';
        expect(tree).toMatchSnapshot();
    });
});
