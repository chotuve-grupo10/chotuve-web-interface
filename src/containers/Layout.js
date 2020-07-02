import React from 'react';
import 'rsuite/dist/styles/rsuite-default.css';
import { Container, Header, Sidebar, Content } from 'rsuite';
import { TheSidebar, TheHeader } from './index'
import Home from '../views/Home'

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
            <Home />
          </Content>
        </Container>
    </Container>
  );
  }
}

export default Layout;