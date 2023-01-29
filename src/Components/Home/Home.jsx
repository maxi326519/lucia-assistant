import Nav from "../Nav/Nav";

import "./Home.css";

export default function Home() {
  return (
    <div id="home">
      <Nav />
      <div className="home__content">
        <div className="home__text"data-aos="fade-right">
          <h2 className="fade-left" data-aos="fade-down" data-aos-delay="100">
            Tu asistente personal
          </h2>
          <h3 data-aos="fade-down">en la palma de tu mano</h3>
          <p className="fade-right">
            Gestiona tus citas, clientes y recordatorios en un solo lugar
            <br></br>
            <b>¡OLVÍDATE DE LAS INASISTENCIAS!</b>
          </p>
          <a href="#subscription" className="btn btn-primary" data-aos="fade-up">
            Empieza ahora prueba Gratis
          </a>
        </div>
        <div className="home__img" data-aos="fade-left">
          <img
            src="https://agendapro.com/web_assets/img/agendapro_home_w_pos_2.webp"
            alt="home-img"
          />
        </div>
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
