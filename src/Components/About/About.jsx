import "./About.css";

export default function About() {
  return (
    <div className="about">
      <div className="width__container">
        <div className="about__container">
          <div
            className="about__container__img"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <img src="" alt="" />
          </div>
          <div
            id="calendar"
            className="about__container__text"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <h3>GESTIONA TU CALENDARIO POR PROFESIONAL</h3>
            <p>
              Permite a tus clientes agendar en tu Sitio Web profesional, que
              trabaja 24/7 para que tú no tengas que hacerlo.
            </p>
            <h4>Asegura tus citas</h4>
            <p>
              Evita pérdidas de tiempo y dinero disminuyendo las inasistencias
              con nuestro sistema de apartado cobrando un porcentaje de el valor
              de el servicio.
            </p>
            <p>
              Ahorra tiempo coordinando citas, tu asistente Lucia lo hace por ti
            </p>
            <p>
              Conecta a tus redes sociales para que tus clientes puedan agendar
              con tan solo unos clics
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
