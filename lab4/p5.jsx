import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Link, BrowserRouter as Router} from 'react-router-dom';
import Head from './components/header/Header'
import States from './components/states/States';
import Example from './components/example/Example';


const Switchs = (
    <Router>
    <div>
      <Link to='/state'><button>State</button></Link>
      <Link to='/example'><button>Example</button></Link>
      <Route exact path="/" component={Head}/>
      <Route exact path="/example" component={Example} />
      <Route path="/state" component={States} />
    </div>
  </Router>
)
ReactDOM.render(
  Switchs,
  document.getElementById('root')
);
// Switchs();


