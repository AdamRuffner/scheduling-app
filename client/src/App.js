import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Components
// import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Signup from './components/Signup';
import BookUser from './components/BookUser';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path ='/' element={<Login />} />
          <Route path ='/register' element={<Signup />} />
          <Route path ='/book' element={<BookUser />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer/>
    </div>
  );
    
}

export default App;
