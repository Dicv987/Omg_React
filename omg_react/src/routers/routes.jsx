import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LandingPage } from "../pages/LandingPage";
import { Ventajas } from "../pages/Ventajas";
import { Productos } from "../pages/Productos";
import { Contacto } from "../pages/Contacto";

export function MyRoutes() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/Ventajas" element={<Ventajas />} />
        <Route exact path="/Productos" element={<Productos />} />
        <Route exact path="/Contacto" element={<Contacto />} />
      </Routes>
    </Router>
  );
}
