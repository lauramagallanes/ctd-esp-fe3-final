import React, { useState } from 'react'

const Form = () => {
  const [usuario, setUsuario] = useState({
    nombreCompleto: "",
    email: "",
  });

  const [mostrarMensaje, setMostrarMensaje] = useState(false);
  const [error, setError] = useState(false);
  console.log(usuario);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (usuario.nombreCompleto.trim().length > 5 &&
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(usuario.email)) {
      setMostrarMensaje(true);
      setError(false);
    } else {
      setMostrarMensaje(false);
      setError(true);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Nombre Completo:</label>
        <input
          type="text"
          value={usuario.nombreCompleto}
          onChange={(event) =>
            setUsuario({ ...usuario, nombreCompleto: event.target.value })
          } />
        <label>Email:</label>
        <input
          type="text"
          value={usuario.email}
          onChange={(event) =>
            setUsuario({ ...usuario, email: event.target.value })
          }
        />
        <button>Enviar</button>
        {error ? (
          <h4 style={{ color: "red" }}> Por favor verifique su información nuevamente</h4>
        ) : null
        }
      </form>
      {mostrarMensaje && <h4> Gracias {usuario.nombreCompleto}, te contactaremos cuando antes vía mail</h4>}
    </div>
  );
};

export default Form;
