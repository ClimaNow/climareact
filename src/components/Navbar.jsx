import React from 'react';

const NavBar = () => {
    return(

        <nav className="navbar bg-black text-light mb-5">
            <div className="container-fluid" >
                <h3 className="">
                  <img src="./Logo.png" alt="aqui hay un logo" width={140} />
                    Pronóstico Climático
                </h3>
                <h1 className="">Home</h1>
                <h1 className=''>Formulario</h1>
                <h1 className=''>Sobre Nosotros</h1>
            </div>

        </nav>

    );
}

export default NavBar;