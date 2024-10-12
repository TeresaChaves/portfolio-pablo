import "./ColaDePez.css";
import uno from "../assets/elbanquete/1.jpg";
import dos from "../assets/elbanquete/3.jpg";
import tres from "../assets/elbanquete/5.jpg";
import cuatro from "../assets/elbanquete/6.JPG";
import cinco from "../assets/elbanquete/8.JPG";
import seis from "../assets/elbanquete/b.JPG";
import siete from "../assets/elbanquete/c.JPG";
import ocho from "../assets/elbanquete/s.JPG";
import nueve from "../assets/elbanquete/subir2.JPG";
import diez from "../assets/elbanquete/subir3.JPG";
import React, { useState } from "react";

function ElBanquete() {
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
          <i className="name-ficha">Estrenada en Exlímite y Nave 73</i>
          <i>
            Dirección: <span>Adrián Pulido</span>
          </i>
          <i>
            Escenografía y vestuario <span>Pablo Chaves</span>
          </i>
          <i>
            Texto: <span>Tony Galán</span>
          </i>
          <i>
            Mundo sonoro: :
            <span>Adrián Pulido, Pablo Sánchez y Juan Sánchez </span>
          </i>{" "}
          <i>
            Dirección de movimiento: <span>Juando Martínez Montiel / </span>
            Diseño de Luces
            <span>Alvaro Guisado Garavito</span>
          </i>{" "}
          <i>
            Ayudantía de dirección: <span>: Iñaki Danta </span> /Fotografía y
            cartel: <span>Xose Roi Martínez</span>
          </i>
          <i>
            Comunicación y prensa: <span>de Amanda H C - Proyecto Duas</span> 
          </i>
      
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
export default ElBanquete;
