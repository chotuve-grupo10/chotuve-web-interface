import React from 'react';
import { Link } from 'react-router-dom'
import { Icon, Nav, Sidenav, Dropdown } from 'rsuite'
import views from './views'

class TheSidebar extends React.Component {

  render() {
    return (
      <Sidenav appearance="subtle" activeKey="1">
        <Sidenav.Body>
          <Nav>
            {views.map((view, idx) => {
              return (view.component && (
                <Link key={idx} to={view.path}>
                  <Nav.Item eventKey={idx} icon={<Icon icon={view.icon} />}>
                    {view.name}
                  </Nav.Item>
                </Link>
              )) || (view.subItems && (
                <Dropdown key={idx} title={view.name} icon={<Icon icon={view.icon} />}>
                  {view.subItems.map((subView, subIdx) => {
                    return(
                      <Link key={idx + '.' + subIdx} to={subView.path}>
                        <Dropdown.Item>{subView.name}</Dropdown.Item>
                      </Link>
                    )
                  })}
                </Dropdown>
                )
              )
            })}
          </Nav>
        </Sidenav.Body>
      </Sidenav>
    );
  }
}

export default TheSidebar;