import React from 'react';
import './App.css';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


import Home from './components/Home';
import Blog from './components/Blog';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Single from './components/Single';



function App() {

 

  return (
    <div className="App">
        <Router basename="/">
        <Switch>
          <Route path="(/|/home)/" exact component={Home}/>
          <Route path="/portfolio" exact component={Portfolio}/>
          <Route path="/posts" exact component={Blog}/>
          <Route path="/contact" exact component={Contact}/>

          {/* <Route path="/search/:query" component={SearchResults}/> */}

          <Route path="/post/:id" component={Single}/>
         </Switch>
        </Router>
    </div>
  );
}

export default App;
