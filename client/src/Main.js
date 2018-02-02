import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import './index.css';
import registerServiceWorker from './registerServiceWorker';

import AddItem from './components/AddItem';
import IndexItem from './components/IndexItem';
import EditItem from './components/EditItem';


class Main extends Component {

    render() {
        return (
            <main>
                <switch>
                    <Route exact path='/' component={IndexItem} />
                    <Route path='/add-item' component={AddItem} />
                    <Route path='/index' component={IndexItem} />
                    <Route path='/edit/:id' component={EditItem} />
                </switch>
            </main>
        );
    }
}

export default Main;
