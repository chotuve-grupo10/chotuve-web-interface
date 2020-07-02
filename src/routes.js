import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Login from './pages/login';
import Logout from './pages/logout';
import Layout from './containers/Layout'

const Routes = () => (
    <BrowserRouter>
    <Switch>
        {/* <Route exact path="/abmusuarios" name="ABMUsuarios" render={props => <Layout {...props}/>} />
        <Route path="/ambusuarios/user/:userId" name="User" render={props => <Layout {...props}/>} /> */}
        <Route exact path="/login" render={props => <Login {...props}/>} />
        <Route exact path="/logout" render={props => <Logout {...props}/>} />
        <Route path="/" name="Home" render={props => <Layout {...props}/>} />
    </Switch>   
</BrowserRouter>
);

export default Routes;
