import NavBar from "../components/NavBar";
import uno from "../assets/uno.jpeg";
import dos from "../assets/dos.jpeg";
import tres from "../assets/tres.jpeg";
import "../pages/Home.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import cuatro from "../assets/cuatro.jpeg";

function Home() {
  useEffect(() => {
    // Función para agregar la clase después de un retraso
    const addSlideInClass = () => {
      const unoImage = document.querySelector(".uno-picture");
      const dosImage = document.querySelector(".dos-picture");
      const tresImage = document.querySelector(".tres-picture");
      const cuatroImage = document.querySelector(".cuatro-picture");

      // Verifica si las imágenes existen antes de agregar la clase
      if (unoImage && dosImage) {
        setTimeout(() => unoImage.classList.add("slide-in"), 0);
        setTimeout(() => dosImage.classList.add("slide-in"), 500);
        setTimeout(() => tresImage.classList.add("slide-in"), 700);
        setTimeout(() => cuatroImage.classList.add("slide-in"), 700);
      }
    };

    // Agrega la clase después de un retraso de 500ms (ajusta según sea necesario)
    const delay = 500;
    const timeoutId = setTimeout(addSlideInClass, delay);

    // Limpia el timeout al desmontar el componente
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="App" style={{ fontFamily: "Lato, sans-serif" }}>
      <section>
        <article className="display-picture-home">
          <p className="image-text">El no se que</p>
          <img className="dos-picture" src={uno} alt="" />
        </article>
        <Link to={"/el-banquete"}>
          <article className="display-picture-home">
            <p className="image-text">El banquete</p>
            <img className="uno-picture" src={tres} alt="" />
          </article>
        </Link>
        <article className="display-picture-home">
          <p className="image-text">El no se que</p>
          <img className="tres-picture" src={dos} alt="" />
        </article>
        <article className="display-picture-home">
          <p className="image-text">El no se que</p>
          <img className="cuatro-picture" src={cuatro} alt="" />
        </article>
      </section>
    </div>
  );
}

export default Home;
