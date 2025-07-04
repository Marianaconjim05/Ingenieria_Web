// src/context/CartContext.jsx
import { createContext, useContext, useEffect, useState } from "react";

const CarritoContext = createContext();

export const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  useEffect(() => {
    const storedCart = localStorage.getItem("carrito");
    if (storedCart) {
      setCarrito(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]);

  const addToCarrito = (producto) => {
    const exists = carrito.find((item) => item.id === producto.id);
    if (!exists) {
      setCarrito([...carrito, producto]);
    }
  };

  const removeFromCarrito = (id) => {
    setCarrito(carrito.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCarrito([]);
  };

  return (
    <CarritoContext.Provider
      value={{ carrito, addToCarrito, removeFromCarrito, clearCart }}
    >
      {children}
    </CarritoContext.Provider>
  );
};

export const useCartContext = () => {
  const { carrito, addToCarrito, removeFromCarrito, clearCart } = useContext(CarritoContext);
  return {
    carrito,
    addToCart: addToCarrito,
    removeFromCart: removeFromCarrito,
    clearCart,
  };
};
