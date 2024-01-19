import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Input } from './components/Input';

const App = (): React.JSX.Element => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Input
          onChange={(e) => {
            console.log(e);
          }}
        ></Input>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;

// typeguards
// union types
// generics de funciones
// decorators
// utility types
//
