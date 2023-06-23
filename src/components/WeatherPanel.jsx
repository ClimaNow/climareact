import React, { useState } from 'react';
import Form from './Form';
import Card from './Card';

const WeatherPanel = () => {
  const apiKey = 'Y726c54b184c24333b91182410231406'; 

  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);

  const getLocation = async (loc) => {
    setLoading(true);

    const weatherUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${loc}&lang=es`;
    const forecastUrl = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${loc}&days=3&lang=es`;

    try {
      const weatherResponse = await fetch(weatherUrl);
      const weatherData = await weatherResponse.json();

      const forecastResponse = await fetch(forecastUrl);
      const forecastData = await forecastResponse.json();

      setWeather(weatherData);
      setForecast(forecastData);
      setLoading(false);
      setShow(true);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setShow(false);
    }
  };

  return (
    <div>
      <Form newLocation={getLocation} />
      <Card showData={show} loadingData={loading} weather={weather} forecast={forecast} />
    </div>
  );
};

export default WeatherPanel;
