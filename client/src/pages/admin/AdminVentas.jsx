// src/pages/admin/AdminVentas.jsx
import React, { useEffect, useState } from 'react';

export default function AdminVentas() {
  const [ventas, setVentas] = useState([]);
  const [resumen, setResumen] = useState({ porDia: {}, porMes: {}, masVendidoPorMes: {} });

  useEffect(() => {
    // Simula datos de ventas
    const ventasEjemplo = [
      { id: 1, fecha: '2025-07-01', producto: 'Camisa UPIITA' },
      { id: 2, fecha: '2025-07-01', producto: 'Gorra' },
      { id: 3, fecha: '2025-07-02', producto: 'Camisa UPIITA' },
      { id: 4, fecha: '2025-07-02', producto: 'Hoodie gris' },
      { id: 5, fecha: '2025-07-02', producto: 'Hoodie gris' },
      { id: 6, fecha: '2025-06-15', producto: 'Gorra' },
      { id: 7, fecha: '2025-06-20', producto: 'Hoodie gris' },
    ];
    setVentas(ventasEjemplo);
    procesarResumen(ventasEjemplo);
  }, []);

  const procesarResumen = (data) => {
    const resumenDia = {};
    const resumenMes = {};
    const productosPorMes = {};

    data.forEach(({ fecha, producto }) => {
      const dia = fecha;
      const mes = fecha.slice(0, 7); // yyyy-mm

      resumenDia[dia] = (resumenDia[dia] || 0) + 1;
      resumenMes[mes] = (resumenMes[mes] || 0) + 1;

      if (!productosPorMes[mes]) productosPorMes[mes] = {};
      productosPorMes[mes][producto] = (productosPorMes[mes][producto] || 0) + 1;
    });

    // Producto más vendido por mes
    const masVendidoPorMes = {};
    for (const mes in productosPorMes) {
      const productos = productosPorMes[mes];
      const masVendido = Object.entries(productos).sort((a, b) => b[1] - a[1])[0];
      masVendidoPorMes[mes] = masVendido ? masVendido[0] : 'N/A';
    }

    setResumen({ porDia: resumenDia, porMes: resumenMes, masVendidoPorMes });
  };

  return (
    <div className="container py-5 text-black">
      <h2 className="border-bottom pb-2">📊 Reporte de Ventas</h2>

      <h5 className="mt-4">Ventas por día:</h5>
      <ul>
        {Object.entries(resumen.porDia).map(([dia, total]) => (
          <li key={dia}>
            {dia}: {total} venta{total !== 1 ? 's' : ''}
          </li>
        ))}
      </ul>

      <h5 className="mt-4">Ventas por mes:</h5>
      <ul>
        {Object.entries(resumen.porMes).map(([mes, total]) => (
          <li key={mes}>
            {mes}: {total} venta{total !== 1 ? 's' : ''}
          </li>
        ))}
      </ul>

      <h5 className="mt-4">Producto más vendido por mes:</h5>
      <ul>
        {Object.entries(resumen.masVendidoPorMes).map(([mes, producto]) => (
          <li key={mes}>
            {mes}: {producto}
          </li>
        ))}
      </ul>
    </div>
  );
}
