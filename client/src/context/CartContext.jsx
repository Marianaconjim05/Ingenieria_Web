import { createContext, useContext, useState, useEffect } from 'react';

// ✅ Define el contexto ANTES de usarlo
const CartContext = createContext();

export const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem("carrito");
    if (data) {
      setCarrito(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]);

  const addToCart = (producto) => {
    setCarrito((prev) => [...prev, producto]);
  };

  const removeFromCart = (id) => {
    setCarrito((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ carrito, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

// ✅ Hook personalizado exportado correctamente
export const useCartContext = () => useContext(CartContext);
