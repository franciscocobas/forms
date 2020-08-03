import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store';

import Home from './components/Home';
import Contact from './components/Contact';
import Menu from './components/Menu';
import Login from './components/Login';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Menu />
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
      </Router>
    </Provider>
  );
}

export default App;
