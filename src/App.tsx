import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import indexPage from './page'

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Route path="/" exact component={indexPage}></Route>
      </div>
    </Router>
  );
}

export default App;
