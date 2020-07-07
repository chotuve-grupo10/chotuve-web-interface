import React from 'react';
import {Link, Redirect} from 'react-router-dom'
import UsersList from '../components/userslist'
import { Alert } from 'reactstrap';
import {getUsers} from '../apliClient'
import UsersTable from '../components/UsersTable'



class Users extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            username: '',
            token: null,
            loggedIn: false,
            error: '',
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
        getUsers(token)
        .then(function(res) {
            return res.json()})
        .then(function (data){
            console.log(data.Error)
            if(data.Error !== undefined){
                componente.setState({error: 'Usted no puede administrar usuarios pues no es usuario administrador'})
            } else {
                componente.setState({users: data})
            }
        })}




    onEdit(){
        console.log("Editar")
    }

    onDelete(){
        console.log("Eliminar")
    }
    

    render() {
        if (this.state.loggedIn === false){
            return <Redirect to="/login"/>
        }
        return (
            <div>
                <UsersTable
                    title="Administracion de Usuarios"
                    data={this.state.users}
                    onEdit={this.onEdit}
                    onDelete={this.onDelete}
                />       
                 {/* <h1>Administración de Usuarios</h1>
                 {
                    this.state.error !== ''? (
                        <Alert color="danger" className="text-center"> {this.state.error} </Alert>
                    ) : <UsersList users={this.state.users}/>
                }             
                <Link to="/home"> Volver</Link> */}
            </div>
        );
    }
}

export default Users;
