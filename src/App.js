import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/navbar';
import LandingPage from './components/landing';
import Login from './components/login';
import SignUp from './components/signup';
import Dashboard from './components/dashboard';
import ErrorPage from './components/error_page';

function App() {
  return (
    <div className='main_container'>
      <NavBar />
      <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='*' element={<ErrorPage />} />
      </Routes>
     
    </div>
  );
}

export default App;
