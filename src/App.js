import './App.css';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';


function App() {
  return (
    <div className="container">
      <Link to="/" style={{fontWeight:"bold", fontSize: "xx-large"}}>Meme Generator</Link>
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='/edit' element={<EditPage/>} />
      </Routes>
    </div>
  );
};

export default App;
