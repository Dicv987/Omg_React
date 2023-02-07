import banner from "../img/banner.png"

export function Hero() {
  return (
    
    <div className="container">
      <div className="row">
        <div className="col-lg-6 d-flex flex-column justify-content-center text-center pt-4 pt-lg-0 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="200">
        <h1>
            Materiales y Servicios
            <br />
            OMJ
          </h1>          
          <h2>Con nosotros encontraras los mejores materiales para tu construcción</h2>
          <div className="d-flex justify-content-center justify-content-lg-start">
          </div>
        </div>
        <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay="200">
          <img src={banner} className="img-fluid animated" alt=""/>
        </div>
      </div>
    </div>

  );
}
