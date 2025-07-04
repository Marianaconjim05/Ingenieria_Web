// src/pages/admin/AdminAuxiliares.jsx
import React, { useState } from 'react';

export default function AdminAuxiliares() {
  const [auxiliares, setAuxiliares] = useState([]);
  const [nuevoAuxiliar, setNuevoAuxiliar] = useState({
    nombre: '',
    correo: '',
    contraseña: ''
  });

  const handleAgregar = () => {
    const { nombre, correo, contraseña } = nuevoAuxiliar;
    if (!nombre || !correo || !contraseña) {
      alert('Completa todos los campos');
      return;
    }

    const auxiliar = { ...nuevoAuxiliar, id: Date.now() };
    setAuxiliares([...auxiliares, auxiliar]);
    setNuevoAuxiliar({ nombre: '', correo: '', contraseña: '' });
  };

  const handleEliminar = (id) => {
    const confirm = window.confirm('¿Eliminar este auxiliar?');
    if (confirm) {
      setAuxiliares(auxiliares.filter(a => a.id !== id));
    }
  };

  return (
    <div className="container py-5 text-black">
      <h2 className="border-bottom pb-2">👤 Gestión de Auxiliares</h2>

      <h5 className="mt-4">Registrar nuevo auxiliar</h5>
      <input
        className="form-control mb-2"
        placeholder="Nombre"
        value={nuevoAuxiliar.nombre}
        onChange={(e) => setNuevoAuxiliar({ ...nuevoAuxiliar, nombre: e.target.value })}
      />
      <input
        className="form-control mb-2"
        placeholder="Correo"
        type="email"
        value={nuevoAuxiliar.correo}
        onChange={(e) => setNuevoAuxiliar({ ...nuevoAuxiliar, correo: e.target.value })}
      />
      <input
        className="form-control mb-3"
        placeholder="Contraseña"
        type="password"
        value={nuevoAuxiliar.contraseña}
        onChange={(e) => setNuevoAuxiliar({ ...nuevoAuxiliar, contraseña: e.target.value })}
      />
      <button className="btn btn-success mb-4" onClick={handleAgregar}>Agregar auxiliar ✅</button>

      <h5>Lista de auxiliares registrados:</h5>
      {auxiliares.length === 0 ? (
        <p>No hay auxiliares aún.</p>
      ) : (
        <ul className="list-group">
          {auxiliares.map((aux) => (
            <li key={aux.id} className="list-group-item d-flex justify-content-between align-items-center">
              <span>
                <strong>{aux.nombre}</strong> – {aux.correo}
              </span>
              <button className="btn btn-danger btn-sm" onClick={() => handleEliminar(aux.id)}>
                Eliminar ❌
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
