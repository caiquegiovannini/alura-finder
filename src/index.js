import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './index.css';

import Home from './pages/Home';
import Courses from './pages/Courses';
import Completed from './pages/Completed';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/courses" component={Courses} />
      <Route path="/completed" component={Completed} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
