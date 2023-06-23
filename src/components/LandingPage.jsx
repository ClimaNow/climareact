import React from "react";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="landing d-flex align-items-center justify-content-center vh-100" style={{ backgroundImage: `url("/Assets/wallpaper.jpg")`, backgroundSize: "cover", backgroundPosition: "center" }}>
      <div className="text-center">
        <h1 className="display-4 mb-4">¡Bienvenido!</h1>
        <p className="lead">Explora el pronóstico climático ahora mismo.</p>
        <Link to="/home">
          <button className="btn btn-primary btn-lg">Inicio</button>
        </Link>
      </div>
    </div>
  );
}

export default LandingPage;
