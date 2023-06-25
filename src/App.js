import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import LandingPage from './components/LandingPage';
import About from './components/About';
<<<<<<< HEAD
import 'bootstrap/dist/css/bootstrap.css';
=======
import Formulario from './components/Formulario';
import WeatherPanel from './components/WeatherPanel';
>>>>>>> 703d4888d79120ef7fba88cc8f3a8b8f335aa3f6



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/Home" element={<Home />} />
          <Route exact path="/formulario" element={<Formulario/>} />
          <Route exact path='/About'  element={<About/>}/>
          <Route exact path="/weather" element={<WeatherPanel />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
