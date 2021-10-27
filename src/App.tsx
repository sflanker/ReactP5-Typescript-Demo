import * as React from 'react';
import { P5Demo } from './components/P5Demo';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          P5.js React Demo
        </h1>
      </header>
      <main>
        <P5Demo color="green" />
      </main>
    </div>
  );
}

export default App;
