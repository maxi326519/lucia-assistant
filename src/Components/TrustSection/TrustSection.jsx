import "./TrustSection.css";

export default function TrustSection() {
  return (
    <div className="trust__container">
      <div className="trust__text">
        <h3>¡Miles de profesionales confían en nosotros!</h3>
        <p>
          Nuestros clientes aumentan en promedio sus ingresos un 49% después de
          un año y bajan hasta 80% de inasistencia
        </p>
        <div className="porcentajes-container">
          <div
            className="procentajes"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <h5>Ingresos</h5>
            <span>+49%</span>
          </div>
          <div
            className="procentajes"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <h5>Inasistencias</h5>
            <span>-80%</span>
          </div>
        </div>
        <p class="trust__bottom-text">¿QUÉ ESTÁS ESPERANDO PARA AUMENTAR TUS INGRESOS?</p>
      </div>
      <svg
        className="home__wave"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        viewBox="0 0 1440 320"
      >
        <path
          fill-opacity="1"
          d="M0,64L60,96C120,128,240,192,360,186.7C480,181,600,107,720,112C840,117,960,203,1080,197.3C1200,192,1320,96,1380,48L1440,0L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          data-darkreader-inline-fill=""
        ></path>
      </svg>
    </div>
  );
}
