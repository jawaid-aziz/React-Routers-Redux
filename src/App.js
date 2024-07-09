import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Counter } from './Components/Count';

function App() {
  return (
    <div className="container">
      <button>Increment</button>
      <Counter/>
      <button>Decrement</button>
    </div>
  );
};

export default App;
