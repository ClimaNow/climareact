import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import LandingPage from './components/LandingPage';
import WeatherPanel from './components/WeatherPanel';
import Footer from './components/Footer';
import Formulario from './components/Formulario';
import About from './components/About';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/Home" element={<Home />} />
          <Route exact path="/About" element={<About/>} /> 
          <Route exact path="/Formulario" element={<Formulario />} /> 
          <Route exact path="/Weather" element={<WeatherPanel />} />
          <Route exact path='/Footer' element= {<Footer /> } />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
