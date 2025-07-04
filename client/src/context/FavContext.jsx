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

  // ✅ Prevención de duplicados
  const addToFav = (producto) => {
    const exists = favoritos.some((item) => item.id === producto.id);
    if (!exists) {
      setFavoritos((prev) => [...prev, producto]);
    }
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


export const useFavContext = () => useContext(FavContext);
