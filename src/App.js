import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import About from './pages/About';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      <Routes>
        <Route path="/" element={<h1>Welcome to My Page</h1>} />
        <Route path="/about" element={<About />} />
      </Routes>
      </header>
    </div>
  );
}

export default App;
