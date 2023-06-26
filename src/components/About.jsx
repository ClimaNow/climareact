import React from 'react';
import Navbar from './Navbar'; 

const About = () => {
  const personas = [
    {
      nombre: 'Amelia Guarema',
      imagen: './Assets/amelia.jpg',
      descripcion: 'Programadora en desarrollo.',
    },
    {
      nombre: 'Scarlet Lugo',
      imagen: './Assets/scarlet.jpg',
      descripcion: 'Venezolana, Casada en esta hermosa tierra que nos acobija cada día. Tengo 2 hijos hermosos y una mujer echada hacia delante. Me gusta llenarme de conocimiento y por eso estoy aquí.',
    },
    {
      nombre: 'Yuliana Camacho',
      imagen: './Assets/yuliana.jpg',
      descripcion: '',
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="container">
        <h1 className="text-primary">Acerca de Nosotros</h1>

        <div className="row">
          {personas.map((persona, index) => (
            <div className="div-center" key={index}>
              <div className="div-justifi">
                <img src={persona.imagen} className="card-img-top" alt={persona.nombre} />
                <div className="card-body">
                  <h5 className="card-title">{persona.nombre}</h5>
                  <p className="card-text">{persona.descripcion}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
