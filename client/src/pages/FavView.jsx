// src/pages/FavView.jsx
import React from 'react';
import { useFavContext } from '../context/FavContext';
import { FaHeartBroken } from 'react-icons/fa';

export default function FavView() {
  const { favoritos, removeFromFav } = useFavContext();

  return (
    <div className="container py-5 text-white">
      <h2 className="border-bottom pb-2">Favoritos</h2>
      {favoritos.length === 0 ? (
        <p>No tienes productos favoritos.</p>
      ) : (
        <div className="row row-cols-1 row-cols-md-3 g-4 py-3">
          {favoritos.map((producto, index) => (
            <div className="col" key={index}>
              <div className="card h-100 bg-dark text-white">
                <img src={producto.image} className="card-img-top" alt={producto.name} />
                <div className="card-body">
                  <h5 className="card-title">{producto.name}</h5>
                  <p className="card-text">${producto.precio}</p>
                  <button className="btn btn-warning" onClick={() => removeFromFav(producto.id)}>
                    <FaHeartBroken /> Quitar
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
