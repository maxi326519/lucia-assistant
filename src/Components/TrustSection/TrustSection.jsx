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
    </div>
  );
}
