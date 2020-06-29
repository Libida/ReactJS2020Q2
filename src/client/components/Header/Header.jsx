import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

import {Image, Img} from '../Image';

const StyledImage = styled(Image)`
    ${Img} {
        max-width: 100px;
    }
`;

export default function Header(props) {
    return(
        <header className="header jumbotron pb-5 pt-5 mb-0">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <Link to="/">
                            <StyledImage src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
                                         title="Netflix"/>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}
