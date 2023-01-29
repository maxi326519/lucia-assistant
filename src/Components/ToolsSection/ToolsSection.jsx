import "./ToolsSection.css";

import payment from "../../assets/svg/payment.svg";
import control from "../../assets/svg/method-pay.svg";
import calendar from "../../assets/svg/calendar.svg";
import professional from "../../assets/svg/professional.svg";

export default function ToolsSection(){
    return(
        <div id="tools">
          <div class="tools__container">
            <h2>AÚN TENEMOS MUCHO MÁS PARA GESTIONAR TU NEGOCIO</h2>
            <p>Automatiza y ahorra con las siguientes herramientas.</p>
            <div className="content-modulos">
              <div
                className="modulos"
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-delay="100"
              >
                <img src={control} alt="control" />
                <div>
                  <h3>Control de apartado</h3>
                  <p>
                    Define la cantidad con la que quieres que aparten tu cita
                    10% 15% o la cantidad que decidas, con ellos tus clientes
                    tendrán que hacer un mínimo pago para reservar su cita.
                  </p>
                </div>
              </div>
              {/* $299 mxn mensual */}
              <div
                className="modulos"
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-delay="200"
              >
                <img src={payment} alt="payment" />
                <div>
                  <h3>Pago online</h3>
                  <p>
                    Permite a tus clientes pagar directamente desde la página
                    web.
                  </p>
                </div>
              </div>

              <div
                className="modulos"
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-delay="300"
              >
                <img src={calendar} alt="calendar" />
                <div>
                  <h3>Sistema de calendario online</h3>
                  <p>Lleva el control de cada profesional de tu negocio</p>
                </div>
              </div>

              <div
                className="modulos"
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-delay="400"
              >
                <img src={professional} alt="professional" />
                <div>
                  <h3>Multiprofesionales</h3>
                  <p>
                    Agregar servicios, precios y profesionales, tienes el
                    control de todo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}