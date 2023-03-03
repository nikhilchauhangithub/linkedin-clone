import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Header from './components/Header';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>} />
        
        <Route path='/home' element={<><Header/><Home/></>}>
          </Route>

       
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
