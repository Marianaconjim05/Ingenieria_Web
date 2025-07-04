// src/pages/admin/AdminProductos.jsx
import React, { useState } from 'react';
import FormularioProducto from '../../components/FormularioProducto';

export default function AdminProductos() {
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

  const handleEliminar = (id) => {
    if (window.confirm('¿Eliminar este producto?')) {
      setProductos(productos.filter((p) => p.id !== id));
    }
  };

  return (
    <div className="container py-5 text-black">
      <h2 className="border-bottom pb-3">Gestión de Productos 🛍️</h2>
      <FormularioProducto producto={nuevoProducto} setProducto={setNuevoProducto} onAgregar={handleAgregar} />
      <hr />
      <h5>Productos registrados:</h5>
      {productos.length === 0 ? <p>No hay productos aún.</p> : (
        <div className="row row-cols-1 row-cols-md-2 g-4">
          {productos.map((prod) => (
            <div className="col" key={prod.id}>
              <div className="card h-100">
                {prod.imagen && (
                  <img src={prod.imagen} alt={prod.nombre} className="card-img-top" style={{ height: '200px', objectFit: 'cover' }} />
                )}
                <div className="card-body">
                  <h5 className="card-title">{prod.nombre}</h5>
                  <p>{prod.descripcion}</p>
                  <p>Precio: ${prod.precio}</p>
                  <p>Stock: {prod.stock}</p>
                  <button className="btn btn-danger" onClick={() => handleEliminar(prod.id)}>Eliminar ❌</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
