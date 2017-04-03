import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from '../components/Header';
import Home from '../components/Home';
import Resources from '../components/Resources';

const RouterComponent = () => (
  <Router>
    <div>
      <Header/>
      <Route exact path='/' component={ Home }/>
      <Route path='/resources' component={ Resources }/>
    </div>
  </Router>
)

export default RouterComponent;
