import "../pages/Home.css";
import { useEffect } from "react";

import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";

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
      setTimeout(() => {}, 2000); // 2000 milisegundos (2 segundos) en este ejemplo
    };
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  const [currentIndex, setCurrentIndex] = useState(0);

  const uno =
      "https://res.cloudinary.com/dlt2cjtvj/image/upload/f_auto,q_auto,w_1800/v1742915843/PORTFOLIO%20ESCENOGRAFIA/marcela/A_marcela_lkyv4v.jpg",
    dos =
      "https://res.cloudinary.com/dlt2cjtvj/image/upload/f_auto,q_auto,w_1400/v1744358844/PORTFOLIO%20ESCENOGRAFIA/nofrente/2_wyxih6.jpg",
    tres =
      "https://res.cloudinary.com/dlt2cjtvj/image/upload/v1742915702/PORTFOLIO%20ESCENOGRAFIA/elbanquete/0_krmgfm.jpg",
    cuatro =
      "https://res.cloudinary.com/dlt2cjtvj/image/upload/v1742915621/PORTFOLIO%20ESCENOGRAFIA/cucaracha/0_kies0u.jpg",
    cinco =
      "https://res.cloudinary.com/dlt2cjtvj/image/upload/f_auto,q_auto,w_1400/v1742915733/PORTFOLIO%20ESCENOGRAFIA/gaviotas/subir3_hqontk.jpg";

  const images = [uno, dos, tres, cuatro, cinco];
  const intervalDuration = 5000;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, intervalDuration);

    return () => {
      clearInterval(intervalId);
    };
  }, [images.length, intervalDuration]);

  return (
    <div style={{ fontFamily: "Lato, sans-serif" }}>
      <Helmet>
        <title>Pablo Chaves - Escenógrafo</title>
        <meta
          name="description"
          content="Pablo Chaves Maza es un escenógrafo con formación en arquitectura y escenografía. Con experiencia en los principales teatros de España, ha trabajado en producciones destacadas, aportando su visión innovadora y técnica al diseño escénico."
        />
      </Helmet>
      <h1
        style={{
          position: "absolute",
          left: "-9999px",
          width: "1px",
          height: "1px",
          overflow: "hidden",
        }}>
        Pablo Chaves
      </h1>
      <section className="home-margin-home">
        <article className="display-picture-home">
          <div className="texto-foto">
            <NavLink to="/proyectos-pablo-chaves">
              <p className="image-text">Proyectos</p>
            </NavLink>

            <NavLink to="biografia-pablo-chaves">
              <p className="image-text">Biografía</p>
            </NavLink>
            <NavLink to="/contacto-pablo-chaves">
              <p className="image-text">Contacto</p>
            </NavLink>
          </div>
          <NavLink to="/proyectos-pablo-chaves">
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
