import "./ColaDePez.css";
import uno from "../assets/psicosis/A PSICOSIS 4.48.jpeg";
import dos from "../assets/psicosis/B PSICOSIS 4.48.jpeg";
import tres from "../assets/psicosis/C PSICOSIS 4.48.jpg";
import cuatro from "../assets/psicosis/D PSICOSIS 4.48.jpeg";
import cinco from "../assets/psicosis/E PSICOSIS 4.48.jpeg";
import seis from "../assets/psicosis/F PSICOSIS 4.48.jpeg";
import siete from "../assets/psicosis/G PSICOSIS 4.48.jpg";
import ocho from "../assets/psicosis/H PSICOSIS 4.48.jpg";
import nueve from "../assets/psicosis/I PSICOSIS 4.48.jpg";
import diez from "../assets/psicosis/J PSICOSIS 4.48.jpg";
import once from "../assets/psicosis/K PSICOSIS 4.48.jpg";
import doce from "../assets/psicosis/L PSICOSIS 4.48.jpg";


import React, { useState } from "react";

function Psicosis() {
  const [imagenAmpliada, setImagenAmpliada] = useState(null);
  const [imagenIndex, setImagenIndex] = useState(0);

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
    once,
    doce,
  
  ];

  const cambiarImagen = (direction) => {
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
    <section>
      <div>
        {/* <header>
          <h1>Cola de pez</h1>
        </header> */}
        <div>
          <img
            className="cover_colaPez"
            src={imagenes[imagenIndex]}
            alt={`Imagen ${imagenIndex + 1}`}
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
          <i className="name-ficha">Estrenada en el Teatro Español</i>
          <div className="container-ficha-centrada">
            <i>
              Dirección: <span>Luz Arcas - La Phármaco</span> Con{" "}
              <span>Natalia Huarte</span>
            </i>
            <i>
              Diseño de escenografía: <span>Pablo Chaves</span>
            </i>
            <i>
              Diseño de escenografía: <span>Jorge Colomer / </span> Diseño de
              vestuario: <span>Luz Arcas / </span> Composición música original:{" "}
              <span>Adrián Foulkes</span>
            </i>
            <i>
              Diseño de espacio sonoro: <span>Pablo Contreras / </span>{" "}
              Asistencia artística:
              <span>Victoria Aime</span>
            </i>{" "}
            <i>
              Colaboración artística: <span>Sebastián Vogler </span>/ Mirada
              externa: <span>Teresa Casas</span>
            </i>
            <i>
              Ayudante de dirección: <span>Javier L. Patiño </span> / Residente
              de ayudantía de dirección<span>Cristina Hermida</span>
            </i>
      
            <i>Una coproducción del Teatro Español y La Phármaco</i>
          </div>
        </div>
        <div class="grid-container">
          <div className="grid-item" onClick={() => handleImagenClick(0)}>
            <img src={uno} alt="Imagen 3" />
          </div>
          <div className="grid-item" onClick={() => handleImagenClick(1)}>
            <img src={dos} alt="Imagen 3" />
          </div>
          <div className="grid-item" onClick={() => handleImagenClick(2)}>
            <img src={tres} alt="Imagen 3" />
          </div>
          <div className="grid-item" onClick={() => handleImagenClick(3)}>
            <img src={cuatro} alt="Imagen 3" />
          </div>
          <div className="grid-item" onClick={() => handleImagenClick(4)}>
            <img src={cinco} alt="Imagen 3" />
          </div>
          <div className="grid-item" onClick={() => handleImagenClick(5)}>
            <img src={seis} alt="Imagen 3" />
          </div>

          <div className="grid-item" onClick={() => handleImagenClick(6)}>
            <img src={ocho} alt="Imagen 3" />
          </div>
          <div className="grid-item" onClick={() => handleImagenClick(7)}>
            <img src={nueve} alt="Imagen 3" />
          </div>
          <div className="grid-item" onClick={() => handleImagenClick(8)}>
            <img src={diez} alt="Imagen 3" />
          </div>
          <div className="grid-item" onClick={() => handleImagenClick(9)}>
            <img src={once} alt="Imagen 3" />
          </div>
          <div className="grid-item" onClick={() => handleImagenClick(10)}>
            <img src={doce} alt="Imagen 3" />
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
            <img src={imagenAmpliada} alt="Imagen Ampliada" />
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
export default Psicosis;
