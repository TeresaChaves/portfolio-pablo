import "./ColaDePez.css";
import uno from "../assets/cola-de-pez/1.png";
import dos from "../assets/cola-de-pez/2.jpg";
import tres from "../assets/cola-de-pez/3.png";
import cuatro from "../assets/cola-de-pez/6.jpg";
import cinco from "../assets/cola-de-pez/8.jpg";
import seis from "../assets/cola-de-pez/b.jpeg";
import siete from "../assets/cola-de-pez/c.jpeg";
import ocho from "../assets/cola-de-pez/s.jpeg";
import nueve from "../assets/cola-de-pez/subir2.png";
import diez from "../assets/cola-de-pez/subir3.jpg";
import React, { useState } from "react";

function ColaDePez() {
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

        <div class="caja-container">
          <p className="text-ficha">Javier Lara</p>
          <p className="text-ficha">Pablo Chaves</p>

          <p className="text-ficha">Lorena Toré</p>
          <p className="text-ficha">Natalia Huarte</p>
          <p className="text-ficha">Sala Exlímite</p>
          <p className="text-ficha">Doña Perfectita</p>
        </div>
        <div class="caja-container">
          <p className="text-ficha2">Dirección</p>
          <p className="text-ficha2">Escenografía</p>

          <p className="text-ficha2">Vestuario</p>
          <p className="text-ficha2">Ayte. Dirección</p>
          <p className="text-ficha2">Espacio</p>
          <p className="text-ficha2">Producción</p>
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
export default ColaDePez;
