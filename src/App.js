import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Topbar from './components/Topbar';
import Home from './components/Home';
import MSDemo from './components/MSDemo';
import Skills from './components/Skills';
import AboutMe from './components/AboutMe';
import Resume from './components/Resume';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Topbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/msdemo" element={<MSDemo/>} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
