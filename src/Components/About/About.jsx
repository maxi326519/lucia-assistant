import phone from "../../assets/img/edit-phone.png";
import pc from "../../assets/img/edit-pc.png";

import "./About.css";

export default function About() {
  return (
    <div id="about">
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
      <div className="width__container">
        <div className="about__container">
          <div
            className="about__container__img"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <img src={phone} alt="" />
          </div>
          <div id="calendar" className="about__container__text">
            <h3 data-aos="fade-left" data-aos-duration="500">
              GESTIONA TU CALENDARIO POR PROFESIONAL
            </h3>
            <p
              data-aos="fade-left"
              data-aos-delay="100"
              data-aos-duration="500"
            >
              Permite a tus clientes agendar en tu Sitio Web profesional, que
              trabaja 24/7 para que tú no tengas que hacerlo.
            </p>
            <img
              src={phone}
              alt="phone-img"
              data-aos="fade-up"
              data-aos-duration="1000"
            />
            <h3
              data-aos="fade-left"
              data-aos-delay="200"
              data-aos-duration="500"
            >
              Asegura tus citas
            </h3>
            <p
              data-aos="fade-left"
              data-aos-delay="300"
              data-aos-duration="500"
            >
              . Evita pérdidas de tiempo y dinero disminuyendo las inasistencias
              con nuestro sistema de apartado cobrando un porcentaje de el valor
              de el servicio.
            </p>
            <p
              data-aos="fade-left"
              data-aos-delay="400"
              data-aos-duration="500"
            >
              . Ahorra tiempo coordinando citas, tu asistente Lucia lo hace por
              ti
            </p>
            <p
              data-aos="fade-left"
              data-aos-delay="500"
              data-aos-duration="500"
            >
              . Conecta a tus redes sociales para que tus clientes puedan
              agendar con tan solo unos clics
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}