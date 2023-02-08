import { NavHeader } from "../components/Nav_Header";
import { Contact_info } from "../components/Contact_info";
import { Contact_form } from "../components/Contact_form";
import { Footer } from "../components/Footer";
export function Contacto() {
  return (
    <>
      <NavHeader pagina="Contacto" />

      <main id="main" style={{ marginTop: "50px" }}>

        <section id="contact" className="d-flex contact">
          <div class="container" data-aos="fade-up">
            <div class="section-title">
              <h2>CONTACTO</h2>
              <p>
                Cuentanos acerca de tu proyecto y con gusto atenderemos todas
                tus dudas.
              </p>
            </div>
            <div className="row">
              <Contact_info />
              <Contact_form />
            </div>
          </div>
        </section>

      </main>

      <Footer />

    </>
  );
}
