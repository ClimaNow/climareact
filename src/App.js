import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import LandingPage from './components/LandingPage';
import WeatherPanel from './components/WeatherPanel';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/Home" element={<Home />} />
          <Route exact path="/about" element={<h2>Sobre Nosotros</h2>} /> {/* Agrega la ruta para "About Us" */}
          <Route exact path="/formulario" element={<h2>Formulario de Contacto</h2>} /> {/* Agrega la ruta para "Contact Form" */}
          <Route exact path="/weather" element={<WeatherPanel />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
