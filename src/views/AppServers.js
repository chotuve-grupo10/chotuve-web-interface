import React from 'react';
import {Redirect} from 'react-router-dom'


class AppServers extends React.Component {
  
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
    if (token == null){
        loggedIn = false
    }
    this.setState({username , token, loggedIn })
  }

  render() {
    if (this.state.loggedIn === false){
      return <Redirect to="/"/>
    }
    return (
      <h1>This is AppServers</h1>
    );
  }
}

export default AppServers;