import React from 'react';
import { Router, Route, Switch } from'react-router-dom';

import { createBrowserHistory } from 'history';
import Dashboard from '../components/Dashboard';
import HelpPage from '../components/helpPage';
import NotFoundPage from '../components/404';
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createBrowserHistory();

const AppRouter = (

    <Router history={history}>
    <div>
            <Switch>
                <PublicRoute exact={true} path="/" component={LoginPage}/>
                <PrivateRoute path="/dashboard" component={Dashboard}/>
               
                <PublicRoute path="/help" component={HelpPage}/>
                <PublicRoute component={NotFoundPage}/>
            </Switch>
    </div>
    </Router>
);

export default AppRouter