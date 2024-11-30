
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import Dashboard from './Dashboard';
import Login from './Login';

import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';



function App() {
  return (
      <div className="App">
          <Navbar/>
          <Router>
              <div className="content">
                  <Routes>
                      <Route path="/" element={<Home/>}/>
                      <Route path="/Login" element={<Login/>}/>
                      <Route path="/Dashboard" element={<Dashboard/>}/>
                  </Routes>
              </div>
          </Router>
      </div>
  );
}

export default App;
