// ✅ src/components/FormularioProducto.jsx
import React from 'react';

export default function FormularioProducto({ producto, setProducto, onAgregar }) {
  return (
    <div className="mb-4">
      <h5>Agregar nuevo producto</h5>
      <input
        className="form-control mb-2"
        placeholder="Nombre"
        value={producto.nombre}
        onChange={(e) => setProducto({ ...producto, nombre: e.target.value })}
      />
      <textarea
        className="form-control mb-2"
        placeholder="Descripción"
        style={{
          color: '#ffffff',
          backgroundColor: '#343a40',
          border: '1px solid #ced4da',
          padding: '10px',
          borderRadius: '4px'
        }}
        value={producto.descripcion}
        onChange={(e) => setProducto({ ...producto, descripcion: e.target.value })}
      />
      <input
        className="form-control mb-2"
        placeholder="Precio"
        type="number"
        value={producto.precio}
        onChange={(e) => setProducto({ ...producto, precio: e.target.value })}
      />
      <input
        className="form-control mb-2"
        placeholder="Stock"
        type="number"
        value={producto.stock}
        onChange={(e) => setProducto({ ...producto, stock: e.target.value })}
      />
      <input
        className="form-control mb-2"
        placeholder="URL Imagen"
        value={producto.imagen}
        onChange={(e) => setProducto({ ...producto, imagen: e.target.value })}
      />
      <button className="btn btn-success" onClick={onAgregar}>
        Agregar producto ✅
      </button>
    </div>
  );
}
