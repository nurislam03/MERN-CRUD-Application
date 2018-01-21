import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './index.css';
import registerServiceWorker from './registerServiceWorker';
import App from './App';


ReactDOM.render(
    <Router>
        <Route exact path='/' component={App} />
    </Router>,
    document.getElementById('root')
);
registerServiceWorker();
