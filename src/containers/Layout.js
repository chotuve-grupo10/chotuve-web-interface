import React from 'react';
import { Route, Switch } from 'react-router-dom'
import 'rsuite/dist/styles/rsuite-default.css';
import { Container, Header, Sidebar, Content } from 'rsuite';
import { TheSidebar, TheHeader } from './index'
import Home from '../views/Home'
import AppServers from '../views/AppServers';

class Layout extends React.Component {
  render(props) {
    return (
      <Container>
        <Header className="fondoNegro">
          <TheHeader />
        </Header>
        <Container>
          <Sidebar className="fondoRojo fixed">
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