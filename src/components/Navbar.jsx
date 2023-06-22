import React from 'react';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black text-light mb-5">
      <div className="container-fluid">
        <h3 className="navbar-brand">
          <img src="./Logo.png" alt="aqui hay un logo" width={140} />
          Pronóstico Climático
        </h3>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Formulario</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Sobre Nosotros</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
