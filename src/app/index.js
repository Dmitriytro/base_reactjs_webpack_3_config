import React from 'react';
import { render } from 'react-dom';
import {Provider} from 'react-redux';
import '../sass/style.sass';

import App from './containers/app';
import store from './store';

class Index extends React.Component {
    render() {
        return <App/>
    }
}

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('app'));