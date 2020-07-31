import React from 'react';
import {Redirect} from 'react-router-dom'
import {getUsers, deleteUser, modifyUser} from '../apliClient'
import UsersTable from '../components/UsersTable'
import EditUserModal from '../components/EditUserModal'




class Users extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            username: '',
            token: null,
            loggedIn: false,
            error: '',
            users:[],
            isUsersLoading: false,
            editModal: false,
            editRow:''
        }
        this.onEdit= this.onEdit.bind(this);
        this.saveChanges= this.saveChanges.bind(this);
        this.closeChanges= this.closeChanges.bind(this);
        this.onDelete= this.onDelete.bind(this);
        this.handleApiGetAuthResponse= this.handleApiGetAuthResponse.bind(this);
        this.handleApiUserDeleteAuthResponse= this.handleApiUserDeleteAuthResponse.bind(this);
        this.handleApiUserModifyAuthResponse = this.handleApiUserModifyAuthResponse.bind(this);
    }
    
    componentWillMount() {
        const username = localStorage.getItem('username');
        const token = localStorage.getItem('token');
        let loggedIn = true
        if (token == null){
            loggedIn = false
        }
        this.setState({username , token, loggedIn })
        this.refreshUsers();
    }

    componentDidMount(){
        getUsers(this.handleApiGetAuthResponse)
    }

    onEdit(event,row){
        this.setState({editRow: row})
        this.setState({editModal: true});
    }

    saveChanges(user){
        this.setState({editModal: false})
        this.setState({isUsersLoading: true});
        modifyUser(user, this.handleApiUserModifyAuthResponse)     
    }

    closeChanges(){
        this.setState({editModal: false})
    }

    onDelete(event,row){
        this.setState({isUsersLoading: true});
        deleteUser(row.email, this.handleApiUserDeleteAuthResponse);
    }

    handleApiUserDeleteAuthResponse(response) {
        console.log(response);
        this.refreshUsers();
    }
    
    handleApiUserModifyAuthResponse(response) {
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
        this.setState({isUsersLoading: false});
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
                <EditUserModal show={this.state.editModal}
                              row={this.state.editRow}
                              saveChanges={this.saveChanges}
                              closeChanges={this.closeChanges}
                              />
                </div>
            </div>
        );
    }
}

export default Users;
