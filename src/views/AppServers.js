import React from 'react';
import MaterialTable from 'material-table';
import copy from 'copy-to-clipboard';
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
          <MaterialTable
            title="Tokens para Auth Server"
            columns={[
              { title: 'Token', field: 'token' },
              { title: 'Fecha de alta', field: 'registered_at' },
            ]}
            data={this.state.data}        
            actions={[
              {
                icon: 'delete',
                tooltip: 'Delete token',
                onClick: (event, rowData) => alert("You deleted " + rowData.token)
              },
              {
                icon: 'content_copy',
                tooltip: 'Copy to clipboard',
                onClick: (event, rowData) => copy(rowData.token)
              },
              {
                icon: 'add',
                tooltip: 'Add User',
                isFreeAction: true,
                onClick: (event) => alert("You want to add a new row")
              }
            ]}
            options={{
              search: false,
              actionsColumnIndex: -1
            }}
          />
      </div>
    </div>
    );
  }
}

export default AppServers;