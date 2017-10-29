import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Item } from './components/item';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path='/' component={Item} />
          <Route path='/sup' component={Item} />
        </div>
      </Router>
    );
  }
}

export default App;
