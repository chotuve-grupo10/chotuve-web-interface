import React from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'

import Login from './pages/login';
import Logout from './pages/logout';
import Dashboard from './pages/dashboard';
import Layout from './containers/Layout'

const Routes = () => (
    <BrowserRouter>
    <Switch>
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/home" name="Home" render={props => <Layout {...props}/>} />
        <Route path="/login" component={Login} />
        <Route path="/logout" component={Logout} />
        <Redirect from="/" to="/login" />
    </Switch>   
</BrowserRouter>
);

export default Routes;