import React, { Component } from 'react';
import { render } from 'react-dom';
import '../sass/style.sass';

export default class Hello extends Component {
    render() {
        return (
            <div className="container">
                Hello from react
            </div>
        );
    }
}

render(<Hello />, document.getElementById('app'));