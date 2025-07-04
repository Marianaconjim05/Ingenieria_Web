// src/pages/auxiliar/AgregarProducto.jsx
import React, { useState } from 'react';
import FormularioProducto from '../../components/FormularioProducto';

export default function AgregarProducto() {
  const [productos, setProductos] = useState([]);
  const [nuevoProducto, setNuevoProducto] = useState({
    nombre: '', descripcion: '', precio: '', stock: '', imagen: ''
  });

  const handleAgregar = () => {
    if (!nuevoProducto.nombre || !nuevoProducto.precio) {
      alert('Faltan campos obligatorios');
      return;
    }
    const nuevo = { ...nuevoProducto, id: Date.now() };
    setProductos([...productos, nuevo]);
    setNuevoProducto({ nombre: '', descripcion: '', precio: '', stock: '', imagen: '' });
  };

  return (
    <div className="container py-5 text-black">
      <h2 className="border-bottom pb-3">Agregar Productos 🛠️</h2>
      <FormularioProducto producto={nuevoProducto} setProducto={setNuevoProducto} onAgregar={handleAgregar} />
    </div>
  );
}
