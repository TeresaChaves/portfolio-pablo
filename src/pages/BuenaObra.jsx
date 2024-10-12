import "./ColaDePez.css";
import uno from "../assets/BuenaObra/A BUENA OBRA.jpg";
import dos from "../assets/BuenaObra/B BUENA OBRA.jpg";
import tres from "../assets/BuenaObra/C BUENA OBRA.jpg";
import cuatro from "../assets/BuenaObra/D BUENA OBRA.jpg";
import cinco from "../assets/BuenaObra/E BUENA OBRA.jpg";
import seis from "../assets/BuenaObra/F BUENA OBRA.jpg";
import siete from "../assets/BuenaObra/G BUENA OBRA.jpg";
import ocho from "../assets/BuenaObra/H BUENA OBRA.jpg";
import nueve from "../assets/BuenaObra/I BUENA OBRA.jpg";
import diez from "../assets/BuenaObra/J BUENA OBRA.jpg";
import once from "../assets/BuenaObra/K BUENA OBRA.jpg";
import doce from "../assets/BuenaObra/L BUENA OBRA.jpg";




import React, { useState } from "react";

function BuenaObra() {
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
          <i className="name-ficha">Estrenada en el Teatro de la Comedia.</i>
          <div className="container-ficha-centrada">
            <i>
              Texto y dirección: <span>Lucía Carballal</span> Escenografía y
              vestuario: <span>Pablo Chaves</span>
            </i>
            <i>
              Iluminación: <span>Pilar Valdelvira / </span>
            </i>
            <i>
              Diseño de sonido<span>Benigno Moreno </span> Vídeoescena:{" "}
              <span>Elvira Ruiz Zurita / </span>
            </i>{" "}
            <i>
              texto vídeoescena: <span>: Pablo Carballal</span> Ayudante de
              dirección
              <span>Aitana Sar</span>
            </i>{" "}
            <i>
              Agradecimientos:{" "}
              <span>
                Lola Luengo, Luis Sorolla, Marc Domingo Carulla, Fernando de
                Retes, Aurelia González Y Sergio Adillo
              </span>{" "}
            </i>
            <i>Producción: Compañía Nacional de Teatro Clásico </i>
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
export default BuenaObra;
