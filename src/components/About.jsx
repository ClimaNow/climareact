import React from 'react';

const About = () => {
  const personas = [
    {
      nombre: 'Amelia Guarema',
      imagen: 'profile1.jpg',
      descripcion: 'Breve descripción de la persona 1.',
    },
    {
      nombre: 'Scarlet Lugo',
      imagen: 'profile2.jpg',
      descripcion: 'Venezolana, Casada en esta hermossa tierra que nos acobija cada día. Tengo 2 hijos hermosos y una mujer echada hacia delante.Me gusta llenarme de conocimiento y por eso estoy aquí.',
    },
    {
      nombre: 'Yuliana Camacho',
      imagen: 'profile3.jpg',
      descripcion: '',
    },
    {
      nombre: 'Maygle',
      imagen: 'profile4.jpg',
      descripcion: 'Breve descripción de la persona 4.',
    },
  ];

  return (
    <div className="container">
      <h1 className="text-primary">Acerca de Nosotros</h1>

      <div className="row">
        {personas.map((persona, index) => (
          <div className="col-md-4" key={index}>
            <div className="card bg-gradient text-light border-primary">
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
  );
};

export default About;
