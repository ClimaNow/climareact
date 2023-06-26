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
      descripcion: 'Programadora en Desarrollo',
    },
    {
      nombre: 'Yuliana Camacho',
      imagen: './Assets/yuliana.jpg',
      descripcion: 'Programadora en desarrollo',
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="container">
        <h1 className="text-primary">Acerca de Nosotros</h1>

        <div className="row" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gridGap: '1rem' }}>
          {personas.map((persona, index) => (
            <div className="card" key={index}>
              <img src={persona.imagen} className="card-img-top" alt={persona.nombre} />
              <div className="card-body">
                <h5 className="card-title">{persona.nombre}</h5>
                <p className="card-text" style={{ marginTop: '4rem' }}>{persona.descripcion}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
