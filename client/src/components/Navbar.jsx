// src/components/Navbar.jsx
import { Home, ShoppingBag, Phone, Heart, ShoppingCart } from 'lucide-react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-white shadow-sm px-4">
      <div className="container-fluid justify-content-end">
        <a href="/" className="nav-link px-3 text-dark" title="Inicio">
          <Home size={24} />
        </a>
        <a href="/cliente" className="nav-link px-3 text-dark" title="Compras">
          <ShoppingBag size={24} />
        </a>
        <a href="/favoritos" className="nav-link px-3 text-dark" title="Favoritos">
          <Heart size={24} />
        </a>
        <a href="/carrito" className="nav-link px-3 text-dark" title="Carrito">
          <ShoppingCart size={24} />
        </a>
        <a href="/contacto" className="nav-link px-3 text-dark" title="Contacto">
          <Phone size={24} />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
