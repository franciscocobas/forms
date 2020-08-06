import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import configureStore, { history } from './store';
import styled from 'styled-components';

import Home from './components/Home';
import Contact from './components/Contact';
import Menu from './components/Menu';
import Login from './components/Login';
import Workflows from './components/Workflows';

const store = configureStore();

const MainContainer = styled.main`
  background-color: #f3f3f3;
  min-height: 100vh;
`;

function App() {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Menu />
        <MainContainer>
          <Switch>
            <Route path="/contact-us">
              <Contact />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/workflows">
              <Workflows />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </MainContainer>
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
