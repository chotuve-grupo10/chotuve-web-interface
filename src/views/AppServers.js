import React from 'react';
import AppServerTokensTable from '../components/AppServerTokensTable'
import {
  getAppServerTokensFromAuth, 
  deleteAppServerTokenFromAuth,
  createNewAppServerTokenForAuth,
} from '../apliClient'

class AppServers extends React.Component {
  
  constructor(props){
    super(props)
    this.state = {
        isAuthTableLoading: false,
        data: [],
    }
    this.handleApiGetAuthResponse = this.handleApiGetAuthResponse.bind(this);
    this.handleApiDeleteAuthResponse = this.handleApiDeleteAuthResponse.bind(this);
    this.handleApiPostAuthResponse = this.handleApiPostAuthResponse.bind(this);
    this.onAuthDelete = this.onAuthDelete.bind(this);
    this.onAuthCreate = this.onAuthCreate.bind(this);
  }
  
  handleApiGetAuthResponse(response) {
    console.log(response);
    this.setState({data: response['App servers'], isAuthTableLoading: false});
  }

  handleApiDeleteAuthResponse(response) {
    console.log(response);
    this.refreshAuthState();
  }

  handleApiPostAuthResponse(response) {
    console.log(response);
    this.refreshAuthState();
  }

  componentWillMount() {
    this.refreshAuthState();
  }
  
  refreshAuthState() {
    this.setState({isAuthTableLoading: true});
    getAppServerTokensFromAuth(this.handleApiGetAuthResponse);
  }

  onAuthDelete(event, row) {
    this.setState({isAuthTableLoading: true});
    deleteAppServerTokenFromAuth(row.token, this.handleApiDeleteAuthResponse);
  }

  onAuthCreate() {
    this.setState({isAuthTableLoading: true});
    createNewAppServerTokenForAuth(this.handleApiPostAuthResponse);
  }

  render() {
    return (
      <div className="row">
        <h1>Configuración de tokens de App Server</h1>
        <div className="col-10">
          <AppServerTokensTable
              title="Tokens para Auth Server"
              isLoading={this.state.isAuthTableLoading}
              data={this.state.data}
              onDelete={this.onAuthDelete}
              onAdd={this.onAuthCreate}
          />
        </div>
      </div>
    );
  }
}

export default AppServers;