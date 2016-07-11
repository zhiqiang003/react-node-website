import React from 'react';
import ReactDOM from 'react-dom';

export default function createApp(Component) {
    ReactDOM.render(<Component />, document.getElementById('app'));
}
