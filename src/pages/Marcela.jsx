import "./ColaDePez.css";
import uno from "../assets/prueba/A marcela.jpg";
import dos from "../assets/prueba/B Marcela.jpg";
import tres from "../assets/prueba/C Marcela.jpg";
import cuatro from "../assets/prueba/C Marcela.jpg";
import cinco from "../assets/prueba/D Marcela.jpg";
import seis from "../assets/prueba/F Marcela.jpg";
import siete from "../assets/prueba/G Marcela.jpg";
import ocho from "../assets/prueba/H Marcela.jpg";
import nueve from "../assets/prueba/I Marcela.jpg";
import diez from "../assets/prueba/J Marcela.jpg";
import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "react-lazy-load-image-component/src/effects/opacity.css";
import { useEffect } from "react";

function Marcela() {
  const [imagenAmpliada, setImagenAmpliada] = useState(null);
  const [imagenIndex, setImagenIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1200);

    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 1200);
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);


  const handleImagenClick = (index) => {
    setImagenAmpliada(imagenes[index]);
    setImagenIndex(index);
  };

  const cerrarImagenAmpliada = () => {
    setImagenAmpliada(null);
  };

  const imagenes = [
    uno,
    dos,
    tres,
    cuatro,
    cinco,
    seis,
    siete,
    ocho,
    nueve,
    diez,
  ];

  const cambiarImagen = (direction) => {
    console.log("ImagenIndex antes del cambio:", imagenIndex);
    const newIndex =
      (imagenIndex + direction + imagenes.length) % imagenes.length;
    console.log("Nuevo índice de imagen:", newIndex);
    setImagenAmpliada(imagenes[newIndex]);
    setImagenIndex(newIndex);
  };
  function Indicadores({ total, actual }) {
    const puntos = Array.from({ length: total }, (_, index) => (
      <span key={index} className={index === actual ? "activo" : ""} />
    ));

    return <div className="indicadores">{puntos}</div>;
  }

  return (
    <section className="home-margin">
      <div>
        {/* <header>
          <h1>Cola de pez</h1>
        </header> */}
        <div>
          <LazyLoadImage
            className="cover_colaPez"
            src={imagenes[imagenIndex]}
            alt={`Imagen ${imagenIndex + 1}`}
            effect="blur"
          />
          <button
            className="button-izquierda-cover"
            onClick={() =>
              setImagenIndex(
                (prevIndex) =>
                  (prevIndex - 1 + imagenes.length) % imagenes.length
              )
            }
          >
            ❮
          </button>
          <button
            className="button-derecha-cover"
            onClick={() =>
              setImagenIndex((prevIndex) => (prevIndex + 1) % imagenes.length)
            }
          >
            ❯
          </button>
        </div>
        <Indicadores total={imagenes.length} actual={imagenIndex} />
      </div>

      <div class="container">
        <div className="container-ficha-centrada">
          <div className="container-ficha-centrada">
            <i className="name-ficha">Estrenada en la Sala Cervantina.</i>
            {isMobile ? (
              <>
                <i>
                  Dirección: <span>Leticia Dolera / </span> Dramaturgia:{" "}
                  <span>María Folguera</span>
                </i>
                <i>
                  Diseño espacio escénico <span>Pablo Chaves</span>
                </i>
                <i>
                  Diseño de iluminación:<span>Lola Barroso </span> / Ayudante de
                  iluminación: <span>Elena Alejandre</span>
                </i>{" "}
                <i>
                  Diseño de vestuario: <span>Marta Murillo</span> / Diseño de
                  sonido:
                  <span>Pablo Martínez</span>
                </i>{" "}
                <i>
                  Directora de producción: <span>Milena Suárez</span> / Ayudante
                  de producción: <span>Paula Pina</span>
                </i>
                <i>
                  Equipo S. Cervantina: <span>Ana Carrera, Jaime Saavedra</span>{" "}
                  / Edición de visuales: <span>Ana Caro</span>
                </i>
                <i>
                  Diseño gráfico: <span>Jesús Bosqued </span>/Interpretación:{" "}
                  <span>Celia Freijeiro</span>
                </i>
                <i>Una producción de la Sociedad Cervantina</i>
                <i>con el apoyo de INAEM y Fundación La Caixa</i>
              </>
            ) : (
              <>
                <i>
                  Dirección: <span>Leticia Dolera / </span> Dramaturgia:{" "}
                  <span>María Folguera</span>/ Diseño espacio escénico{" "}
                  <span>Pablo Chaves</span>
                </i>
                <i>
                  Diseño de iluminación:<span>Lola Barroso </span> / Ayudante de
                  iluminación: <span>Elena Alejandre</span>
                </i>{" "}
                <i>
                  Diseño de vestuario: <span>Marta Murillo</span> / Diseño de
                  sonido:
                  <span>Pablo Martínez</span>
                </i>{" "}
                <i>
                  Directora de producción: <span>Milena Suárez</span> / Ayudante
                  de producción: <span>Paula Pina</span>
                </i>
                <i>
                  Equipo S. Cervantina: <span>Ana Carrera, Jaime Saavedra</span>{" "}
                  / Edición de visuales: <span>Ana Caro</span>
                </i>
                <i>
                  Diseño gráfico: <span>Jesús Bosqued </span>/Interpretación:{" "}
                  <span>Celia Freijeiro</span>
                </i>
                <i>Una producción de la Sociedad Cervantina</i>
                <i>con el apoyo de INAEM y Fundación La Caixa</i>
              </>
            )}
          </div>
        </div>
        <div class="grid-container">
          <div className="grid-item" onClick={() => handleImagenClick(0)}>
            <LazyLoadImage src={uno} alt="Imagen 3" effect="blur" />
          </div>
          <div className="grid-item" onClick={() => handleImagenClick(1)}>
            <LazyLoadImage src={dos} alt="Imagen 3" effect="blur" />
          </div>
          <div className="grid-item" onClick={() => handleImagenClick(2)}>
            <LazyLoadImage src={tres} alt="Imagen 3" effect="blur" />
          </div>
          <div className="grid-item" onClick={() => handleImagenClick(3)}>
            <LazyLoadImage src={cuatro} alt="Imagen 3" effect="blur" />
          </div>
          <div className="grid-item" onClick={() => handleImagenClick(4)}>
            <LazyLoadImage src={cinco} alt="Imagen 3" effect="blur" />
          </div>
          <div className="grid-item" onClick={() => handleImagenClick(5)}>
            <LazyLoadImage src={seis} alt="Imagen 3" effect="blur" />
          </div>

          <div className="grid-item" onClick={() => handleImagenClick(6)}>
            <LazyLoadImage src={ocho} alt="Imagen 3" effect="blur" />
          </div>
          <div className="grid-item" onClick={() => handleImagenClick(7)}>
            <LazyLoadImage src={nueve} alt="Imagen 3" effect="blur" />
          </div>
          <div className="grid-item" onClick={() => handleImagenClick(8)}>
            <LazyLoadImage src={diez} alt="Imagen 3" effect="blur" />
          </div>
        </div>
      </div>
      <div
        className={`imagen-ampliada ${imagenAmpliada ? "visible" : ""}`}
        onClick={cerrarImagenAmpliada}
      >
        {imagenAmpliada && (
          <>
            <button
              className="button-izquierda"
              onClick={(e) => {
                e.stopPropagation();
                cambiarImagen(-1);
              }}
            >
              ❮
            </button>
            <LazyLoadImage src={imagenAmpliada} alt="Imagen Ampliada" />
            <button
              className="button-derecha"
              onClick={(e) => {
                e.stopPropagation();
                cambiarImagen(1);
              }}
            >
              ❯
            </button>
          </>
        )}
      </div>
    </section>
  );
}
export default Marcela;