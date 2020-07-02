import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Login from './pages/login';
import Logout from './pages/logout';
import Dashboard from './pages/dashboard';
import Layout from './containers/Layout'

const Routes = () => (
    <BrowserRouter>
    <Switch>
        <Route path="/dashboard" component={Dashboard} />
        <Route exact path="/login" render={props => <Login {...props}/>} />
        <Route exact path="/logout" render={props => <Logout {...props}/>} />
        <Route path="/" name="Home" render={props => <Layout {...props}/>} />
    </Switch>   
</BrowserRouter>
);

export default Routes;
