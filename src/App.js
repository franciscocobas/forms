import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import Contact from './components/Contact';
import Menu from './components/Menu';

function App() {
  return (
    <Router>
      <Menu />
      <Switch>
        <Route path="/contact-us">
          <Contact />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
