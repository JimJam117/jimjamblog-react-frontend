import React from 'react';
import './App.css';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Home from './components/Home'


function App() {
  return (
    <div className="App">
        <Router>
          <Route path="/" exact component={Home}/>
        </Router>
    </div>
  );
}

export default App;
