import React from 'react';
import { Link } from 'react-router-dom'
import { Icon, Nav, Sidenav } from 'rsuite'
import views from './views'

class TheSidebar extends React.Component {

  render() {
    return (
      <Sidenav appearance="subtle" activeKey="1">
        <Sidenav.Body>
          <Nav>
            {views.map((view, idx) => {
              return (
                <Link to={view.path}>
                  <Nav.Item eventKey={idx} icon={<Icon icon={view.icon} />}>
                    {view.text}
                  </Nav.Item>
                </Link>
              )
            })}
          </Nav>
        </Sidenav.Body>
      </Sidenav>
    );
  }
}

export default TheSidebar;