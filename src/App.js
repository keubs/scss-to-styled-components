import React from 'react';
import logo from './logo.svg';
import './App.css';
import Translator from './translator.component';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Translate SCSS to styled-component formatting
        </p>
      </header>
      <Translator />
    </div>
  );
}

export default App;
