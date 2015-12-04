console.log('hi there!');

import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute} from 'react-router';

// import setup from './setup';
import App from '../components/app';
import Artists from '../components/artists';
import Login from '../components/login';
import Register from '../components/register';


ReactDOM.render((
  <Router>
    <Route path="/" component={App}>
      <Route path="login" component={Login}/>
      <Route path="register" component={Register}/>
    </Route>
  </Router>
), document.getElementById('app'));
