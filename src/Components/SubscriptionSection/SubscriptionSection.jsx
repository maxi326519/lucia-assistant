import pc from "../../assets/img/edit-pc.png";
import "./SubscriptionSection.css";

export default function SubscriptionSection() {
  return (
    <div id="subscription">
      <div
        class="subscription__container"
        data-aos="zoom-out-up"
        data-aos-duration="1000"
      >
        <div>
          <h2>¿Ya estás listo para empezar?</h2>
          <p>
            Si aún tienes dudas, nos encantaría contarte todos los beneficios
            que tenemos para tu negocio en una breve demo online ¡Contáctanos!.
          </p>
          <div
            className="container-btn"
            data-aos="fade-up"
            data-aos-deplay="200"
            data-aos-duration="500"
          >
            <a href="https://lucia-agenda.com/app/" className="btn btn-primary">
              Prueba gratis
            </a>
          </div>
        </div>
        <div className="pc" data-aos="fade-left" data-aos-duration="1000">
          <img src={pc} alt="pc" />
        </div>
      </div>
    </div>
  );
}
