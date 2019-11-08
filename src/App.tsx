import React from 'react';
import './App.css';

import Form from './components/BaseTemplate'

const App: React.FC = () => {
  return (
    <div className="App">
      <Form helloString={"hello world111"} />
    </div>
  );
}

export default App;
