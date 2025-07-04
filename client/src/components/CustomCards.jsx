import './Cards.css';
import cardsData from '../data/cardsData';
import { useNavigate } from 'react-router-dom';
import { useFavContext } from "../context/FavContext";
import { useCartContext } from '../context/CartContext';
import { FaHeart, FaCartPlus } from 'react-icons/fa';

export default function CustomCards() {
  const navigate = useNavigate();
  const { addToFav } = useFavContext();
  const { addToCart } = useCartContext();

  return (
    <div className="container-fluid px-5 py-5" id="custom-cards">
      <h2 className="pb-2 border-bottom text-white text-center">Productos recomendados</h2>

      <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-4">
        {cardsData.map((card, index) => (
          <div className="col" key={index}>
            <div
              className="card bg-dark text-white shadow-lg d-flex flex-row align-items-center p-3"
              style={{
                height: '180px',
                borderRadius: '20px',
                cursor: 'pointer',
                overflow: 'hidden'
              }}
              onClick={() => navigate(`/producto/${card.id}`)}
            >
              {/* Imagen */}
              <div className="me-3" style={{ flex: '0 0 160px', height: '100%' }}>
                <img
                  src={card.image}
                  alt={card.title}
                  className="img-fluid h-100 rounded"
                  style={{ objectFit: 'cover' }}
                />
              </div>

              {/* Info y botones */}
              <div className="d-flex flex-column justify-content-between h-100 flex-grow-1">
                <div>
                  <h5 className="fw-bold mb-1">{card.title}</h5>
                  <p className="text-muted small mb-2">{card.location}</p>
                  <span className="badge bg-warning text-dark fs-6">${card.price}</span>
                </div>

                <div className="mt-2 d-flex gap-2">
                  <button
                    className="btn btn-outline-danger btn-sm"
                    onClick={(e) => {
                      e.stopPropagation();
                      addToFav(card);
                    }}
                  >
                    <FaHeart />
                  </button>
                  <button
                    className="btn btn-outline-success btn-sm"
                    onClick={(e) => {
                      e.stopPropagation();
                      addToCart(card);
                    }}
                  >
                    <FaCartPlus />
                  </button>
                  <button
                    className="btn btn-outline-light btn-sm"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/producto/${card.id}`);
                    }}
                  >
                    Ver
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
