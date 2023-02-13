import Logo from "../img/logo.png";
import "../assets/css/style.css";
import React, { useState, useEffect } from "react";

export function NavHeader( pagina ) {
  const [scrolled, setScrolled] = useState(false);
  const [navbarClass, setNavbarClass] = useState('');
  const [buttonClass, setButtonClass] = useState('bi-list');

  const handleMobileNavToggle = () => {
    setNavbarClass(navbarClass === '' ? 'navbar-mobile' : '');
    setButtonClass(buttonClass === 'bi-list' ? 'bi-x' : 'bi-list');
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 150) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    });
  }, []);


  return (
    <header
      id="header"
      className={`fixed-top ${scrolled ? "header-scrolled" : ""}`}
      style={{ background: scrolled ? "rgba(40, 58, 90, 0.9)" : "#37517e" }}
      >
      <div className="container d-flex allign-items-center">
        <h1 className="logo me-auto">
          <a href="/">
            <img src={Logo} className="img-fluid" alt="Logo_image" />
          </a>
        </h1>   
        <nav id="navbar" className={`navbar ${navbarClass === "" ? "" : "navbar-mobile"}`}>
          <ul>  
            <li>
              <a className={`${pagina.pagina === `Inicio`? "nav-link active" : "nav-link"}`} href="/">
                INICIO
              </a>
            </li>
            <li>
              <a className="nav-link" href="/#about">
                QUIENES SOMOS
              </a>
            </li>
            <li>
              <a className={`${pagina.pagina === `Ventajas`? "nav-link active" : "nav-link"}`} href="/Ventajas">
                VENTAJAS
              </a>
            </li>
            <li>
              <a className={`${pagina.pagina === `Productos`? "nav-link active" : "nav-link"}`} href="/Productos">
                PRODUCTOS
              </a>
            </li>
            <li>
              <a className={`${pagina.pagina === `Contacto`? "nav-link active" : "nav-link"}`} href="/Contacto">
                CONTACTO
              </a>
            </li>
          </ul>
          <i className={`bi ${buttonClass} mobile-nav-toggle`} onClick={handleMobileNavToggle}></i>        
          </nav>
      </div>
      <a href="#" className={`back-to-top d-flex align-items-center justify-content-center ${scrolled ? "active" : " "}`}><i class="bi bi-arrow-up-short"></i></a>

    </header>
  );
}
