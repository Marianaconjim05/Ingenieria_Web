// src/pages/admin/AdminPedidos.jsx
import React, { useEffect, useState } from 'react';

export default function AdminPedidos() {
  const [pedidos, setPedidos] = useState([]);

  useEffect(() => {
    const pedidosGuardados = JSON.parse(localStorage.getItem('pedidos')) || [];
    setPedidos(pedidosGuardados);
  }, []);

  return (
    <div className="container py-5 text-black">
      <h2 className="border-bottom pb-3">Pedidos realizados 📦</h2>

      {pedidos.length === 0 ? (
        <p className="text-muted">No hay pedidos realizados aún.</p>
      ) : (
        <div className="row row-cols-1 row-cols-md-2 g-4">
          {pedidos.map((pedido) => (
            <div className="col" key={pedido.id}>
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">Pedido #{pedido.id}</h5>
                  <p className="card-text">📅 Fecha: {pedido.fecha}</p>
                  <p className="card-text">🚚 Estado: <strong>{pedido.estado}</strong></p>
                  <p className="card-text">📆 Fecha estimada de entrega: {pedido.fechaEntrega}</p>

                  <hr />

                  <h6>Productos:</h6>
                  <ul>
                    {pedido.productos.map((prod, index) => (
                      <li key={index}>{prod.title || prod.name} - ${prod.price}</li>
                    ))}
                  </ul>

                  <hr />

                  <h6>Dirección:</h6>
                  <p>
                    {pedido.direccion.calle}, {pedido.direccion.ciudad}, {pedido.direccion.estado},<br />
                    {pedido.direccion.cod_postal}, {pedido.direccion.pais}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
