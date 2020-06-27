import React from 'react';
import {Link} from 'react-router-dom'
import NavigationMenu from '../../components/navigationMenu'


class ABMUsuarios extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            username: '',
            token: null,
            loggedIn: false,
            users:''   
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
            const renObjData = data.map(function(user, idx) {
                return <p key={idx}>{user["email"]}, {user["full name"]}</p>;
        })
        componente.setState({users: renObjData})

    })}

    render() {
        return (
            <div>
                <NavigationMenu />
                 <h1>Lista de Usuarios</h1>
                 <h6>{this.state.users}</h6>
                <Link to="/dashboard"> Volver</Link>
            </div>
        );
    }
}

export default ABMUsuarios;
