import React from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'

import Login from './pages/login';
import Logout from './pages/logout';
import Dashboard from './pages/dashboard';
import ABMUsuarios from './pages/abmusuarios';

const Routes = () => (
    <BrowserRouter>
    <Switch>
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/login" component={Login} />
        <Route path="/logout" component={Logout} />
        <Route path="/abmusuarios" component={ABMUsuarios} />
        <Redirect from="/" to="/login" />
    </Switch>   
</BrowserRouter>
);

export default Routes;
