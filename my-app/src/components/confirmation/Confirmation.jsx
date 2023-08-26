import React, { useState } from 'react';
import './confirmation.css';

const Confirmation = () => {
  const [invitados, setInvitados] = useState([]);
  const [invitadoSeleccionado, setInvitadoSeleccionado] = useState(null);
  const [formularioVisible, setFormularioVisible] = useState(false);

  const buscarInvitados = () => {
    const nombre = document.getElementById('nombre').value.toLowerCase(); 

    if (nombre.trim() === '') {
      alert('Por favor, ingresa un nombre válido para buscar.');
      return;
    }

    if (nombre.length < 3) {
      alert('Por favor, ingresa un nombre válido para buscar.');
      return;
    }

    fetch('https://walsil-db1-arg.onrender.com/api/invitados/')
      .then((response) => response.json())
      .then((data) => {
        const invitados = data.data.filter(
          (invitado) => invitado.nombre.toLowerCase().includes(nombre) && invitado.habilitado && !invitado.completado
        );

        if (invitados.length > 0) {
          setInvitados(invitados);
          setInvitadoSeleccionado(null);
          setFormularioVisible(false);
        } else {
          alert(
            'Ups! Parece que no estás en la lista o ya completaron tu formulario. En caso de que haya un error, contáctate con Walter o Silvia al final de la página.'
          );
        }
      })
      .catch((error) => {
        console.error('Error al obtener los datos del API:', error);
        alert('El servicio por el momento no esta funcionando de manera correcta, intente dentro de unos minutos')
      });
  };

  const mostrarFormulario = (nombre, apellido) => {
    fetch('https://walsil-db1-arg.onrender.com/api/invitados/')
      .then((response) => response.json())
      .then((data) => {
        const invitado = data.data.find(
          (invitado) => invitado.nombre === nombre && invitado.apellido === apellido
        );

        if (invitado) {
          
          setInvitadoSeleccionado(invitado);
          setFormularioVisible(true);
        } else {
          alert('No se encontró el invitado.');
        }
      })
      .catch((error) => {
        console.error('Error al obtener los datos del API:', error);
      });
  };

  const capturar = () => {
    const nombre = document.getElementById('txtNombre').value;
    const apellido = document.getElementById('txtApellido').value;
    const asistiraSi = document.getElementById('asistenciaSi').checked;
    const asistira = asistiraSi ? 1 : 0;
    const telefono = document.getElementById('tel').value;
    const comidaRadio = document.querySelector('input[name="comida"]:checked');
    const comida = comidaRadio ? comidaRadio.value : '';
    const dni = document.getElementById('txtDNI').value;
    const gf = document.getElementById('txtGF').value;
    const anotaciones1 = document.getElementById('txtAnotaciones').value;
  
    if (!nombre || !apellido || !telefono || !comida || !dni || !gf) {
      alert('Por favor, complete todos los campos obligatorios.');
      return;
    }
  
    const invitado = {
      nombre: nombre,
      apellido: apellido,
      asistira: asistira,
      telefono: telefono,
      comida: comida,
      completado: true,
      DNI: dni,
      grupo_familiar: gf,
      habilitado: true,
      anotaciones: anotaciones1,
    };
  
    alert('Tu formulario fue enviado exitosamente.');
    console.log('Datos capturados:', invitado);

    const url = `https://walsil-db1-arg.onrender.com/api/invitados/${invitadoSeleccionado.id}`;
    const options = {
      body: JSON.stringify(invitado),
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      redirect: 'follow',
    };

    fetch(url, options)
      .then(function () {
        window.location.reload(); 
      })
      .catch((err) => {
        console.error(err);
        alert('Error al cargar, contáctate con Walter o Silvia si el problema persiste.');
      });
  };

  const enviarPatente = () => {
    const url = 'https://walsil-db1-arg.onrender.com/api/patentes/';
    const patenteValue = document.getElementById('txtPatente').value;
    const titularValue = document.getElementById('txtTitular').value;
  
    if (!patenteValue || !titularValue) {
      alert('Por favor, complete todos los campos obligatorios.');
      return;
    }
  
    const patenteData = {
      patente: patenteValue,
      titular: titularValue,
    };
    const options = {
      body: JSON.stringify(patenteData),
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      redirect: 'follow',
    };

    fetch(url, options)
      .then(() => {
        alert('Patente enviada exitosamente.');
      })
      .catch((error) => {
        console.error(error);
        alert('Error al enviar la patente. Por favor, inténtalo nuevamente.');
      });
  };

  return (
    <section id="confirmation">
      <div className="container confirmation__container">
        <div className="title long-item">
          <h1>Confirmación de asistencia</h1>
          <h4>
            Ingresa solo tu nombre sin espacios y luego selecciona el usuario correspondiente para llenar el formulario.
            <br />
            Luego de llenarlo, haz clic dos veces en el botón "Guardar" para subir tus datos.
          </h4>
        </div>
        <div className="group__selector__content">
          <div className="fgroup__search">
            <label htmlFor="nombre">Ingresa solo tu nombre sin espacios:</label>
            <br />
            <input type="text" id="nombre" />
            <br />
            <button onClick={buscarInvitados}>Buscar nombre</button>
          </div>
          <div id="invitados-container" className="guest__selector">
            {invitados.map((invitado) => (
              <div key={invitado.id}>
                <button
                  className="guest-name"
                  data-nombre={invitado.nombre}
                  data-apellido={invitado.apellido}
                  onClick={() => mostrarFormulario(invitado.nombre, invitado.apellido)}
                >
                  {invitado.nombre} {invitado.apellido}
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className="form__content">
          {formularioVisible && invitadoSeleccionado && (
            <div>
              <h3>Formulario</h3>
              <form className="grid-container">
                <div className="grid-item">
                  <label htmlFor="txtNombre">Nombre</label>
                  <input
                    type="text"
                    className="form-control"
                    name="txtNombre"
                    id="txtNombre"
                    defaultValue={invitadoSeleccionado.nombre}
                    disabled
                  />
                  <br />
                </div>
                <div className="grid-item">
                  <label htmlFor="txtApellido">Apellido</label>
                  <input
                    type="text"
                    className="form-control"
                    name="txtApellido"
                    id="txtApellido"
                    defaultValue={invitadoSeleccionado.apellido}
                    disabled
                  />
                  <br />
                </div>
                <div className="grid-item">
                  <label htmlFor="txtDNI">DNI:</label>
                  <input type="text" className="form-control" name="txtDNI" id="txtDNI" />
                </div>
                <div className="grid-item">
                  <label htmlFor="tel">Número de contacto</label>
                  <input type="tel" name="tel" id="tel" />
                </div>
                <div className="grid-item radioOptions">
                  <label htmlFor="asistira">¿Asistirá?</label>
                  <div className="radioOption">
                    <input type="radio" name="asistira" id="asistenciaSi" value="Si" />
                    <label htmlFor="asistenciaSi">Si</label>
                  </div>
                  <div className="radioOption">
                    <input type="radio" name="asistira" id="asistenciaNo" value="No" />
                    <label htmlFor="asistenciaNo">No</label>
                  </div>
                </div>
                <div className="grid-item radioOptions" id="comida">
                  <label htmlFor="asistira">Preferencia en la comida</label>
                  <div className="radioOption">
                    <input type="radio" name="comida" id="normal" value="Sin preferencia" />
                    <label htmlFor="normal">Sin preferencia</label>
                  </div>
                  <div className="radioOption">
                    <input type="radio" name="comida" id="celiaco" value="Celiaco" />
                    <label htmlFor="celiaco">Celiaco</label>
                  </div>
                  <div className="radioOption">
                    <input type="radio" name="comida" id="vegano" value="Vegano" />
                    <label htmlFor="vegano">Vegano</label>
                  </div>
                </div>
                <div className="grid-item hidden">
                  <input
                    type="text"
                    className="form-control"
                    name="txtGF"
                    id="txtGF"
                    defaultValue={invitadoSeleccionado.grupo_familiar}
                    disabled
                  />
                  <br />
                </div>
                <div className="grid-item hidden">
                  <input
                    type="text"
                    className="form-control"
                    name="txtAnotaciones"
                    id="txtAnotaciones"
                    defaultValue={invitadoSeleccionado.anotaciones}
                    disabled
                  />
                  <br />
                </div>
                <div className="button">
                  <button type="button" className="btn1" onClick={capturar}>
                    Guardar
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
        <div className="form__patente">
          <form className="grid-container">
            <div className="grid-item long-item">
              <h3>
                En caso de que vengas con un vehículo personal, te pedimos que cargues la patente y la persona de referencia del vehículo para poder dejarlo en el recinto del salón.
              </h3>
            </div>
            <div className="grid-item">
              <label htmlFor="txtPatente">Patente:</label>
              <input type="text" className="form-control" name="txtPatente" id="txtPatente" />
            </div>
            <div className="grid-item">
              <label htmlFor="txtTitular">Persona referente al vehículo</label>
              <input type="text" name="txtTitular" id="txtTitular" />
            </div>
            <div className="grid-item long-item">
              <button type="button" className="btn1" onClick={enviarPatente}>
                Subir datos
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Confirmation;
