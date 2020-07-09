import React from 'react';
import {Redirect} from 'react-router-dom'
import {getUsers, deleteUser} from '../apliClient'
import UsersTable from '../components/UsersTable'



class Users extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            username: '',
            token: null,
            loggedIn: false,
            error: '',
            users:[],
            isUsersLoading: false
        }
        this.onEdit= this.onEdit.bind(this);
        this.onDelete= this.onDelete.bind(this);
        this.handleApiGetAuthResponse= this.handleApiGetAuthResponse.bind(this);
        this.handleApiUserDeleteAuthResponse= this.handleApiUserDeleteAuthResponse.bind(this);
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
        getUsers(this.handleApiGetAuthResponse)
    }

    onEdit(event,row){
        console.log(row.email)
        this.setState({isUsersLoading: true});
        this.refreshUsers()
    }

    onDelete(event,row){
        this.setState({isUsersLoading: true});
        deleteUser(row.email, this.handleApiUserDeleteAuthResponse);
    }

    handleApiUserDeleteAuthResponse(response) {
        console.log(response);
        this.refreshUsers();
    }
    

    refreshUsers() {
        this.setState({isUsersLoading: true});
        getUsers(this.handleApiGetAuthResponse);
    }

    handleApiGetAuthResponse(response) {
        console.log(response);
        if(response.Error !== undefined){
            this.setState({isUsersLoading: false, error: 'Usted no puede administrar usuarios pues no es usuario administrador'})
        } else {
            this.setState({isUsersLoading: false, users: response})
        }
      }

    render() {
        if (this.state.loggedIn === false){
            return <Redirect to="/login"/>
        }
        return (
            <div className="row">
                <div className="col-10">
                <UsersTable
                    title="Administracion de Usuarios"
                    isLoading={this.state.isUsersLoading}
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
            </div>
        );
    }
}

export default Users;
