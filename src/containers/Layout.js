import React from 'react';
import {
//  Content,
//  Footer,
//  Header,
  Sidebar
} from './index'
import Navbar from 'react-bootstrap/Navbar';

class Layout extends React.Component {

  render() {
    return (
      <div className='content-wrapper'>
        <Navbar className='d-flex flex-column flex-md-row' bg="dark">
          <Navbar.Brand href="/home">
            <img
              src="https://react-bootstrap.github.io/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
        </Navbar>
        <Sidebar />
      </div>
    );
  }
}

export default Layout;