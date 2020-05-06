import React from 'react';
import './App.css';

import NavBar from './components/NavBar';
import Home from './container/Home';

function App() {
  return (
    <div className="container">
      <NavBar />
      <Home />
    </div>
  );
}

export default App;
