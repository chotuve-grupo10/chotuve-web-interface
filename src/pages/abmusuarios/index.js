import React from 'react';
import {Link, Redirect} from 'react-router-dom'
import NavigationMenu from '../../components/navigationMenu'
import UsersList from '../../components/userslist'



class ABMUsuarios extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            username: '',
            token: null,
            loggedIn: false,
            users:[]   
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

    componentDidMount(){
        const token = this.state.token;
        let componente = this;
        fetch('/api/users',
        {    headers: {
                'Content-Type': 'application/json',
                'Accept': 'text/plain',
                'authorization': token
            },
            method: 'GET',
            crossorigin: true,

        } )
        .then(function(res) {
            return res.json()})
        .then(function (data){
            console.log(data)
            componente.setState({users: data})
        })}

    render() {
        if (this.state.loggedIn === false){
            return <Redirect to="/"/>
        }
        return (
            <div>
                <NavigationMenu />
                 <h1>Lista de Usuarios</h1>
                 <UsersList users={this.state.users}/>
                <Link to="/dashboard"> Volver</Link>
            </div>
        );
    }
}

export default ABMUsuarios;
