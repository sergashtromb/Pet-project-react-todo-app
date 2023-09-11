import React from 'react';
import logo from './logo.svg';

import './styles/App.css';

import Header from './Components/Header.jsx'
import RightMenu from './Components/RightMenu';

function App() {
  return (
    <div className="App">
      
      <Header />

      <RightMenu />

    </div>
  );
}

export default App;
