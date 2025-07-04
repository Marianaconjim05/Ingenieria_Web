// src/pages/Client.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import CustomCards from '../components/CustomCards';

export default function Cliente() {
  const navigate = useNavigate();

  return (
    <div style={{ backgroundColor: '#000', minHeight: '100vh' }}>
      <div className="container py-5 text-white">
        <h2 className="border-bottom pb-3">👤 Panel del Cliente</h2>

        <div className="d-grid gap-3 mt-4">
          <button className="btn btn-outline-success" onClick={() => navigate('/cliente/estatus')}>
            Ver estatus de pedido 📦
          </button>
        </div>

        <hr className="my-5" />

        <h3 className="text-white mb-4">Productos recomendados</h3>
        <CustomCards />
      </div>
    </div>
  );
}
