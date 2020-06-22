import React from 'react';
import {Link, Redirect} from 'react-router-dom'

class Dashboard extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            username: '',
            token: null,
            loggedIn: false
            
        }
    }
  
    componentWillMount() {
        const username = localStorage.getItem('username');
        const token = localStorage.getItem('token');
        let loggedIn = true
        if (token == null){
            loggedIn = false
        }
        this.setState({username , token, loggedIn })
    }

    render() {
        return (
            <div>
               <h1>Bienvenido {this.state.username}!</h1> 
               <Link to="/logout" className="btn btn-outline-primary">Logout</Link>
            </div>
        );
    }
}

export default Dashboard;