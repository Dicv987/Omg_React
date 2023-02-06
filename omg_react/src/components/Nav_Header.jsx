import { Link } from "react-router-dom";
import { LandingPage } from "../pages/LandingPage.jsx";
import Logo from "../img/logo.png";
import "./css/NavHeader.css";

export function NavHeader() {
  return (
    <div className="container d-flex allign-items-center">
      <h1 className="logo me-auto">
        <a href={LandingPage}>
          <img src={Logo} className="img-fluid" alt="Logo_image" />
        </a>
      </h1>
      <nav id="navbar" className="navbar">
        <h1>Prueba</h1>
      </nav>
    </div>
  );
}
