import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='/' element={<h1>Main</h1>} />
      <Route path='/login' element={<h1>Login</h1>} />
      <Route path='/oauth2/:token' element={<h1>oauth</h1>} /> 
    </Routes>
  );
}

export default App;
