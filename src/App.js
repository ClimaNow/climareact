import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import LandingPage from './components/LandingPage';
import WeatherPanel from './components/WeatherPanel';
import About from './components/About';
import Formulario from './components/Formulario';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/Home" element={<Home />} />
          <Route exact path="/about" element={<About/>} /> 
          <Route exact path="/formulario" element={<Formulario/>} />
          <Route exact path="/weather" element={<WeatherPanel />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
