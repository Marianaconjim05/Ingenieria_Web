import React, { useState } from 'react';
import { useCartContext } from '../context/CartContext';
import './CheckoutView.css';

export default function CheckoutView() {
  const { carrito, setCarrito } = useCartContext();
  const [direccion, setDireccion] = useState('');
  const [metodoPago, setMetodoPago] = useState('');

  const handleComprar = () => {
    if (!direccion || !metodoPago) {
      alert('Completa todos los campos');
      return;
    }

    alert('¡Compra realizada con éxito!');
    setCarrito([]); // Vacía el carrito
  };

  return (
    <div className="container py-5 text-white">
      <h2 className="border-bottom pb-2">Finalizar compra</h2>

      <div className="mb-3">
        <label className="form-label">Dirección de envío:</label>
        <textarea
          className="form-control"
          value={direccion}
          onChange={(e) => setDireccion(e.target.value)}
          rows="3"
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Método de pago:</label>
        <select
          className="form-select"
          value={metodoPago}
          onChange={(e) => setMetodoPago(e.target.value)}
        >
          <option value="">Selecciona uno</option>
          <option value="tarjeta">Tarjeta de crédito/débito</option>
          <option value="oxxo">OXXO</option>
          <option value="paypal">PayPal</option>
        </select>
      </div>

      <button className="btn btn-success mt-3" onClick={handleComprar}>
        Confirmar compra 🛍️
      </button>
    </div>
  );
}
