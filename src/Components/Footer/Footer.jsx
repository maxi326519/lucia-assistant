import logo from "../../assets/img/logo-lucia-vertical-2.png";
import instagram from "../../assets/svg/instagram.svg";
import linkedIn from "../../assets/svg/linkedin.svg";

import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <img className="logo" src={logo} alt="logo" />
      <div className="social-links">
        <a
          href="https://www.instagram.com/lucia.assistent/?igshid=MDM4ZDc5MmU%3D"
          target="_blank"
          rel="noreferrer"
        >
          <img src={instagram} alt="instagram" />
        </a>
        <a
          href="https://www.linkedin.com/company/lucia-assistent/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedIn} alt="linkedIn" />
        </a>
      </div>
      <div className="text">
        <span>Aviso de privacidad</span>
        <span>Terminos y condiciones</span>
      </div>
      <span className="copyright">© Copyright 2022 | Lucia</span>
    </div>
  );
}
