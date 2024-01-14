import NavBar from "../components/NavBar";
import uno from "../assets/uno.jpeg";
import dos from "../assets/dos.jpeg";
import tres from "../assets/elbanquete/0.jpg";
import "../pages/Home.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import cuatro from "../assets/cucaracha/0.jpg";
import cinco from "../assets/gaviotas/subir3.jpg";
import { useState } from "react";
import { NavLink } from "react-router-dom";

function Home() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    // Función para agregar la clase después de un retraso
    const addSlideInClass = () => {
      const unoImage = document.querySelector(".uno-picture");
      // const dosImage = document.querySelector(".dos-picture");
      // const tresImage = document.querySelector(".tres-picture");
      // const cuatroImage = document.querySelector(".cuatro-picture");

      // Verifica si las imágenes existen antes de agregar la clase
      if (unoImage) {
        setTimeout(() => unoImage.classList.add("slide-in"), 0);
        // setTimeout(() => dosImage.classList.add("slide-in"), 500);
        // setTimeout(() => tresImage.classList.add("slide-in"), 700);
        // setTimeout(() => cuatroImage.classList.add("slide-in"), 700);
      }
    };

    // Agrega la clase después de un retraso de 500ms (ajusta según sea necesario)
    const delay = 500;
    const timeoutId = setTimeout(addSlideInClass, delay);

    // Limpia el timeout al desmontar el componente
    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    const handleMouseMove = () => {
      setIsVisible(true);
      // Puedes ajustar el tiempo que la flecha permanece visible después de un movimiento del ratón
      setTimeout(() => {
        setIsVisible(false);
      }, 2000); // 2000 milisegundos (2 segundos) en este ejemplo
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
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, intervalDuration);

    return () => clearInterval(intervalId);
  }, [currentIndex, images.length]);

  return (
    <div style={{ fontFamily: "Lato, sans-serif" }}>
      <section className="home-margin">
        <article className="display-picture-home">
          <div className="texto-foto">
            <NavLink to="/proyectos">
              <p className="image-text">Proyectos</p>
            </NavLink>
            <NavLink to="/proyectos">
              <p className="image-text">Coordinación</p>
            </NavLink>
            <p className="image-text">Ayudantías</p>
            <NavLink to="/proyectos"></NavLink>
            <NavLink to="/proyectos">
              <p className="image-text">Bio</p>
            </NavLink>
            <NavLink to="/proyectos">
              <p className="image-text">Contacto</p>
            </NavLink>
          </div>
          <div className="image-display">
            <img className="uno-picture" src={images[currentIndex]} alt="" />
          </div>
        </article>

        {/* <Link to={"/el-banquete"}>
          <article className="display-picture-home">
            <div className="texto-foto">
              <p className="image-text">El no se que</p>
              <hr />

              <span className="text-teatro-light">Dirección: </span>
              <span>Teresa Chaves</span>
              <br />
              <span className="text-teatro-light">Teatro: </span>
              <span>Fundación Canal</span>
            </div>
            <img className="dos-picture" src={tres} alt="" />
          </article>
        </Link>
        <article className="display-picture-home">
          <div className="texto-foto">
            <p className="image-text">El no se que</p>
            <hr />

            <span className="text-teatro-light">Dirección: </span>
            <span>Teresa Chaves</span>
            <br />
            <span className="text-teatro-light">Teatro: </span>
            <span>Fundación Canal</span>
          </div>
          <img className="tres-picture" src={dos} alt="" />
        </article>
        <article className="display-picture-home">
          <div className="texto-foto">
            <p className="image-text">El no se que</p>
            <hr />

            <span className="text-teatro-light">Dirección: </span>
            <span>Teresa Chaves</span>
            <br />
            <span className="text-teatro-light">Teatro: </span>
            <span>Fundación Canal</span>
          </div>
          <img className="cuatro-picture" src={cuatro} alt="" />
        </article> */}
        {/* {isVisible ? (
          <div className="scroll-indicator">
            <span className="color-flecha">🡇</span>
          </div>
        ) : null} */}
      </section>
    </div>
  );
}

export default Home;
