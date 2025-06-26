import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <div className="upiita-footer container-fluid" style={{ fontSize: '16px', lineHeight: '24px' }}>
      <footer className="footer" role="contentinfo">
        <div className="custom d-flex gap-5 align-items-center">
          <div>
            <img src="/images/v2024/educacion2.png" alt="Educación" style={{ maxWidth: '300px', height: 'auto' }} />
          </div>
          <div style={{ textAlign: 'left', color: '#ccc', fontSize: '12.8px' }}>
            <p>INSTITUTO POLITÉCNICO NACIONAL</p>
            <p>UNIDAD PROFESIONAL INTERDISCIPLINARIA EN INGENIERÍA Y TECNOLOGÍAS AVANZADAS</p>
            <p>
              Avenida Instituto Politécnico Nacional No. 2580, Col. Barrio la Laguna Ticomán,
              Gustavo A. Madero, Ciudad de México, C.P. 07340. Teléfono: 57296000, ext. 56806
            </p>
            <p>
              Esta página es una obra intelectual protegida por la Ley Federal del Derecho de Autor...
            </p>
          </div>
        </div>
      </footer>

      <footer className="gobmx main-footer mt-4">
        <div className="list-info container">
          <div className="row">
            <div className="col-sm-3">
              <img
                src="https://framework-gb.cdn.gob.mx/gobmx/img/logo_blanco.svg"
                alt="Gobierno de México"
                className="logo_footer"
                style={{ maxWidth: '90%', marginLeft: '-27px', marginTop: '12px' }}
              />
            </div>

            <div className="col-sm-3">
              <h2 style={{ fontSize: '18px' }}>Enlaces</h2>
              <ul className="list-unstyled">
                <li><a href="https://datos.gob.mx/">Datos</a></li>
                <li><a href="https://www.gob.mx/publicaciones">Publicaciones</a></li>
                <li><a href="http://sep.gob.mx/es/sep1/transparencia_rendicion">Portal de Transparencia</a></li>
                <li><a href="https://www.infomex.org.mx/gobiernofederal/home.action">PNT</a></li>
                <li><a href="http://www.inai.org.mx/">INAI</a></li>
                <li><a href="http://alertadores.funcionpublica.gob.mx/">Alerta</a></li>
                <li><a href="http://sidec.funcionpublica.gob.mx/">Denuncia</a></li>
              </ul>
            </div>

            <div className="col-sm-3">
              <h2 style={{ fontSize: '18px' }}>¿Qué es gob.mx?</h2>
              <p>
                Es el portal único de trámites, información y participación ciudadana.{' '}
                <a href="https://www.gob.mx/que-es-gobmx">Leer más</a>
              </p>
              <ul className="list-unstyled">
                <li><a href="https://www.gob.mx/temas">Temas</a></li>
                <li><a href="https://www.gob.mx/accesibilidad">Accesibilidad</a></li>
                <li><a href="https://www.gob.mx/privacidadintegral">Aviso de privacidad</a></li>
                <li><a href="https://www.gob.mx/terminos">Términos y Condiciones</a></li>
              </ul>
            </div>

            <div className="col-sm-3">
              <h2 style={{ fontSize: '18px' }}>Síguenos en</h2>
              <ul className="list-inline">
                <li className="list-inline-item">
                  <a href="https://www.facebook.com/gobmexico" target="_blank" rel="noopener noreferrer">
                    <img alt="Facebook" src="https://framework-gb.cdn.gob.mx/landing/img/facebook.png" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://twitter.com/GobiernoMX" target="_blank" rel="noopener noreferrer">
                    <img alt="Twitter" src="https://framework-gb.cdn.gob.mx/landing/img/twitter.png" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
