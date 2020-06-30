import React from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'

import Login from './pages/login';
import Logout from './pages/logout';
import Layout from './containers/Layout'

const Routes = () => (
    <BrowserRouter>
    <Switch>
        <Route path="/login" component={Login} />
        <Route path="/logout" component={Logout} />
        <Route path="/home" name="Home" render={props => <Layout {...props}/>} />
        <Route path="/abmusuarios" name="ABM Usuarios" render={props => <Layout {...props}/>} />
        <Redirect from="/" to="/login" />
    </Switch>   
</BrowserRouter>
);

export default Routes;
