import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { NavbarHome } from "../components/NavbarHome";
import { Footer } from "../components/Footer";
import Typewriter from 'typewriter-effect';

export const Home = () => {

  return (
    <>
      <NavbarHome />

      {/* Efecto máquina de wscribir */}
      <section>
        <div className="container px-5 text-center" style={{ 'minHeight': '10vh' }}>
          <Typewriter
            options={{
              strings: ['<h2 class="fw-bold">Innovamos en el monitoreo de cultivos agrícolas.</h2>', '<h2 class="fw-bold">Para mejorar la producción de nuestros clientes.</h2>'],
              autoStart: true,
              deleteSpeed: 30,
              delay: 50,
              loop: true,
            }}
          />
        </div>
      </section>

      <hr className="my-5"></hr>

      {/* Descripción de la labor que realizamos */}
      <section>
        <div className="container">
          <div className="text-center mb-4">
            <h3 className="fw-bold"> ¿Qué hacemos? </h3>
          </div>
          <div className="row g-0">
            <div className="col-12 col-md-6">
              <img src="/media/ilustrations/13.png" className="img-fluid" alt="..." />
            </div>
            <div className="col-12 col-md-6 py-5 px-2 text-center text-md-start">
              <span className="align-middle fs-5">
                En Agrobime hemos logrado diseñar e implemntar todo un sistema de monitoreo electrónico de cultivos agrícolas, que nos permiten obtener información de parámetros muy importantes. Con esta información, podemos realizar un análisis de los cultivos y así poder tomar decisiones para mejorar la producción de nuestros clientes. Para este fin, hemos desarrollado esta plataforma web, que nos permite visualizar datos ya procesados, convertidos en estadísticas e informes.
              </span>
            </div>
          </div>
        </div>
      </section>

      <hr className="my-5"></hr>

      {/* Slider con trabajos hechos */}
      <section>
        <div className="container">
          <div className="text-center mb-4">
            <h3 className="fw-bold"> Proyectos en los que participamos </h3>
          </div>
          <div id="carouselExampleDark" className="carousel carousel-dark slide shadow" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="10000">
                <img src="/media/1.jpeg" className="d-block w-100" alt="..." />
                <div className="carousel-caption bg-dark text-light rounded-4 align-middle p-2">
                  {/* <h5>Cultivos</h5> */}
                  <span>Monitoreo del Bio Huerto - Lurin</span>
                </div>
              </div>
              <div className="carousel-item" data-bs-interval="2000">
                <img src="/media/2.jpeg" className="d-block w-100" alt="..." />
                <div className="carousel-caption bg-dark text-light rounded-4 align-middle p-2">
                  {/* <h5>Second slide label</h5> */}
                  <span>Monitoreo del Bio Huerto - Lurin</span>
                </div>
              </div>
              <div className="carousel-item">
                <img src="/media/3.jpeg" className="d-block w-100" alt="..." />
                <div className="carousel-caption bg-dark text-light rounded-4 align-middle p-2">
                  {/* <h5>Third slide label</h5> */}
                  <span>Monitoreo del Bio Huerto - Lurin</span>
                </div>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Anterior</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Siguiente</span>
            </button>
          </div>
        </div>
      </section>

      <hr className="my-5"></hr>

      {/* Nuestro equipo */}
      <section>
        <div className="container">
          <div className="text-center mb-4">
            <h3 className="fw-bold"> Nuestro equipo </h3>
          </div>
          <div className="text-center row row-cols-2 row-cols-md-3 g-4">
            <div className="col">
              <div className="card h-100 border-0 rounded-5 bg-dark text-light">
                <img src="/media/avatars/caleb-icon.jpg" className="card-img-top rounded-5" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Caleb Ventura</h5>
                  <p className="card-text">Ingeniería de Telecomuncaciones</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100 border-0 rounded-5 bg-dark text-light">
                <img src="/media/avatars/jamer.jpg" className="card-img-top rounded-5" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Jamer Asencio</h5>
                  <p className="card-text">Ingeniería Electrónica</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100 border-0 rounded-5 bg-dark text-light">
                <img src="/media/avatars/marjorie.jpg" className="card-img-top rounded-5" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Marjorie Reyes</h5>
                  <p className="card-text">Ingeniería Ambiental</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="my-5"></hr>

      {/* Logos */}
      <section>
        <div className="container">
          <div className="text-center mb-4">
            <h3 className="fw-bold"> Instituciones que nos respaldan</h3>
          </div>
          <div className="row">
            <div className="col-4 text-center">
              <img src="/media/uni.png" className="img-fluid" alt="..." style={{ 'width': '150px' }} />
            </div>
            <div className="col-4 text-center">
              <img src="/media/startupuni.jpg" className="img-fluid" alt="..." style={{ 'width': '150px' }} />
            </div>
            <div className="col-4 text-center">
              <img src="/media/fiee.png" className="img-fluid py-5" alt="..." style={{ 'width': '150px' }} />
            </div>
          </div>
        </div>
      </section>

      <hr className="my-5"></hr>

      <Footer />
    </>
  );
};
