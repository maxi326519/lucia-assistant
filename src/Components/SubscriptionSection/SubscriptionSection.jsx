import "./SubscriptionSection.css";

export default function SubscriptionSection() {
  return (
    <div id="subscription">
      <div class="subscription__container">
        <h2>¿Ya estás listo para empezar?</h2>
        <p>
          Si aún tienes dudas, nos encantaría contarte todos los beneficios que
          tenemos para tu negocio en una breve demo online ¡Contáctanos!.
        </p>
        <div className="container-btn">
          <button className="btn btn-primary" style={{ margin: "30px" }}>
            Agenda demo
          </button>
          <button className="btn btn-primary" style={{ margin: "30px" }}>
            Prueba gratis
          </button>
        </div>
      </div>
    </div>
  );
}
