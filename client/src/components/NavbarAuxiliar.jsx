// ✅ src/components/NavbarAuxiliar.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function NavbarAuxiliar() {
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <Link className="navbar-brand" to="/auxiliar">
        🧠 Auxiliar
      </Link>
      <div className="collapse navbar-collapse show">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link
              className={`nav-link ${location.pathname === '/auxiliar' ? 'active' : ''}`}
              to="/auxiliar"
            >
              Panel
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={`nav-link ${location.pathname === '/auxiliar/agregar' ? 'active' : ''}`}
              to="/auxiliar/agregar"
            >
              Agregar Producto
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={`nav-link ${location.pathname === '/auxiliar/stock' ? 'active' : ''}`}
              to="/auxiliar/stock"
            >
              Ver Stock
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

