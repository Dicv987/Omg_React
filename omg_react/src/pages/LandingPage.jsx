import { NavHeader } from "../components/Nav_Header";
import { Hero } from "../components/Hero";
import { NuestrosClientes } from "../components/NuestrosClientes";
import { AcercaNosotros } from "../components/AcercaNosotros";
import { MisVisVal } from "../components/MisVisVal";
import { Footer } from "../components/Footer";

export function LandingPage() {
  return (
    <>
      <NavHeader pagina="Inicio" />
      <section id="hero" className="d-flex align-items-center">
        <Hero />
      </section>
      <main id="main">
        <NuestrosClientes />
        <AcercaNosotros />
        <MisVisVal />
      </main>
      <Footer />

    </>
  );
}
