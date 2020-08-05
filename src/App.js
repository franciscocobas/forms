import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { Provider, useSelector, useDispatch } from 'react-redux';
import configureStore, { history } from './store';

import Home from './components/Home';
import Contact from './components/Contact';
import Menu from './components/Menu';
import Login from './components/Login';

import actions from './actions';

const store = configureStore();

const MainContainer = () => {
  const { menuVisible } = useSelector(({ globalReducer }) => ({ menuVisible: globalReducer.menuVisible }));
  const dispatch = useDispatch();
  const hideMenu = () => {
    if (menuVisible) {
      dispatch(actions.setMenuVisibility(false));
    }
  }

  return (
    <div id="main-container" onClick={hideMenu}>
      <Switch>
        <Route path="/contact-us">
          <Contact />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

function App() {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Menu />
        <MainContainer />
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
