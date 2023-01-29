import Logo from "../../assets/img/Logo.png";

import "./Nav.css";

export default function Nav() {
  return (
    <div className="nav">
      <div className="nav-container">
        <img
          src={Logo}
          alt="logo"
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-easing="ease"
        />
        <ul
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-easing="ease"
        >
          <li className="nav-items">
            <a href="#calendar">Calendario</a>
          </li>
          <li className="nav-items">
            <a href="#tools">Herramientas</a>
          </li>
          <li>
            <a href="#subscription" className="btn btn-primary">
              Prueba gratis
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
