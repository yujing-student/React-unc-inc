
import './Stylesheet/App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';

import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';



function App() {
  return (
      <div className="App fade-in">
          <Navbar/>
          <Router>
              <div className="content">
                  <Routes>
                      <Route path="/" element={<Home/>}/>
                      <Route path="/pages/Login" element={<Login/>}/>
                      <Route path="/pages/Dashboard" element={<Dashboard/>}/>
                  </Routes>
              </div>
          </Router>
      </div>
  );
}

export default App;
