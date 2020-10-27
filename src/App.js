import './App.css';

import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import About from './components/About';
import Todos from './components/Todos';
import Header from './layout/Header';

export class App extends Component {
  render() {
    return (
      <Router>
          <Header />
          <div className="container">
            <Route exact path="/" component={Todos} />
            <Route path="/about" component={About} />
          </div>
      </Router>
    )
  }
}

export default App;
