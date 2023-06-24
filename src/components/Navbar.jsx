import React from 'react';


const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black text-light mb-5">
      <div className="container-fluid">
        <h3 className="navbar-brand">
          <img src="./Assets/LogoClima-Now.png" alt="aqui hay un logo" width={100} />
          Pronóstico Climático
        </h3>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="/home">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/formulario">Formulario</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/about">Sobre Nosotros</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
