import "../pages/Home.css";
import { useEffect } from "react";

import { useState } from "react";
import { NavLink } from "react-router-dom";

function Home() {
  useEffect(() => {
    // Función para agregar la clase después de un retraso
    const addSlideInClass = () => {
      const unoImage = document.querySelector(".uno-picture");

      // Verifica si las imágenes existen antes de agregar la clase
      if (unoImage) {
        setTimeout(() => unoImage.classList.add("slide-in"), 0);
      }
    };

    // Agrega la clase después de un retraso de 500ms (ajusta según sea necesario)
    const delay = 500;
    const timeoutId = setTimeout(addSlideInClass, delay);

    // Limpia el timeout al desmontar el componente
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = () => {
      // Puedes ajustar el tiempo que la flecha permanece visible después de un movimiento del ratón
      setTimeout(() => {}, 2000); // 2000 milisegundos (2 segundos) en este ejemplo
    };
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1038);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const tres =
      "https://res.cloudinary.com/dlt2cjtvj/image/upload/f_auto,q_auto,w_1800/v1742915843/PORTFOLIO%20ESCENOGRAFIA/marcela/A_marcela_lkyv4v.jpg",
    uno =
      "https://res.cloudinary.com/dlt2cjtvj/image/upload/f_auto,q_auto,w_1400/v1749204257/PORTFOLIO%20ESCENOGRAFIA/1Los_Nuestros/BB_Los_nuestos_axwyyo.jpg",
    cuatro =
      "https://res.cloudinary.com/dlt2cjtvj/image/upload/v1749640061/PORTFOLIO%20ESCENOGRAFIA/elbanquete/p1luma03_ltgurt.jpg",
    cuatroMobile =
      "https://res.cloudinary.com/dlt2cjtvj/image/upload/v1749639892/PORTFOLIO%20ESCENOGRAFIA/elbanquete/p1luma03web_xps7jm.jpg", // ejemplo: reemplaza con la URL real si es distinta
    seis =
      "https://res.cloudinary.com/dlt2cjtvj/image/upload/v1742915621/PORTFOLIO%20ESCENOGRAFIA/cucaracha/0_kies0u.jpg",
    cinco =
      "https://res.cloudinary.com/dlt2cjtvj/image/upload/v1742915733/PORTFOLIO%20ESCENOGRAFIA/gaviotas/subir3_hqontk.jpg",
    dos =
      "https://res.cloudinary.com/dlt2cjtvj/image/upload/v1742902914/PORTFOLIO%20ESCENOGRAFIA/ColaDePez/1_abwps6.png";

  const images = [
    uno,
    dos,
    tres,
    isMobile ? cuatroMobile : cuatro, // cambio aquí
    cinco,
    seis,
  ];

  // Agrega más imágenes según sea necesario
  const intervalDuration = 5000; // Cambia esto para ajustar la velocidad del carrusel

  useEffect(() => {
    console.log("Efecto carrusel ejecutado");
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, intervalDuration);

    return () => {
      console.log("Limpiando intervalo");
      clearInterval(intervalId);
    };
  }, [images.length, intervalDuration]);

  return (
    <div style={{ fontFamily: "Lato, sans-serif" }}>
      <section className="home-margin">
        <article className="display-picture-home">
          <div className="texto-foto">
            <NavLink to="/proyectos">
              <p className="image-text">Proyectos</p>
            </NavLink>

            <NavLink to="/proyectos"></NavLink>
            <NavLink to="/biografia">
              <p className="image-text">Biografía</p>
            </NavLink>
            <NavLink to="/contacto">
              <p className="image-text">Contacto</p>
            </NavLink>
          </div>
          <NavLink to="/proyectos">
            <div className="image-display">
              <img
                className="uno-picture"
                src={images[currentIndex]}
                alt="proyectos Pablo Chaves"
              />
            </div>
          </NavLink>
        </article>
      </section>
    </div>
  );
}

export default Home;
