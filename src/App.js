// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserLogin from './components/Userlogin/index.js'; // Corrected path and filename
import Home from './components/Home'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<UserLogin />} />
        <Route path='/home' element={<Home/>} />
      </Routes>
    </Router>
  );
};

export default App;
