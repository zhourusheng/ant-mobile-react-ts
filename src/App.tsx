import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import SimpleTabs from './components/Tabs'
import DetailPage from './page/Detail'

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Route path="/" exact component={SimpleTabs}></Route>
        <Route path="/detail" exact component={DetailPage}></Route>
      </div>
    </Router>
  );
}

export default App;
