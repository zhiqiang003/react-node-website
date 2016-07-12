import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Layout extends Component {
    static init(Component) {
        ReactDOM.render(<Component />, document.getElementById('app'));
    }

    render() {
        return <div>123</div>;
    }
}
