import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NavbarAdmin() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <NavLink className="navbar-brand" to="/admin">Panel Admin</NavLink>

      <div className="collapse navbar-collapse">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink className="nav-link" to="/admin/productos">Productos</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/admin/auxiliares">Auxiliares</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/admin/comentarios">Comentarios</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/admin/pedidos">Pedidos</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
