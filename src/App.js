import React from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './components/Main';
import Sidebar from './components/Sidebar';
function App() {
  return (
    <div className="App">
      <Sidebar />
      <Main />
      <h2>Testing something</h2>
    </div>
  );
}

export default App;
