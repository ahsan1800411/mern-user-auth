import './App.css';
import Register from './components/Screens/Register';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Screens/Login';
import Home from './components/Screens/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
