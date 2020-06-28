import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const NO_IMG_URL = 'https://sciences.ucf.edu/psychology/wp-content/uploads/sites/63/2019/09/No-Image-Available.png';

const Wrapper = styled.div`
    display: block;
    position: relative;
    outline: none;
    width: 100%;
`;

export const Img = styled.img`
    max-width: 100%;
`;

export class Image extends Component {
    static propTypes = {
        src: PropTypes.string,
        alt: PropTypes.string,
        title: PropTypes.string,
        incomeClasses: PropTypes.string,
        incomeWrapClasses: PropTypes.string
    };

    static defaultProps = {
        incomeClasses: '',
        incomeWrapClasses: ''
    };

    constructor(props = {}) {
        super(props);
        this.state = {
            src: this.getSrc(props.src) || NO_IMG_URL
        };
    }

    updateImgOnError() {
        this.setState({
            src: NO_IMG_URL,
            forceUpdate: true
        });
    }

    static getDerivedStateFromProps(props, state) {
        if (state.forceUpdate) {
            return {
                src: state.src,
                forceUpdate: false,
            }
        }

        return {
            src: props.src || NO_IMG_URL
        }
    }

    getSrc(src) {
        return src || NO_IMG_URL;
    }

    render() {
        const {src} = this.state;
        const {alt, title, className} = this.props;

        return (
            <Wrapper className={className}>
                <Img src={src} alt={alt || title} title={title} onError={this.updateImgOnError.bind(this)} />
            </Wrapper>
        );
    }
};
