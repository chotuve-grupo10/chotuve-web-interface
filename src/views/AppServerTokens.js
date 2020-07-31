import React from 'react';
import AppServerTokensTable from '../components/AppServerTokensTable'
import {
  getAppServerTokensFromAuth, 
  deleteAppServerTokenFromAuth,
  createNewAppServerTokenForAuth,
  getAppServerTokensFromMedia, 
  deleteAppServerTokenFromMedia,
  createNewAppServerTokenForMedia,
} from '../apliClient'

class AppServerTokens extends React.Component {
  
  constructor(props){
    super(props)
    this.state = {
        isAuthTableLoading: false,
        isMediaTableLoading: false,
        authData: [],
        mediaData: [],
    }
    this.handleApiGetAuthResponse = this.handleApiGetAuthResponse.bind(this);
    this.handleApiDeleteAuthResponse = this.handleApiDeleteAuthResponse.bind(this);
    this.handleApiPostAuthResponse = this.handleApiPostAuthResponse.bind(this);
    this.handleApiGetMediaResponse = this.handleApiGetMediaResponse.bind(this);
    this.handleApiDeleteMediaResponse = this.handleApiDeleteMediaResponse.bind(this);
    this.handleApiPostMediaResponse = this.handleApiPostMediaResponse.bind(this);
    this.onAuthDelete = this.onAuthDelete.bind(this);
    this.onAuthCreate = this.onAuthCreate.bind(this);
    this.onMediaDelete = this.onMediaDelete.bind(this);
    this.onMediaCreate = this.onMediaCreate.bind(this);
  }
  
  handleApiGetAuthResponse(response) {
    console.log(response);
    this.setState({authData: response['App servers'], isAuthTableLoading: false});
  }

  handleApiDeleteAuthResponse(response) {
    console.log(response);
    this.refreshAuthState();
  }

  handleApiPostAuthResponse(response) {
    console.log(response);
    this.refreshAuthState();
  }

  handleApiGetMediaResponse(response) {
    console.log(response);
    this.setState({mediaData: response, isMediaTableLoading: false});
  }

  handleApiDeleteMediaResponse(response) {
    console.log(response);
    this.refreshMediaState();
  }

  handleApiPostMediaResponse(response) {
    console.log(response);
    this.refreshMediaState();
  }
  
  refreshAuthState() {
    this.setState({isAuthTableLoading: true});
    getAppServerTokensFromAuth(this.handleApiGetAuthResponse);
  }
  
  refreshMediaState() {
    this.setState({isMediaTableLoading: true});
    getAppServerTokensFromMedia(this.handleApiGetMediaResponse);
  }
  
  onAuthDelete(event, row) {
    this.setState({isAuthTableLoading: true});
    deleteAppServerTokenFromAuth(row.token, this.handleApiDeleteAuthResponse);
  }
  
  onAuthCreate() {
    this.setState({isAuthTableLoading: true});
    createNewAppServerTokenForAuth(this.handleApiPostAuthResponse);
  }
  
  onMediaDelete(event, row) {
    this.setState({isMediaTableLoading: true});
    deleteAppServerTokenFromMedia(row.token, this.handleApiDeleteMediaResponse);
  }
  
  onMediaCreate() {
    this.setState({isMediaTableLoading: true});
    createNewAppServerTokenForMedia(this.handleApiPostMediaResponse);
  }

  componentWillMount() {
    this.refreshAuthState();
    this.refreshMediaState();
  }
  
  render() {
    return (
      <div className="row">
        <h1>Configuración de tokens de App Server</h1>
        <div className="col-10">
          <AppServerTokensTable
              title="Tokens para Auth Server"
              isLoading={this.state.isAuthTableLoading}
              data={this.state.authData}
              onDelete={this.onAuthDelete}
              onAdd={this.onAuthCreate}
          />
          <AppServerTokensTable
              title="Tokens para Media Server"
              isLoading={this.state.isMediaTableLoading}
              data={this.state.mediaData}
              onDelete={this.onMediaDelete}
              onAdd={this.onMediaCreate}
          />
        </div>
      </div>
    );
  }
}

export default AppServerTokens;