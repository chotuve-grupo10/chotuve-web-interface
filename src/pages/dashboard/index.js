import React from 'react';
import NavigationMenu from '../../components/navigationMenu'
import { Redirect } from 'react-router-dom';

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
        if (token === null){
            loggedIn = false
        }
        this.setState({username , token, loggedIn })
    }

    render() {
        if (this.state.loggedIn === false){
            return <Redirect to="/"/>
        }
        return (
            <div classname="container">
                <NavigationMenu/>
                <h6>Bienvenido {this.state.username}!</h6>
            </div>
            
        );
    }
}

export default Dashboard;