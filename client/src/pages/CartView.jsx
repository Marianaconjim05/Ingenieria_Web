// src/pages/CartView.jsx
import React from 'react';
import { useCartContext } from '../context/CartContext';
import { FaTrash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function CartView() {
  const { carrito, removeFromCart, clearCart } = useCartContext();
  const navigate = useNavigate();

  const handleVaciarCarrito = () => {
    if (confirm('¿Estás seguro de vaciar el carrito?')) {
      clearCart();
    }
  };

  const handleComprarAhora = () => {
    navigate('/checkout');
  };

  return (
    <div className="container py-5 text-white">
      <h2 className="border-bottom pb-2">Carrito</h2>

      {carrito.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <>
          <div className="row row-cols-1 row-cols-md-3 g-4 py-3">
            {carrito.map((producto, index) => (
              <div className="col" key={index}>
                <div className="card bg-dark text-white shadow rounded">
                  <img
                    src={producto.image}
                    className="card-img-top"
                    alt={producto.name}
                    style={{
                      height: '220px',
                      objectFit: 'cover',
                      width: '100%',
                      borderTopLeftRadius: '0.5rem',
                      borderTopRightRadius: '0.5rem',
                    }}
                  />
                  <div className="card-body d-flex flex-column align-items-center text-center">
                    <h5 className="card-title text-truncate">{producto.name}</h5>
                    <p className="card-text fw-bold text-warning">
                      ${producto.price || producto.precio}
                    </p>
                    <button
                      className="btn btn-danger mt-2"
                      onClick={() => removeFromCart(producto.id)}
                    >
                      <FaTrash className="me-1" /> Eliminar
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 d-flex gap-3 justify-content-end">
            <button className="btn btn-outline-danger" onClick={handleVaciarCarrito}>
              Vaciar carrito 🗑️
            </button>
            <button className="btn btn-success" onClick={handleComprarAhora}>
              Comprar ahora 💳
            </button>
          </div>
        </>
      )}
    </div>
  );
}
