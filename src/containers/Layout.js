import React, { Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import 'rsuite/dist/styles/rsuite-default.css';
import { Container, Header, Sidebar, Content } from 'rsuite';
import { TheSidebar, TheHeader } from './index'
import views from './views'
import User from '../components/user'
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
                      exact={view.exact}
                      path={view.path}
                      name={view.name}
                      render={props => (
                        <view.component {...props} />
                      )} />
                  )
                })}
                {views.map((view, idx) => {
                  return view.subItems && (
                    <Switch key={idx}>
                    {view.subItems.map((subView, subIdx) => {
                      return (
                        <Route
                          key={idx + '.' + subIdx}
                          exact={subView.exact}
                          path={subView.path}
                          name={subView.name}
                          render={props => (
                            <subView.component {...props} />
                          )} />
                      )
                      })}
                    </Switch>
                  )
                })}
                <Route path="/users/:userId" name="User" render={props => <User />} />
                <Route exact path="/" render={() => (<Redirect to="/home" />)} />
              </Switch>
            </Suspense>
          </Content>
        </Container>
    </Container>
  );
  }
}

export default Layout;