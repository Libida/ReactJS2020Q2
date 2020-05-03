/* eslint-disable */
import React, {
    Component,
    PureComponent,
    Fragment,
    createElement,
} from 'react';
import { render } from 'react-dom';

const greeting = 'Hello World';

// 2. React.Component
class HelloComponent extends Component {
    render() {
        return <h2>{greeting} from {this.props.from}</h2>;
    };
}

// 3. React.PureComponent
class HelloPureComponent extends PureComponent {
    render() {
        return <h3>{greeting} from {this.props.from}</h3>;
    };
}

// 4. Functional components
function HelloFunctionalComponent({from}) {
    return <h4>{greeting} from {from}</h4>;
}

// 1. React.CreateElement
render(
    createElement(HelloComponent, {from: 'React.createElement'}, null),
    document.getElementById('root1')
);

render(
    <Fragment>
        <HelloComponent from='React.Component'/>
        <HelloPureComponent from='Pure Component'/>
        <HelloFunctionalComponent from='Functional Component'/>
    </Fragment>,
    document.getElementById('root2')
);
