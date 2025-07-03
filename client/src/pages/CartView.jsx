// src/pages/CartView.jsx
import React from 'react';
import { useCartContext } from '../context/CartContext';
import { FaTrash } from 'react-icons/fa';

export default function CartView() {
  const { carrito, removeFromCart } = useCartContext();
  console.log("Productos en carrito:", carrito);

  return (
    <div className="container py-5 text-black">
      <h2 className="border-bottom pb-2">Carrito</h2>
      {carrito.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <div className="row row-cols-1 row-cols-md-3 g-4 py-3">
          {carrito.map((producto, index) => (
            <div className="col" key={index}>
              <div className="card h-100 bg-dark text-black">
                <img src={producto.image} className="card-img-top" alt={producto.name} />
                <div className="card-body">
                  <h5 className="card-title">{producto.name}</h5>
                  <p className="card-text">${producto.precio}</p>
                  <button className="btn btn-danger" onClick={() => removeFromCart(producto.id)}>
                    <FaTrash /> Eliminar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
