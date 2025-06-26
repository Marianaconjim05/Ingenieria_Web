import { Home, ShoppingBag, Phone } from 'lucide-react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-white shadow-sm px-4">
      <div className="container-fluid justify-content-end">
        <a href="/" className="nav-link px-3 text-dark">
          <Home size={24} />
        </a>
        <a href="/cliente" className="nav-link px-3 text-dark">
          <ShoppingBag size={24} />
        </a>
        <a href="/contacto" className="nav-link px-3 text-dark">
          <Phone size={24} />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
