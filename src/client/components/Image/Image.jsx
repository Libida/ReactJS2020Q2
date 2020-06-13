import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './Image.scss';

const NO_IMG_URL = 'https://sciences.ucf.edu/psychology/wp-content/uploads/sites/63/2019/09/No-Image-Available.png';

class Image extends Component {
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
        const {alt, title, incomeClasses, incomeWrapClasses} = this.props;

        return (
            <span className={`img-wrap ${incomeWrapClasses}`}>
                <img src={src} alt={alt || title} title={title}
                     className={`img ${incomeClasses}`} onError={this.updateImgOnError.bind(this)}/>
            </span>
        );
    }
};

export default Image;
