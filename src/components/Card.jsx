import React from 'react';
import './Card.css';
import Spinner from './Spinner';

const Card = ({ loadingData, weatherData }) => {
  if (loadingData) {
    return <div>Cargando...</div>;
  }

  if (!weatherData) {
    return <Spinner />;
  }
  
  return (

    <div className="col-md-4">
      <div className="card-body text-start mt-2 text-dark">
      <h2>Información del clima:</h2>
      
      <div className="data-container text-start mt-2 text-dark">
      <p>Temperatura: {weatherData.current.temp_c} °C</p>
      <p>Humedad: {weatherData.current.humidity}%</p>
      <p>Sensación Térmica: {weatherData.current.feelslike}°</p>
      <p>Nubosidad:{weatherData.current.cloud} </p>
      <p>Precipitación:{weatherData.current.precip_mm} </p>
      </div>
      </div>
    </div>
  );
};

export default Card;
