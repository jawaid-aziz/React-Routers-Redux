import './App.css';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { Homepage } from './Pages/Home';

function App() {
  return (
    <div className="container">
      <h1>Memes Generator</h1>
      <Routes>
        <Route path='/' element={<Homepage/>} />
      </Routes>
    </div>
  );
};

export default App;
