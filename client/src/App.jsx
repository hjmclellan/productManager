import './App.css';
import Main from './views/Main';
import React from 'react';
import Detail from './views/Detail';
import Update from './views/Update';
import { Router } from '@reach/router';
import { Redirect } from '@reach/router';

function App() {
  return (
    <div className="App">
      <Router>
        <Main path="products/"/>
        <Detail path="products/:id" />
        <Update path="products/edit/:id" />
        <Redirect from="/" to="products/"/>
      </Router>
    </div>
  );
}

export default App;