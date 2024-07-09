import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Counter } from './Components/Count';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  return (
    <div className="container">
      <button onClick={e=> dispatch({type:'INCREMENT'})}>Increment</button>
      <Counter/>
      <button onClick={e=> dispatch({type:'DECREMENT'})}>Decrement</button>
    </div>
  );
};

export default App;
