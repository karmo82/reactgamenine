import React, { Component } from 'react';
import './App.css';
import HeaderComponent from './containers/header.container';
import routes from './routes';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import {connect} from 'react-redux';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
            <HeaderComponent></HeaderComponent>
            <hr></hr>
            <div className="container">
              {routes.map((route, i) => <Route exact key={i} path={route.path} component={route.component} ></Route>) }
            </div>
            
        </div>
        </Router>
    );
  }
}

export default connect()(App)
