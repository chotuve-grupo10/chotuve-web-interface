import React from 'react';
import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar';

class TheHeader extends React.Component {

  render(props) {
    return (
      <Navbar bg="light">
        <Navbar.Brand href="/home">
          <img
            src="/logo.png"
            height="60"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
          <Navbar.Text className="brand-text">Chotuve</Navbar.Text>
        </Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text className=" mr-sm-2">
            Signed in as: <a href="#login">{this.props.username}</a>
          </Navbar.Text>
          <Link to="/logout">(Logout)</Link>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default TheHeader;