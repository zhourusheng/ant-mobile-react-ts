import React from 'react';
import './App.css';

// import Form from './components/BaseTemplate'
import SimpleTabs from './components/Tabs'

const App: React.FC = () => {
  return (
    <div className="App">
      {/* <Form helloString={"hello world111"} /> */}
      <SimpleTabs />
    </div>
  );
}

export default App;
