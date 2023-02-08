import { NavHeader } from "../components/Nav_Header";
import { Portafolio } from "../components/Portafolio";
import { Footer } from "../components/Footer";
export function Productos() {
  return (
    <>
      <NavHeader pagina="Productos" />

      <main id="main" style={{ marginTop: "50px" }}>
        <Portafolio />
      </main>
      <Footer />
    </>
  );
}
