import React, { useState,useEffect } from "react";
import GLightbox from 'glightbox';

export function Portafolio() {
  const [activeFilter, setActiveFilter] = useState("*");

  useEffect(() => {
    const glightbox = GLightbox({
      selector: '.glightbox'
    });
  }, []);

  const handleClick = (event) => {
    setActiveFilter(event.target.dataset.filter);
  };

  return (
    <section id="portfolio" className="portfolio">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Productos</h2>
          <p>Encuentra la mejor variedad de productos en nuestro catálogo.</p>
        </div>

        <ul
          id="portfolio-flters"
          className="d-flex justify-content-center"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <li
            data-filter="*"
            className={`${activeFilter === "*" ? "filter-active" : ""}`}
            onClick={handleClick}
          >
            Todos
          </li>
          <li
            data-filter=".filter-byt-ciego"
            className={`${
              activeFilter === ".filter-byt-ciego" ? "filter-active" : ""
            }`}
            onClick={handleClick}
          >
            Hidráulico
          </li>
          <li
            data-filter=".filter-electrico"
            className={`${
              activeFilter === ".filter-electrico" ? "filter-active" : ""
            }`}
            onClick={handleClick}
          >
            Eléctrico
          </li>
          <li
            data-filter=".filter-telecomunicacion"
            className={`${
              activeFilter === ".filter-telecomunicacion" ? "filter-active" : ""
            }`}
            onClick={handleClick}
          >
            Telecomunicaciones
          </li>
          <li
            data-filter=".filter-vialidad"
            className={`${
              activeFilter === ".filter-vialidad" ? "filter-active" : ""
            }`}
            onClick={handleClick}
          >
            Vialidad
          </li>
        </ul>

        <div
          className="row portfolio-container"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className={`col-lg-4 col-md-6 portfolio-item filter-electrico  ${activeFilter === ".filter-electrico" || activeFilter === "*" ? "" : 'd-none'}`}>
            <div className="portfolio-img">
              <img
                src="src/img/portfolio/ELECTRICO/AP8X40CM_PVC.png"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="portfolio-info">
              <h4>Eléctrico</h4>
              <p>AP8X40CM PVC</p>
              <a
                href="src/img/portfolio/ELECTRICO/AP8X40CM_PVC.png"
                data-gallery="portfolioGallery"
                className="portfolio-lightbox preview-link glightbox"
                title="AP8X40CM_PVC"
              >
                <i className="bx bx-plus"></i>
              </a>
            </div>
          </div>
          <div className={`col-lg-4 col-md-6 portfolio-item filter-electrico ${activeFilter === ".filter-electrico" || activeFilter === "*" ? "" : 'd-none'}`}>
            <div className="portfolio-img">
              <img
                src="src/img/portfolio/ELECTRICO/AP10X60_PVC.png"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="portfolio-info">
              <h4>Eléctrico</h4>
              <p>AP 10"x40CM Y 10"X60CM PVC</p>
              <a
                href="src/img/portfolio/ELECTRICO/AP10X60_PVC.png"
                data-gallery="portfolioGallery"
                className="portfolio-lightbox preview-link glightbox"
                title="AP10X60_PVC"
              >
                <i className="bx bx-plus"></i>
              </a>
            </div>
          </div>
          <div className={`col-lg-4 col-md-6 portfolio-item filter-electrico ${activeFilter === ".filter-electrico" || activeFilter === "*" ? "" : 'd-none'}`}>
            <div className="portfolio-img">
              <img
                src="src/img/portfolio/ELECTRICO/AYT84A.png"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="portfolio-info">
              <h4>Eléctrico</h4>
              <p>AYT84A</p>
              <a
                href="src/img/portfolio/ELECTRICO/AYT84A.png"
                data-gallery="portfolioGallery"
                className="portfolio-lightbox preview-link glightbox"
                title="AYT84A"
              >
                <i className="bx bx-plus"></i>
              </a>
            </div>
          </div>
          <div className={`col-lg-4 col-md-6 portfolio-item filter-electrico ${activeFilter === ".filter-electrico" || activeFilter === "*" ? "" : 'd-none'}`}>
            <div className="portfolio-img">
              <img
                src="src/img/portfolio/ELECTRICO/AYT84B.png"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="portfolio-info">
              <h4>Eléctrico</h4>
              <p>AYT84B</p>
              <a
                href="src/img/portfolio/ELECTRICO/AYT84B.png"
                data-gallery="portfolioGallery"
                className="portfolio-lightbox preview-link glightbox"
                title="AYT84B"
              >
                <i className="bx bx-plus"></i>
              </a>
            </div>
          </div>
          <div className={`col-lg-4 col-md-6 portfolio-item filter-electrico ${activeFilter === ".filter-telecomunicacion" || activeFilter === "*" ? "" : 'd-none'}`}>
            <div className="portfolio-img">
              <img
                src="src/img/portfolio/ELECTRICO/CONICO_50X60CM.png"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="portfolio-info">
              <h4>Telecomunicaciones</h4>
              <p>CONICO 50X60CM Y 50x70CM</p>
              <a
                href="src/img/portfolio/ELECTRICO/CONICO_50X60CM.png"
                data-gallery="portfolioGallery"
                className="portfolio-lightbox preview-link glightbox"
                title="CONICO_50X60CM"
              >
                <i className="bx bx-plus"></i>
              </a>
            </div>
          </div>
          <div className={`col-lg-4 col-md-6 portfolio-item filter-electrico ${activeFilter === ".filter-telecomunicacion" || activeFilter === "*" ? "" : 'd-none'}`}>
            <div className="portfolio-img">
              <img
                src="src/img/portfolio/ELECTRICO/MANHOLE_HD.png"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="portfolio-info">
              <h4>Telecomunicaciones</h4>
              <p>MANHOLE HD</p>
              <a
                href="src/img/portfolio/ELECTRICO/MANHOLE_HD.png"
                data-gallery="portfolioGallery"
                className="portfolio-lightbox preview-link glightbox"
                title="MANHOLE HD"
              >
                <i className="bx bx-plus"></i>
              </a>
            </div>
          </div>
          <div className={`col-lg-4 col-md-6 portfolio-item filter-electrico ${activeFilter === ".filter-telecomunicacion" || activeFilter === "*" ? "" : 'd-none'}`}>
            <div className="portfolio-img">
              <img
                src="src/img/portfolio/ELECTRICO/MINIMANHOLE_HD.png"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="portfolio-info">
              <h4>Telecomunicaciones</h4>
              <p>MINIMANHOLE HD</p>
              <a
                href="src/img/portfolio/ELECTRICO/MINIMANHOLE_HD.png"
                data-gallery="portfolioGallery"
                className="portfolio-lightbox preview-link glightbox"
                title="MINIMANHOLE HD"
              >
                <i className="bx bx-plus"></i>
              </a>
            </div>
          </div>
          <div className={`col-lg-4 col-md-6 portfolio-item filter-electrico ${activeFilter === ".filter-electrico" || activeFilter === "*" ? "" : 'd-none'}`}>
            <div className="portfolio-img">
              <img
                src="src/img/portfolio/ELECTRICO/RBTA1.png"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="portfolio-info">
              <h4>Eléctrico</h4>
              <p>RBTA1</p>
              <a
                href="src/img/portfolio/ELECTRICO/RBTA1.png"
                data-gallery="portfolioGallery"
                className="portfolio-lightbox preview-link glightbox"
                title="RBTA1"
              >
                <i className="bx bx-plus"></i>
              </a>
            </div>
          </div>
          <div className={`col-lg-4 col-md-6 portfolio-item filter-electrico ${activeFilter === ".filter-electrico" || activeFilter === "*" ? "" : 'd-none'}`}>
            <div className="portfolio-img">
              <img
                src="src/img/portfolio/ELECTRICO/RBTA2.png"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="portfolio-info">
              <h4>Eléctrico</h4>
              <p>RBTA2</p>
              <a
                href="src/img/portfolio/ELECTRICO/RBTA2.png"
                data-gallery="portfolioGallery"
                className="portfolio-lightbox preview-link glightbox"
                title="RBTA2"
              >
                <i className="bx bx-plus"></i>
              </a>
            </div>
          </div>
          <div className={`col-lg-4 col-md-6 portfolio-item filter-electrico ${activeFilter === ".filter-electrico" || activeFilter === "*" ? "" : 'd-none'}`}>
            <div className="portfolio-img">
              <img
                src="src/img/portfolio/ELECTRICO/RBTB1.png"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="portfolio-info">
              <h4>Eléctrico</h4>
              <p>RBTB1</p>
              <a
                href="src/img/portfolio/ELECTRICO/RBTB1.png"
                data-gallery="portfolioGallery"
                className="portfolio-lightbox preview-link glightbox"
                title="RBTB1"
              >
                <i className="bx bx-plus"></i>
              </a>
            </div>
          </div>
          <div className={`col-lg-4 col-md-6 portfolio-item filter-electrico ${activeFilter === ".filter-electrico" || activeFilter === "*" ? "" : 'd-none'}`}>
            <div className="portfolio-img">
              <img
                src="src/img/portfolio/ELECTRICO/RBTB2.png"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="portfolio-info">
              <h4>Eléctrico</h4>
              <p>RBTB2</p>
              <a
                href="src/img/portfolio/ELECTRICO/RBTB2.png"
                data-gallery="portfolioGallery"
                className="portfolio-lightbox preview-link glightbox"
                title="RBTB2"
              >
                <i className="bx bx-plus"></i>
              </a>
            </div>
          </div>
          <div className={`col-lg-4 col-md-6 portfolio-item filter-electrico ${activeFilter === ".filter-telecomunicacion" || activeFilter === "*" ? "" : 'd-none'}`}>
            <div className="portfolio-img">
              <img
                src="src/img/portfolio/ELECTRICO/REG._1.15X1.15X1.0CM.png"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="portfolio-info">
              <h4>Telecomunicaciones</h4>
              <p>REG. 1.15X1.15X1.0CM</p>
              <a
                href="src/img/portfolio/ELECTRICO/REG._1.15X1.15X1.0CM.png"
                data-gallery="portfolioGallery"
                className="portfolio-lightbox preview-link glightbox"
                title="REG. 1.15X1.15X1.0CM"
              >
                <i className="bx bx-plus"></i>
              </a>
            </div>
          </div>

          <div className={`col-lg-4 col-md-6 portfolio-item filter-electrico ${activeFilter === ".filter-vialidad" || activeFilter === "*" ? "" : 'd-none'}`}>
            <div className="portfolio-img">
              <img
                src="src/img/portfolio/VIALIDADES/GUIA_TACTIL_CAMBIO_DE_DIRECCION.png"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="portfolio-info">
              <h4>Vialidad</h4>
              <p>GUIA TACTIL CAMBIO DE DIRECCION</p>
              <a
                href="src/img/portfolio/VIALIDADES/GUIA_TACTIL_CAMBIO_DE_DIRECCION.png"
                data-gallery="portfolioGallery"
                className="portfolio-lightbox preview-link glightbox"
                title="GUIA TACTIL CAMBIO DE DIRECCION"
              >
                <i className="bx bx-plus"></i>
              </a>
            </div>
          </div>
          <div className={`col-lg-4 col-md-6 portfolio-item filter-electrico ${activeFilter === ".filter-vialidad" || activeFilter === "*" ? "" : 'd-none'}`}>
            <div className="portfolio-img">
              <img
                src="src/img/portfolio/VIALIDADES/GUIA_TACTIL_LINEAL.png"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="portfolio-info">
              <h4>Vialidad</h4>
              <p>GUIA TACTIL LINEAL</p>
              <a
                href="src/img/portfolio/VIALIDADES/GUIA_TACTIL_LINEAL.png"
                data-gallery="portfolioGallery"
                className="portfolio-lightbox preview-link glightbox"
                title="GUIA TACTIL LINEAL"
              >
                <i className="bx bx-plus"></i>
              </a>
            </div>
          </div>

          <div className={`col-lg-4 col-md-6 portfolio-item filter-electrico ${activeFilter === ".filter-electrico" || activeFilter === "*" ? "" : 'd-none'}`}>
            <div className="portfolio-img">
              <img
                src="src/img/portfolio/TELECOMUNICACIONES/AP_12_CUBETA.png"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="portfolio-info">
              <h4>Eléctrico</h4>
              <p>AP 12 CUBETA</p>
              <a
                href="src/img/portfolio/TELECOMUNICACIONES/AP_12_CUBETA.png"
                data-gallery="portfolioGallery"
                className="portfolio-lightbox preview-link glightbox"
                title="AP 12 CUBETA"
              >
                <i className="bx bx-plus"></i>
              </a>
            </div>
          </div>
          <div className={`col-lg-4 col-md-6 portfolio-item filter-electrico ${activeFilter === ".filter-telecomunicacion" || activeFilter === "*" ? "" : 'd-none'}`}>
            <div className="portfolio-img">
              <img
                src="src/img/portfolio/TELECOMUNICACIONES/L1T.png"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="portfolio-info">
              <h4>Telecomunicaciones</h4>
              <p>L1T</p>
              <a
                href="src/img/portfolio/TELECOMUNICACIONES/L1T.png"
                data-gallery="portfolioGallery"
                className="portfolio-lightbox preview-link glightbox"
                title="L1T"
              >
                <i className="bx bx-plus"></i>
              </a>
            </div>
          </div>
          <div className={`col-lg-4 col-md-6 portfolio-item filter-electrico ${activeFilter === ".filter-telecomunicacion" || activeFilter === "*" ? "" : 'd-none'}`}>
            <div className="portfolio-img">
              <img
                src="src/img/portfolio/TELECOMUNICACIONES/L2T.png"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="portfolio-info">
              <h4>Telecomunicaciones</h4>
              <p>L2T</p>
              <a
                href="src/img/portfolio/TELECOMUNICACIONES/L2T.png"
                data-gallery="portfolioGallery"
                className="portfolio-lightbox preview-link glightbox"
                title="L2T"
              >
                <i className="bx bx-plus"></i>
              </a>
            </div>
          </div>
          <div className={`col-lg-4 col-md-6 portfolio-item filter-electrico ${activeFilter === ".filter-telecomunicacion" || activeFilter === "*" ? "" : 'd-none'}`}>
            <div className="portfolio-img">
              <img
                src="src/img/portfolio/TELECOMUNICACIONES/L3T.png"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="portfolio-info">
              <h4>Telecomunicaciones</h4>
              <p>L3T</p>
              <a
                href="src/img/portfolio/TELECOMUNICACIONES/L3T.png"
                data-gallery="portfolioGallery"
                className="portfolio-lightbox preview-link glightbox"
                title="L3T"
              >
                <i className="bx bx-plus"></i>
              </a>
            </div>
          </div>
          <div className={`col-lg-4 col-md-6 portfolio-item filter-electrico ${activeFilter === ".filter-telecomunicacion" || activeFilter === "*" ? "" : 'd-none'}`}>
            <div className="portfolio-img">
              <img
                src="src/img/portfolio/TELECOMUNICACIONES/MANHOLE_CP.png"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="portfolio-info">
              <h4>Telecomunicaciones</h4>
              <p>MANHOLE CP</p>
              <a
                href="src/img/portfolio/TELECOMUNICACIONES/MANHOLE_CP.png"
                data-gallery="portfolioGallery"
                className="portfolio-lightbox preview-link glightbox"
                title="MANHOLE CP"
              >
                <i className="bx bx-plus"></i>
              </a>
            </div>
          </div>
          <div className={`col-lg-4 col-md-6 portfolio-item filter-electrico ${activeFilter === ".filter-telecomunicacion" || activeFilter === "*" ? "" : 'd-none'}`}>
            <div className="portfolio-img">
              <img
                src="src/img/portfolio/TELECOMUNICACIONES/MINIMANHOLE_CP.png"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="portfolio-info">
              <h4>Telecomunicaciones</h4>
              <p>MINIMANHOLE_CP</p>
              <a
                href="src/img/portfolio/TELECOMUNICACIONES/MINIMANHOLE_CP.png"
                data-gallery="portfolioGallery"
                className="portfolio-lightbox preview-link glightbox"
                title="MINIMANHOLE_CP"
              >
                <i className="bx bx-plus"></i>
              </a>
            </div>
          </div>

          <div className={`col-lg-4 col-md-6 portfolio-item filter-electrico ${activeFilter === ".filter-byt-ciego" || activeFilter === "*" ? "" : 'd-none'}`}>
            <div className="portfolio-img">
              <img
                src="src/img/portfolio/BYT/BYT_CIEGO.png"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="portfolio-info">
              <h4>Hidráulico</h4>
              <p>BYT CIEGO</p>
              <a
                href="src/img/portfolio/BYT/BYT_CIEGO.png"
                data-gallery="portfolioGallery"
                className="portfolio-lightbox preview-link glightbox"
                title="BYT CIEGO"
              >
                <i className="bx bx-plus"></i>
              </a>
            </div>
          </div>
          <div className={`col-lg-4 col-md-6 portfolio-item filter-electrico ${activeFilter === ".filter-byt-ciego" || activeFilter === "*" ? "" : 'd-none'}`}>
            <div className="portfolio-img">
              <img
                src="src/img/portfolio/BYT/BYT6RESP.png"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="portfolio-info">
              <h4>Hidráulico</h4>
              <p>BYT6RESP</p>
              <a
                href="src/img/portfolio/BYT/BYT6RESP.png"
                data-gallery="portfolioGallery"
                className="portfolio-lightbox preview-link glightbox"
                title="BYT6RESP"
              >
                <i className="bx bx-plus"></i>
              </a>
            </div>
          </div>
          <div className={`col-lg-4 col-md-6 portfolio-item filter-electrico ${activeFilter === ".filter-byt-ciego" || activeFilter === "*" ? "" : 'd-none'}`}>
            <div className="portfolio-img">
              <img
                src="src/img/portfolio/BYT/CAJA_DE_VALVULAS_50X50CM_CON_BISAGRA.png"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="portfolio-info">
              <h4>Hidráulico</h4>
              <p>CAJA DE VALVULAS 50X50CM CON BISAGRA</p>
              <a
                href="src/img/portfolio/BYT/CAJA_DE_VALVULAS_50X50CM_CON_BISAGRA.png"
                data-gallery="portfolioGallery"
                className="portfolio-lightbox preview-link glightbox"
                title="CAJA DE VALVULAS 50X50CM CON BISAGRA"
              >
                <i className="bx bx-plus"></i>
              </a>
            </div>
          </div>
          <div className={`col-lg-4 col-md-6 portfolio-item filter-electrico ${activeFilter === ".filter-byt-ciego" || activeFilter === "*" ? "" : 'd-none'}`}>
            <div className="portfolio-img">
              <img
                src="src/img/portfolio/BYT/CAJA_DE_VALVULAS_50X50CM_SIN_BISAGRA.png"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="portfolio-info">
              <h4>Hidráulico</h4>
              <p>CAJA DE VALVULAS 50X50CM SIN BISAGRA</p>
              <a
                href="src/img/portfolio/BYT/CAJA_DE_VALVULAS_50X50CM_SIN_BISAGRA.png"
                data-gallery="portfolioGallery"
                className="portfolio-lightbox preview-link glightbox"
                title="CAJA DE VALVULAS 50X50CM SIN BISAGRA"
              >
                <i className="bx bx-plus"></i>
              </a>
            </div>
          </div>
          <div className={`col-lg-4 col-md-6 portfolio-item filter-electrico ${activeFilter === ".filter-vialidad" || activeFilter === "*" ? "" : 'd-none'}`}>
            <div className="portfolio-img">
              <img
                src="src/img/portfolio/BYT/PLACA_DE_SENALIZACION_40X40CM.png"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="portfolio-info">
              <h4>Vialidad</h4>
              <p>PLACA DE SEÑALIZACION 40X40CM</p>
              <a
                href="src/img/portfolio/BYT/PLACA_DE_SENALIZACION_40X40CM.png"
                data-gallery="portfolioGallery"
                className="portfolio-lightbox preview-link glightbox"
                title="PLACA DE SEÑALIZACION 40X40CM"
              >
                <i className="bx bx-plus"></i>
              </a>
            </div>
          </div>
          <div className={`col-lg-4 col-md-6 portfolio-item filter-electrico ${activeFilter === ".filter-byt-ciego" || activeFilter === "*" ? "" : 'd-none'}`}>
            <div className="portfolio-img">
              <img
                src="src/img/portfolio/BYT/Rejilla50X50CM.png"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="portfolio-info">
              <h4>Hidráulico</h4>
              <p>Rejilla 50X50CM</p>
              <a
                href="src/img/portfolio/BYT/Rejilla50X50CM.png"
                data-gallery="portfolioGallery"
                className="portfolio-lightbox preview-link glightbox"
                title="Rejilla 50X50CM"
              >
                <i className="bx bx-plus"></i>
              </a>
            </div>
          </div>
          <div className={`col-lg-4 col-md-6 portfolio-item filter-electrico ${activeFilter === ".filter-byt-ciego" || activeFilter === "*" ? "" : 'd-none'}`}>
            <div className="portfolio-img">
              <img
                src="src/img/portfolio/BYT/Rejilla60X40CM.png"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="portfolio-info">
              <h4>Hidráulico</h4>
              <p>Rejilla 60X40CM</p>
              <a
                href="src/img/portfolio/BYT/Rejilla60X40CM.png"
                data-gallery="portfolioGallery"
                className="portfolio-lightbox preview-link glightbox"
                title="Rejilla 60X40CM"
              >
                <i className="bx bx-plus"></i>
              </a>
            </div>
          </div>
          <div className={`col-lg-4 col-md-6 portfolio-item filter-electrico ${activeFilter === ".filter-byt-ciego" || activeFilter === "*" ? "" : 'd-none'}`}>
            <div className="portfolio-img">
              <img
                src="src/img/portfolio/BYT/Rejilla70X60CM.png"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="portfolio-info">
              <h4>Hidráulico</h4>
              <p>Rejilla 70X60CM</p>
              <a
                href="src/img/portfolio/BYT/Rejilla70X60CM.png"
                data-gallery="portfolioGallery"
                className="portfolio-lightbox preview-link glightbox"
                title="Rejilla 70X60CM"
              >
                <i className="bx bx-plus"></i>
              </a>
            </div>
          </div>
          <div className={`col-lg-4 col-md-6 portfolio-item filter-electrico ${activeFilter === ".filter-vialidad" || activeFilter === "*" ? "" : 'd-none'}`}>
            <div className="portfolio-img">
              <img
                src="src/img/portfolio/BYT/TOPE_DE_ESTACIONAMIENTO.png"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="portfolio-info">
              <h4>Hidráulico</h4>
              <p>TOPE DE ESTACIONAMIENTO</p>
              <a
                href="src/img/portfolio/BYT/TOPE_DE_ESTACIONAMIENTO.png"
                data-gallery="portfolioGallery"
                className="portfolio-lightbox preview-link glightbox"
                title="TOPE DE ESTACIONAMIENTO"
              >
                <i className="bx bx-plus"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
