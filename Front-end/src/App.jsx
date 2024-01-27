import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/index';
import  WaitingRoom  from './pages/WaitingRoom/index' 
import  GameRoom  from './pages/GameRoom/index' 
import  AudioRoom  from './pages/AudioRoom/index' 


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/waiting-room" element={<WaitingRoom />} /> 
        <Route path="/game-room" element={<GameRoom />} /> 
        <Route path="/audio-room" element={<AudioRoom />} /> 
      </Routes>
    </Router>
  );
}

export default App;
