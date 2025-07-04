// src/pages/FavView.jsx
import React from 'react';
import { useFavContext } from '../context/FavContext';
import { useCartContext } from '../context/CartContext';
import { FaCartPlus, FaHeartBroken } from 'react-icons/fa';
import './CartView.css'; // Reutilizamos el mismo estilo visual

export default function FavView() {
  const { favoritos, removeFromFav, setFavoritos } = useFavContext();
  const { addToCart } = useCartContext();

  const handleVaciarFavoritos = () => {
    if (confirm('¿Seguro que quieres vaciar tus favoritos?')) {
      setFavoritos([]);
    }
  };

  const handleAgregarTodoAlCarrito = () => {
    favoritos.forEach((producto) => addToCart(producto));
    setFavoritos([]);
  };

  return (
    <div className="container py-5 text-black">
      <h2 className="border-bottom pb-2">Favoritos</h2>

      {favoritos.length === 0 ? (
        <p>No tienes productos favoritos.</p>
      ) : (
        <>
          <div className="row g-4 py-3">
            {favoritos.map((producto, index) => (
              <div className="col-12 col-sm-6 col-md-4" key={index}>
                <div className="cart-card">
                  <img src={producto.image} alt={producto.name} className="cart-img" />
                  <div className="cart-body">
                    <div>
                      <h5 className="cart-title">{producto.name}</h5>
                      <p className="cart-price">${producto.price || producto.precio}</p>
                    </div>
                    <button
                      className="btn btn-outline-danger mt-3"
                      onClick={() => removeFromFav(producto.id)}
                    >
                      <FaHeartBroken className="me-1" /> Quitar
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-actions">
            <button className="btn btn-success" onClick={handleAgregarTodoAlCarrito}>
              Agregar todo al carrito 🛒
            </button>
            <button className="btn btn-outline-danger" onClick={handleVaciarFavoritos}>
              Vaciar favoritos 💔
            </button>
          </div>
        </>
      )}
    </div>
  );
}
