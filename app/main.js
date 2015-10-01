'use strict';

import '../public/styles/style.scss';
import React from 'react'
import {Router, Route} from 'react-router'

import App from './pages/index';
import Inbox from './pages/inbox';
import Login from './pages/login';
import Measures from './pages/measures';
import Prices from './pages/prices';
import Profile from './pages/profile';
import Usage from './pages/usage';

React.render(
    <Router>
        <Route path="/" component={App}>
            <Route path="/inbox" component={Inbox}>
            </Route>
        </Route>

    </Router>,
    document.getElementById('content')
);

