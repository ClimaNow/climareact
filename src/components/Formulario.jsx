import React, { useState } from 'react';

const Formulario = () => {
  const [nombre, setNombre] = useState("un nombre");
  const [correo, setCorreo] = useState("");
  const [isActive, setIsActive] = useState(true);
  const [clima, setClima] = useState("");

  const montarNombre = (nombre) => {
    const entrada = nombre.split(' ');
    let salida = "";
    entrada.forEach(dato => {
      salida += dato + ",";
    })
    return salida;
  }

  const gestionEnvio = (e) => {
    e.preventDefault();
    console.log(montarNombre(nombre));
    console.log({ nombre, correo, isActive, clima });
  }

  const gestionInputCambia = (e) => {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const nombreCampo = target.id;

    switch (nombreCampo) {
      case "nombre":
        setNombre(value);
        break;
      case "correo":
        setCorreo(value);
        break;
      case "isActive":
        setIsActive(value);
        break;
      case "clima":
        setClima(value);
        break;
      default:
        break;
    }
  }

  return (
    <>
      <div className="container">
        <h1>Formulario</h1>
        <form>
          <div className="form-group">
            <label htmlFor="nombre">Nombre</label>
            <input
              className="form-control"
              type="text"
              id="nombre"
              name="nombre"
              placeholder="Ingrese un nombre"
              value={nombre}
              onChange={gestionInputCambia}
            />
          </div>
          <div className="form-group">
            <label htmlFor="correo">Email</label>
            <input
              className="form-control"
              type="email"
              id="correo"
              name="correo"
              placeholder="Ingresa tu Email"
              value={correo}
              onChange={gestionInputCambia}
            />
          </div>
          <div className="form-check">
            <input type="checkbox"
              className="form-check-input"
              id="isActive"
              value={isActive}
              onChange={gestionInputCambia} />
            <label className="form-check-label" htmlFor="isActive">Activado</label>
          </div>
          <div className="form-group">
            <label htmlFor="clima">¿Cuál clima te gusta?</label>
            <select
              className="form-control"
              id="clima"
              value={clima}
              onChange={gestionInputCambia}>
              <option>Seleccionar</option>
              <option value="soleado">Soleado</option>
              <option value="lluvioso">Lluvioso</option>
              <option value="nevado">Nevado</option>
              <option value="nublado">Nublado</option>
              <option value="templado">Templado</option>
            </select>
          </div>
          <button
            type="button"
            className="btn btn-primary"
            onClick={gestionEnvio}>Enviar</button>
        </form >
      </div >
    </>
  );
}

export default Formulario;
