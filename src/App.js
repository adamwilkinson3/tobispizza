import React from 'react';
import Home from './Home'
import Register from './Register'

import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'

function App() {
  <Router></Router>
  useNavigate('')
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
