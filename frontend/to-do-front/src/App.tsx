import React from 'react';
import logo from './logo.svg';

import './styles/App.css';

import Header from './Components/Header.jsx'
import RightMenu from './Components/RightMenu';
import Content from './Components/Content';

function App() {
  return (
    <div className="App">
      
      <Header />

      <RightMenu />

      <Content />
      
    </div>
  );
}

export default App;
