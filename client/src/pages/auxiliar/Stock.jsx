

import React, { useState } from 'react';
import NavbarAuxiliar from '../../components/NavbarAuxiliar';

export default function Stock() {
  const [productos, setProductos] = useState([
    {
      id: 1,
      nombre: 'Camiseta Oversize',
      descripcion: 'Camiseta de algodón premium',
      precio: 349,
      stock: 15,
      imagen: 'https://i.ibb.co/0yLsv0L/camisa1.jpg',
    },
    {
      id: 2,
      nombre: 'Sudadera Negra',
      descripcion: 'Sudadera cómoda con gorro',
      precio: 599,
      stock: 8,
      imagen: 'https://i.ibb.co/f8ZnZt0/sudadera2.jpg',
    },
  ]);

  return (
    <>
      <NavbarAuxiliar />
      <div className="container py-5 text-black">
        <h2 className="border-bottom pb-3">Stock de Productos 📦</h2>

        {productos.length === 0 ? (
          <p>No hay productos registrados.</p>
        ) : (
          <div className="row row-cols-1 row-cols-md-2 g-4">
            {productos.map((prod) => (
              <div className="col" key={prod.id}>
                <div className="card h-100">
                  <img
                    src={prod.imagen}
                    alt={prod.nombre}
                    className="card-img-top"
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{prod.nombre}</h5>
                    <p className="card-text">{prod.descripcion}</p>
                    <p className="card-text">Precio: ${prod.precio}</p>
                    <p className="card-text">Stock actual: {prod.stock}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
