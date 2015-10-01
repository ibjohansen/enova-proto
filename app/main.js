'use strict';

import '../public/styles/style.scss';
import React from 'react';
import {Router, Route} from 'react-router';

import App from './pages/index';
import Inbox from './pages/inbox';
import Login from './pages/login';
import Measures from './pages/measures';
import Winnings from './pages/winnings';
import Profile from './pages/profile';
import Usage from './pages/usage';

const routes = (
    <Router>
        <Route path="/" component={App}>
            <Route path="usage" components={{content:Usage}}/>
            <Route path="measures" components={{content:Measures}}/>
            <Route path="winnings" components={{content:Winnings}}/>
            <Route path="inbox" components={{content:Inbox}}/>
            <Route path="profile" components={{content:Profile}}/>
        </Route>
    </Router>
);

React.render(
   routes,
    document.body
);