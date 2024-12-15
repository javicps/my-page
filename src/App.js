import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Professional from './pages/Professional';
import Writing from './pages/Writing';
import Laleydeldesierto from './pages/Laleydeldesierto';


const App = () => {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/professional">Professional</Link></li>
          <li><Link to="/writing">Writing (ES)</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<h1>Welcome to My Page</h1>} />
        <Route path="/professional" element={<Professional />} />
        <Route path="/writing" element={<Writing />} />
        <Route path="/writing/laleydeldesierto" element={<Laleydeldesierto />} />

      </Routes>
    </div>
  );
};

export default App;
