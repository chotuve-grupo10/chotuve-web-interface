import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import Login from  './pages/login'

const root = (
    <BrowserRouter>
        <Switch>
            <Route path="/login" component={Login} />
            <Redirect from="/" to="/login" />
        </Switch>   
    </BrowserRouter>
)

ReactDOM.render(root,document.getElementById('root'));