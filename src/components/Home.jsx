import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Navbar from './Navbar';
import './Home.css';
import WeatherPanel from './WeatherPanel';

const Home = () => {
  return (
    <div className="home_main" style={{ background: 'linear-gradient(to bottom right, #888888, #3399ff)', minHeight: '100vh' }}>

      <Navbar />

      <div className="container">
        <div className="row">
          <div className="col-1">
            <Link to="/" className="arrow-back">
              <FontAwesomeIcon icon={faArrowLeft} className="arrow-icon" />
            </Link>
          </div>
          <div className="col-11">
            <h1 className="text-center mt-3">Clima-Now</h1>
          </div>
        </div>
      </div>

      <div className="container d-flex justify-content-center align-items-center">
        <div className="row">
          <div className="col">
            <div className="card custom-card">
              <div className="card-body">
                <WeatherPanel />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
