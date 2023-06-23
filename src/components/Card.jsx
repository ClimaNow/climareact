import React from 'react';
import Spinner from './Spinner';
import './Card.css';

const Card = ({ loadingData, showData, weather, forecast }) => {
  if (loadingData) {
    return <Spinner />;
  }

  if (!showData) {
    return <h2 className="text-light">ciudad</h2>;
  }

  const today = new Date().toLocaleDateString('es-AR');

  const renderForecastItem = (item) => {
    const forecastDate = new Date(item.date).toLocaleString('es-AR', { hour: '2-digit', minute: '2-digit' });

    return (
      <div className="col" key={item.date}>
        <p>{forecastDate}</p>
        <p className="description">
          <img src={item.day.condition.icon} alt="icon" />
          {item.day.condition.text}
        </p>
        <p className="temp">{item.day.maxtemp_c.toFixed(1)}ºC</p>
      </div>
    );
  };

  return (
    <div className="mt-5 d-flex justify-content-center align-items-center">
      <div className="container">
        <div className="card mb-3 mx-auto bg-dark text-light custom-card" style={{ height: '500px', width: '300px' }}>
          <div className="row g-0">
            <div className="col-md-4">
              <h3 className="card-title">{weather.location.name}</h3>
              <p className="card-date">{today}</p>
              <h1 className="card-temp">{weather.current.temp_c.toFixed(1)}ºC</h1>
              <p className="card-desc">
                <img src={weather.current.condition.icon} alt="icon" />
                {weather.current.condition.text}
              </p>
              <img src={weather.current.condition.icon} className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body text-start mt-2">
                <h5 className="card-text">Temperatura máxima: {weather.forecast.forecastday[0].day.maxtemp_c.toFixed(1)}ºC</h5>
                <h5 className="card-text">Temperatura mínima: {weather.forecast.forecastday[0].day.mintemp_c.toFixed(1)}ºC</h5>
                <h5 className="card-text">Sensación térmica: {weather.current.feelslike_c.toFixed(1)}ºC</h5>
                <h5 className="card-text">Humedad: {weather.current.humidity}%</h5>
                <h5 className="card-text">Velocidad del viento: {weather.current.wind_kph} km/h</h5>
              </div>
              <hr />
              <div className="row mt-4">
                {forecast.forecastday.slice(0, 3).map((item) => renderForecastItem(item))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
