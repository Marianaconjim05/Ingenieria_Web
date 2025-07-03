
import { createContext, useContext, useState, useEffect } from 'react';

// Crear el contexto
const FavContext = createContext();

// Proveedor del contexto
export const FavProvider = ({ children }) => {
  const [favoritos, setFavoritos] = useState([]);

  // Cargar favoritos desde localStorage al iniciar
  useEffect(() => {
    const data = localStorage.getItem("favoritos");
    if (data) {
      setFavoritos(JSON.parse(data));
    }
  }, []);

  // Guardar en localStorage cuando cambia
  useEffect(() => {
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
  }, [favoritos]);

  // Agregar producto a favoritos
  const addToFav = (producto) => {
    setFavoritos((prev) => [...prev, producto]);
  };

  // Eliminar producto de favoritos por id
  const removeFromFav = (id) => {
    setFavoritos((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <FavContext.Provider value={{ favoritos, addToFav, removeFromFav }}>
      {children}
    </FavContext.Provider>
  );
};

// 🚨 ESTA ES LA EXPORTACIÓN QUE NECESITA TU CustomCards.jsx
export const useFavContext = () => useContext(FavContext);
