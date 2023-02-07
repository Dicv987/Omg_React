import { NavHeader } from "../components/Nav_Header";
import { Hero } from "../components/Hero";
import { NuestrosClientes } from "../components/NuestrosClientes";
import { AcercaNosotros } from "../components/AcercaNosotros";
import { MisVisVal } from "../components/MisVisVal";
import { Footer } from "../components/Footer";

import "./css/LandingPage.css";
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
      <a
        href="#"
        class="back-to-top d-flex align-items-center justify-content-center"
      >
        <i class="bi bi-arrow-up-short"></i>
      </a>
    </>
  );
}
