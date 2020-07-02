import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import 'rsuite/dist/styles/rsuite-default.css';
import { Container, Header, Sidebar, Content } from 'rsuite';
import { TheSidebar, TheHeader } from './index'
import Home from '../views/Home'
import AppServers from '../views/AppServers';

class Layout extends React.Component {
  render(props) {
    const token = localStorage.getItem('token');
    const username = localStorage.getItem('username');

    if (!token || token === 'null') {
      return <Redirect to="/login" />;
    }
    return (
      <Container>
        <Header>
          <TheHeader username={username}/>
        </Header>
        <Container>
          <Sidebar className="fixed">
            <TheSidebar />
          </Sidebar>
          <Content>
            <Switch>
              <Route path="/home">
                <Home />
              </Route>
              <Route path="/app-servers">
                <AppServers />
              </Route>
            </Switch>
          </Content>
        </Container>
    </Container>
  );
  }
}

export default Layout;