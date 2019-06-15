import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import Home from '../Routes/Home';
import Lock from '../Routes/Lock';

export default () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/lock/:id" exact component={Lock} />
      <Redirect from="*" to="/" />
    </Switch>
  </Router>
);
