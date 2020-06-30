import React from 'react';
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import 'font-awesome/css/font-awesome.min.css';
import styled from 'styled-components'
import Home from '../views/Home'
import AppServers from '../views/AppServers'

const Main = styled.main`
    position: relative;
    overflow: hidden;
    transition: all .15s;
    padding: 0 20px;
    margin-left: ${props => (props.expanded ? 240 : 64)}px;
`;

class Sidebar extends React.Component {
  state = {
      selected: 'home',
      expanded: false
  };

  onSelect = (selected) => {
      this.setState({ selected: selected });
  };
  onToggle = (expanded) => {
      this.setState({ expanded: expanded });
  };

  render() {
    const { expanded, selected } = this.state;

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
                    onToggle={this.onToggle}
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
                <Main expanded={expanded}>
                    <Route path="/home" component={props => <Home />} />
                    <Route path="/app-servers" component={props => <AppServers />} />
                </Main>
            </React.Fragment>
        )}
        />
      </Router>
    )
  }
}

export default Sidebar;