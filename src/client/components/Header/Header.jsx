import React from 'react';
import {Link} from 'react-router-dom';

import './Header.scss';
import {Image} from '../Image';

export default function Header(props) {
    return(
        <header className="header jumbotron pb-5 pt-5 mb-0">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <Link to="/">
                            <Image src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" title="Netflix"
                                   incomeWrapClasses="header__logo"/>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}
