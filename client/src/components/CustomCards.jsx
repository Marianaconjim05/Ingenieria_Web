import './Cards.css';

const cardsData = [
  {
    title: 'Short title, long jacket',
    location: 'México',
    duration: '3d',
    image: 'https://source.unsplash.com/600x400/?music,album',
  },
  {
    title: 'Much longer title that wraps to multiple lines',
    location: 'Pakistan',
    duration: '4d',
    image: 'https://source.unsplash.com/600x400/?art,merch',
  },
  {
    title: 'Another longer title belongs here',
    location: 'California',
    duration: '5d',
    image: 'https://source.unsplash.com/600x400/?concert,tshirt',
  },
];

export default function CustomCards() {
  return (
    <div className="container px-4 py-5" id="custom-cards">
      <h2 className="pb-2 border-bottom text-white">Productos recomendados</h2>
      <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
        {cardsData.map((card, index) => (
          <div className="col" key={index}>
            <div
              className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
              style={{
                backgroundImage: `url(${card.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                <h5 className="mb-2 fw-bold">{card.location}</h5>
                <h3 className="mt-auto mb-4 display-6 lh-1 fw-bold">{card.title}</h3>
                <ul className="d-flex list-unstyled mt-auto align-items-center">
                  <li className="me-auto">
                    <button className="btn btn-sm btn-light fw-bold px-3">Ver</button>
                  </li>
                  <li className="d-flex align-items-center me-3">
                    <span className="me-2">❤️</span>
                    <small>Favorito</small>
                  </li>
                  <li className="d-flex align-items-center">
                    <span className="me-2">🛒</span>
                    <small>{card.duration}</small>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
