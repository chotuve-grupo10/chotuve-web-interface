import React from 'react';
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import 'font-awesome/css/font-awesome.min.css';
import Home from '../views/Home'
import AppServers from '../views/AppServers'

class Sidebar extends React.Component {
  render() {
    return (
      <Router>
        <Route render={({ location, history }) => (
            <React.Fragment>
                <SideNav
                    onSelect={(selected) => {
                        const to = '/' + selected;
                        if (location.pathname !== to) {
                            history.push(to);
                        }
                    }}
                >
                    <SideNav.Toggle />
                    <SideNav.Nav defaultSelected="home">
                        <NavItem eventKey="home">
                            <NavIcon>
                                <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                            </NavIcon>
                            <NavText>
                                Home
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="app-servers">
                            <NavIcon>
                                <i className="fa fa-fw fa-server" style={{ fontSize: '1.75em' }} />
                            </NavIcon>
                            <NavText>
                                Devices
                            </NavText>
                        </NavItem>
                    </SideNav.Nav>
                </SideNav>
                <main>
                    <Route path="/home" component={props => <Home />} />
                    <Route path="/app-servers" component={props => <AppServers />} />
                </main>
            </React.Fragment>
        )}
        />
      </Router>
    )
  }
}

export default Sidebar;