import React, { useState, useEffect } from 'react';
import Card from './Card';
import Form from './Form';
import axios from 'axios';

const WeatherPanel = () => {
  const apiKey = '726c54b184c24333b91182410231406'; //Esta es la ApiKey

  const [province, setProvince] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);

  const searchWeather = async (loc) => {
    setLoading(true);

    try {
      const response = await axios.get(
        `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${province}&aqi=no`
      );//Aqu´realizamos la petición

      setWeatherData(response.data);
      setLoading(false);
      setShow(true);
    } catch (error) {
      console.error(error);
      setWeatherData(null);
      setLoading(false);
      setShow(false);
    }
  };

  useEffect(() => {

  }, []);

  return (
    <div>
      <Form newLocation={setProvince} searchWeather={searchWeather} />
      {show && <Card loadingData={loading} weatherData={weatherData} />}
    </div>
  );
};

export default WeatherPanel;
