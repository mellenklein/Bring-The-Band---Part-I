console.log('hi there!');

import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute} from 'react-router';

import setup from './setup';
import App from '../components/app';
import Artists from '../components/artists';

ReactDOM.render((
  <Router>
    <Route path="/" component={App}>
      <Route />
    </Route>
  </Router>
), document.getElementById('app'));
