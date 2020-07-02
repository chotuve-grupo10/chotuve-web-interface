import React, { Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import 'rsuite/dist/styles/rsuite-default.css';
import { Container, Header, Sidebar, Content } from 'rsuite';
import { TheSidebar, TheHeader } from './index'
import Home from '../views/Home'
import AppServers from '../views/AppServers';
import views from './views'
import Spinner from '../components/Spinner/Spinner'

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
            <Suspense fallback={Spinner}>
              <Switch>
                {views.map((view, idx) => {
                  return view.component && (
                    <Route
                      key={idx}
                      path={view.path}
                      name={view.name}
                      render={props => (
                        <view.component {...props} />
                      )} />
                  )
                })}
              </Switch>
            </Suspense>
          </Content>
        </Container>
    </Container>
  );
  }
}

export default Layout;