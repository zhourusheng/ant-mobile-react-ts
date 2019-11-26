import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import indexPage from './page'

import NavBar from './page/nav-bar'

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Route path="/" exact component={indexPage}></Route>
        <Route path="/navBar" exact component={NavBar}></Route>
      </div>
    </Router>
  );
}

export default App;
