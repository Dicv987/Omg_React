import "../components/css/advantage.css";

export function Materiales() {
  return (
    <>
      <section id="advantages" className="why-us section-bg">
        <div className="container-fluid" data-aos="fade-up">
          <div className="section-title">
            <h2>VENTAJAS</h2>
          </div>
          <div className="row">
            <div className="col-lg-7 d-flex flex-column justify-content-center align-items-stretch  order-2 order-lg-1">
              <div className="content">
                <h3>
                  Concreto
                  <br />
                  <strong>POLIMÉRICO</strong>
                </h3>
              </div>
              <div className="accordion-list">
                <ul>
                  <li className="advantage">
                    <span>01</span> Mas ligero y mayor resistencia mecánica.
                  </li>
                  <li className="advantage">
                    <span>02</span> Mínima absorción de agua.
                  </li>
                  <li className="advantage">
                    <span>03</span> Resistencia al envejecimiento.
                  </li>
                  <li className="advantage">
                    <span>04</span> Mayor resistencia y bajo mantenimiento.
                  </li>
                  <li className="advantage">
                    <span>05</span> Retardante a la flama.
                  </li>
                  <li className="advantage">
                    <span>06</span> Variedad de colores.
                  </li>
                  <li className="advantage">
                    <span>07</span> Excelentes propiedades dieléctricas.
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="col-lg-5 align-items-stretch order-1 order-lg-2 img"
              style={{ backgroundImage: `url("src/img/polimerico.png")` }}
              data-aos="zoom-in"
              data-aos-delay="150"
            >
              &nbsp;
            </div>
          </div>
        </div>
      </section>

      <section id="advantages" class="why-us">
        <div class="container-fluid" data-aos="fade-up">
          <div class="row">
            <div
              class="col-lg-5 d-flex align-items-center"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <img src="src/img/hidraulico.png" class="img-fluid" alt="" />
            </div>
            <div class="col-lg-7 d-flex flex-column justify-content-center align-items-stretch  order-2 order-lg-1">
              <div class="content">
                <h3>
                  Concreto
                  <br />
                  <strong>HIDRÁULICO</strong>
                </h3>
              </div>
              <div class="accordion-list bg-blue">
                <ul>
                  <li class="advantage">
                    <span>01</span> Costos totales inferiores.
                  </li>
                  <li class="advantage">
                    <span>02</span> Resistencia a altas temperaturas.
                  </li>
                  <li class="advantage">
                    <span>03</span> Durabilidad.
                  </li>
                  <li class="advantage">
                    <span>04</span> Facilidad de construcción.
                  </li>
                  <li class="advantage">
                    <span>05</span> Drenaje.
                  </li>
                  <li class="advantage">
                    <span>06</span> Seguridad.
                  </li>
                  <li class="advantage">
                    <span>07</span> Rapidez en puesta de obra.
                  </li>
                  <li class="advantage">
                    <span>08</span> Facilidad de reparación.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="advantages" class="why-us section-bg">
        <div class="container-fluid" data-aos="fade-up">
          <div class="row">
            <div class="col-lg-7 d-flex flex-column justify-content-center align-items-stretch  order-2 order-lg-1">
              <div class="content">
                <h3>
                  <strong>POLIETILENO</strong>
                </h3>
              </div>
              <div class="accordion-list">
                <ul>
                  <li class="advantage">
                    <span>01</span> Es elástico.
                  </li>
                  <li class="advantage">
                    <span>02</span> Es flexible.
                  </li>
                  <li class="advantage">
                    <span>03</span> Es reciclable.
                  </li>
                  <li class="advantage">
                    <span>04</span> Es resistente a ácidos y bacterias.
                  </li>
                  <li class="advantage">
                    <span>05</span> Es resistente a cualquier forma de
                    corrosión.
                  </li>
                  <li class="advantage">
                    <span>06</span> Fácil de transportar.
                  </li>
                  <li class="advantage">
                    <span>07</span> No se deforma de manera permanente.
                  </li>
                  <li class="advantage">
                    <span>08</span> Tiene una vida útil bastante larga.
                  </li>
                </ul>
              </div>
            </div>
            <div
              class="col-lg-5 align-items-stretch order-1 order-lg-2 img"
              style={{ backgroundImage: `url("src/img/polietileno.png")` }}
              data-aos="zoom-in"
              data-aos-delay="150"
            >
              &nbsp;
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
