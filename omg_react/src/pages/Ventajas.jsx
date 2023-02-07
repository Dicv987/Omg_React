import { NavHeader } from "../components/Nav_Header";
import { Materiales } from "../components/Materiales";
import { Footer } from "../components/Footer";
export function Ventajas() {
  return (
    <>
      <NavHeader pagina="Ventajas" />
      <main id="main" style={{ marginTop: "50px" }}>
        <Materiales />
      </main>
      <Footer />
      <a
        href="#"
        className="back-to-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short"></i>
      </a>
    </>
  );
}
