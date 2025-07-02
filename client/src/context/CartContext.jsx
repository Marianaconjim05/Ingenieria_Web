import { createContext, useContext, useState, useEffect } from 'react';

// Creamos el contexto
const CartContext = createContext();

// Provider que envuelve la app y proporciona acceso al carrito
export const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  // Cargar carrito desde localStorage al iniciar
  useEffect(() => {
    const data = localStorage.getItem('carrito');
    if (data) {
      setCarrito(JSON.parse(data));
    }
  }, []);

  // Guardar cambios en localStorage
  useEffect(() => {
    localStorage.setItem('carrito', JSON.stringify(carrito));
  }, [carrito]);

  // Agregar producto al carrito
  const addToCart = (producto) => {
    setCarrito((prev) => [...prev, producto]);
  };

  // Eliminar producto del carrito por ID
  const removeFromCart = (id) => {
    setCarrito((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ carrito, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => useContext(CartContext);

