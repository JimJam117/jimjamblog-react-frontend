import React from 'react';
import './App.css';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Home from './components/Home';
import Blog from './components/Blog';
import Contact from './components/Contact';


function App() {
  return (
    <div className="App">
        <Router>
        <Switch>
          <Route path="(/|/home)/" exact component={Home}/>
          <Route path="/posts" exact component={Blog}/>
          <Route path="/contact" exact component={Contact}/>
         </Switch>
        </Router>
    </div>
  );
}

export default App;
