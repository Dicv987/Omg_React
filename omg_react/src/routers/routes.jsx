import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LandingPage } from "../pages/LandingPage";
import { Ventajas } from "../pages/Ventajas";

export function MyRoutes() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/Ventajas" element={<Ventajas />} />
      </Routes>
    </Router>
  );
}
