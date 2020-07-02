import React, { Component } from 'react';

import 'rsuite/dist/styles/rsuite-default.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Routes from './routes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Routes />
      </div>
    );
  }
}

export default App;