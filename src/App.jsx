import React from "react";
import { Routes, Route } from "react-router-dom";
import Professional from "./pages/Professional";
import Writing from "./pages/Writing";
import About from "./pages/About";

import Story from "./pages/Story";
import "./App.css";

import Footer from "./components/Footer";
import Menu from "./components/Menu";

const App = () => {
  return (
    <div>
      <Menu />
      <div className="content">
        <Routes basename="/my-page">
          <Route path="/" element={<About />} />
          <Route path="/professional" element={<Professional />} />
          <Route path="/writing" element={<Writing />} />
          <Route path="/writing/:id" element={<Story />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
