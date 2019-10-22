import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../Landing/Home';
import Register from '../Landing/Register';
//import Login from '../Landing/Login';
import About from '../Landing/About';
import Contact from '../Landing/Contact';
import NotMatch from './NotMatch';
import SigninView from './SigninView';
import {isLogin} from '../../api/auth';

export default () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/register" component={Register} />
    <Route exact path="/login" component={SigninView} />
    <Route exact path="/about" component={About} />
    <Route exact path="/contact" component={Contact} />
    <Route  component={NotMatch} />
  </Switch>
);