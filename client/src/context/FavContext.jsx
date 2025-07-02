// src/context/FavContext.jsx
import { createContext, useContext, useState, useEffect } from 'react';

const FavContext = createContext();

export const FavProvider = ({ children }) => {
  const [favoritos, setFavoritos] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem("favoritos");
    if (data) {
      setFavoritos(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
  }, [favoritos]);

  const addToFav = (producto) => {
    setFavoritos((prev) => [...prev, producto]);
  };

  const removeFromFav = (id) => {
    setFavoritos((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <FavContext.Provider value={{ favoritos, addToFav, removeFromFav }}>
      {children}
    </FavContext.Provider>
  );
};

// ⚠️ ESTA LÍNEA ES LA CLAVE
export const useFavContext = () => useContext(FavContext);
