
import React from 'react';
import './App.css';
import ToDo from './Components/ToDo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Today's To-Do List!!</h2>
      </header>
      <ToDo />
    </div>
  );
}

export default App;
