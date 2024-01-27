import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/index';
import  WaitingRoom  from './pages/WaitingRoom/index' 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/waiting-room" element={<WaitingRoom />} /> 
      </Routes>
    </Router>
  );
}

export default App;
