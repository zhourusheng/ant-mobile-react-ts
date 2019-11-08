import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import SimpleTabs from './components/Tabs'

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Route path="/" exact component={SimpleTabs}></Route>
      </div>
    </Router>
  );
}

export default App;
