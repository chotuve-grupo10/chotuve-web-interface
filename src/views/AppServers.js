import React from 'react';
import AppServerTokensTable from '../components/AppServerTokensTable'
import {getAppServerTokensFromAuth} from '../apliClient'
class AppServers extends React.Component {
  
  constructor(props){
    super(props)
    this.state = {
        username: '',
        token: null,
        data: [],
    }
    this.handleApiResponse = this.handleApiResponse.bind(this);
  }
  
  handleApiResponse(response) {
    console.log(response);
    this.setState({data: response['App servers']});
  }

  componentWillMount() {
    const username = localStorage.getItem('username');
    const token = localStorage.getItem('token');
    this.setState({username , token, })
    getAppServerTokensFromAuth(this.handleApiResponse);
  }

  render() {
    return (
      <div className="row">
        <h1>Configuración de tokens de App Server</h1>
        <div className="col-10">
          <AppServerTokensTable
              title="Tokens para Auth Server"
              data={this.state.data}
          />
        </div>
      </div>
    );
  }
}

export default AppServers;