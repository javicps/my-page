import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Professional from './pages/Professional';
import Writing from './pages/Writing';
import Laleydeldesierto from './pages/Laleydeldesierto';
import Inevitablesoledad from './pages/Inevitablesoledad';
import Desyat from './pages/Desyat';
import Entrelosmuertos from './pages/Entrelosmuertos';
import './App.css'

import Footer from './components/Footer';
import Menu from './components/Menu';


const App = () => {
  return (
    <div>
      <Menu />
      <div className="content">
        <Routes>
          <Route path="/" element={<div class="free-text"><h1>Welcome to My Page</h1></div>} />
          <Route path="/professional" element={<Professional />} />
          <Route path="/writing" element={<Writing />} />
          <Route path="/writing/laleydeldesierto" element={<Laleydeldesierto />} />
          <Route path="/writing/Inevitablesoledad" element={<Inevitablesoledad />} />
          <Route path="/writing/Desyat" element={<Desyat />} />
          <Route path="/writing/Entrelosmuertos" element={<Entrelosmuertos />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
