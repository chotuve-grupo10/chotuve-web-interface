import React from 'react';
import { Link } from 'react-router-dom'
import { Icon, Nav, Sidenav } from 'rsuite'

class TheSidebar extends React.Component {

  render() {
    return (
      <Sidenav appearance="subtle" activeKey="1">
        <Sidenav.Body>
          <Nav>
            <Link to="/home">
              <Nav.Item eventKey="1" icon={<Icon icon="home" />}>
                Home
              </Nav.Item>
            </Link>
            <Link to="/app-servers">
              <Nav.Item eventKey="1" icon={<Icon icon="server" />}>
                App Servers
              </Nav.Item>
            </Link>
          </Nav>
        </Sidenav.Body>
      </Sidenav>
    );
  }
}

export default TheSidebar;