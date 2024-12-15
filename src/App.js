import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Professional from './pages/Professional';
import Writing from './pages/Writing';
import Laleydeldesierto from './pages/Laleydeldesierto';
import Inevitablesoledad from './pages/Inevitablesoledad';

import Menu from './components/Menu';


const App = () => {
  return (
    <div>

      <Menu/>
      <Routes>
        <Route path="/" element={<h1>Welcome to My Page</h1>} />
        <Route path="/professional" element={<Professional />} />
        <Route path="/writing" element={<Writing />} />
        <Route path="/writing/laleydeldesierto" element={<Laleydeldesierto />} />
        <Route path="/writing/Inevitablesoledad" element={<Inevitablesoledad />} />

      </Routes>
    </div>
  );
};

export default App;
