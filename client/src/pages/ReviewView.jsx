// src/pages/ReviewView.jsx
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function ReviewView() {
  const { state } = useLocation();
  const productos = state?.productos || [];
  const navigate = useNavigate();

  const [calificaciones, setCalificaciones] = useState(
    productos.map(() => ({ calificacion: '', comentario: '' }))
  );

  const handleChange = (index, field, value) => {
    const updated = [...calificaciones];
    updated[index][field] = value;
    setCalificaciones(updated);
  };

  const handleEnviar = () => {
    if (calificaciones.some(item => item.calificacion === '')) {
      alert("Por favor califica todos los productos.");
      return;
    }

    console.log("Calificaciones enviadas:", calificaciones);
    alert("¡Gracias por tu reseña!");

    navigate('/cliente'); // Redirige al cliente al home
  };

  return (
    <div className="container py-5 text-black">
      <h2 className="border-bottom pb-2">Califica tus productos</h2>

      {productos.length === 0 ? (
        <p>No hay productos para calificar.</p>
      ) : (
        <div className="row row-cols-1 row-cols-md-2 g-4">
          {productos.map((producto, index) => (
            <div className="col" key={index}>
              <div className="card h-100">
                <img
                  src={producto.image}
                  alt={producto.name}
                  className="card-img-top"
                  style={{ height: '250px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <h5 className="card-title">{producto.name}</h5>
                  <label>Calificación (1 a 5)</label>
                  <input
                    type="number"
                    min="1"
                    max="5"
                    className="form-control mb-2"
                    value={calificaciones[index].calificacion}
                    onChange={(e) =>
                      handleChange(index, 'calificacion', e.target.value)
                    }
                  />
                  <label>Comentario</label>
                  <textarea
                    className="form-control"
                    rows="2"
                    value={calificaciones[index].comentario}
                    onChange={(e) =>
                      handleChange(index, 'comentario', e.target.value)
                    }
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {productos.length > 0 && (
        <div className="text-end mt-4">
          <button className="btn btn-primary" onClick={handleEnviar}>
            Enviar calificaciones ✍️
          </button>
        </div>
      )}
    </div>
  );
}
