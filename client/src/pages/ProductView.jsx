import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaHeart, FaCartPlus } from 'react-icons/fa';
import cardsData from '../data/cardsData';
import './ProductView.css';

const ProductView = () => {
  const { id } = useParams();
  const product = cardsData.find((p) => p.id === parseInt(id));
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('');

  if (!product) return <h2 className="text-white">Producto no encontrado</h2>;

  const handleAddToCart = () => {
    alert(`Agregado al carrito: ${product.title}`);
  };

  const handleAddToFavorites = () => {
    alert(`Agregado a favoritos: ${product.title}`);
  };

  return (
    <div className="container mt-5 text-white">
      <div className="row g-4">
        <div className="col-md-6 text-center">
          <div className="zoom-container">
            <img
              src={product.image}
              alt={product.title}
              className="img-fluid zoom-image rounded shadow"
            />
          </div>
        </div>

        <div className="col-md-6">
          <h2>{product.title}</h2>
          <p className="text-muted">{product.description}</p>
          <h4 className="text-warning fw-bold">{product.price}</h4>

          {product.sizes?.length > 0 && (
            <div className="mb-3">
              <label className="form-label">Talla:</label>
              <select
                className="form-select"
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value)}
              >
                <option value="">Selecciona una talla</option>
                {product.sizes.map((size) => (
                  <option key={size} value={size}>{size}</option>
                ))}
              </select>
            </div>
          )}

          {product.brands?.length > 0 && (
            <div className="mb-3">
              <label className="form-label">Marca:</label>
              <select
                className="form-select"
                value={selectedBrand}
                onChange={(e) => setSelectedBrand(e.target.value)}
              >
                <option value="">Selecciona una marca</option>
                {product.brands.map((brand) => (
                  <option key={brand} value={brand}>{brand}</option>
                ))}
              </select>
            </div>
          )}

          <div className="d-flex gap-3 mt-4">
            <button onClick={() => addToCarrito(producto)}>Agregar al carrito</button>
            <button onClick={() => addToFavoritos(producto)}>Agregar a favoritos</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductView;

