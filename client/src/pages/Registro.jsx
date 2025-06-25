import { useState } from 'react';
import './Registro.css';

export default function Registro() {
  const [datos, setDatos] = useState({
    nombre: '',
    apellido: '',
    correo: '',
    password: '',
    telefono: '',
    fechaNacimiento: '',
  });

  const handleChange = (e) => {
    setDatos({ ...datos, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos enviados:', datos);
    // Aquí irá la lógica para enviar al backend
  };

  return (
    <div className="registro-container">
      <form className="registro-form" onSubmit={handleSubmit}>
        <h2 className="mb-4">Registro</h2>

        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input type="text" name="nombre" className="form-control" onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label className="form-label">Apellido</label>
          <input type="text" name="apellido" className="form-control" onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label className="form-label">Correo electrónico</label>
          <input type="email" name="correo" className="form-control" onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label className="form-label">Contraseña</label>
          <input type="password" name="password" className="form-control" onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label className="form-label">Teléfono (opcional)</label>
          <input type="tel" name="telefono" className="form-control" onChange={handleChange} />
        </div>

        <div className="mb-3">
          <label className="form-label">Fecha de nacimiento (opcional)</label>
          <input type="date" name="fechaNacimiento" className="form-control" onChange={handleChange} />
        </div>

        <button type="submit" className="btn btn-success w-100">Registrarse</button>

        <div className="text-center mt-3">
          <a href="/login">¿Ya tienes cuenta? Inicia sesión</a>
        </div>
      </form>
    </div>
  );
}
