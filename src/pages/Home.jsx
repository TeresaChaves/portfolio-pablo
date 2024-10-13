import uno from "../assets/uno.jpeg";
import dos from "../assets/dos.jpeg";
import tres from "../assets/elbanquete/0.jpg";
import "../pages/Home.css";
import { useEffect } from "react";
import cuatro from "../assets/cucaracha/0.jpg";
import cinco from "../assets/gaviotas/subir3.jpg";
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
  const images = [uno, dos, tres, cuatro, cinco]; // Agrega más imágenes según sea necesario
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
