import "./ColaDePez.css";
import uno from "../assets/cucaracha/0.jpg";
import dos from "../assets/cucaracha/0b.jpg";
import tres from "../assets/cucaracha/0c.jpg";
import cuatro from "../assets/cucaracha/0d.jpg";
import cinco from "../assets/cucaracha/1.jpg";
import seis from "../assets/cucaracha/3.jpg";
import siete from "../assets/cucaracha/6.jpg";
import ocho from "../assets/cucaracha/7.jpg";
import nueve from "../assets/cucaracha/8.jpg";
import diez from "../assets/cucaracha/9.png";
import React, { useState } from "react";

function Cucaracha() {
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
        <div className="container-ficha-centrada">
          <i>
            Dirección: <span>Javier Lara</span> / Espacio escénico:{" "}
            <span>Pablo Chaves</span>
          </i>
          <i>
            Intérprete: <span>Egoitz Sánchez</span>
          </i>
          <i>
            Diseño de iluminación:<span>Lola Barroso </span> / Ayudante de
            iluminación: <span>Elena Alejandre</span>
          </i>{" "}
          <i>
            Diseño de vestuario: <span>Marta Murillo</span> / Diseño de sonido:
            <span>Pablo Martínez</span>
          </i>{" "}
          <i>
            Directora de producción: <span>Milena Suárez</span> / Ayudante de
            producción: <span>Paula Pina</span>
          </i>
          <i>
            Equipo S. Cervantina: <span>Ana Carrera, Jaime Saavedra</span> /
            Edición de visuales: <span>Ana Caro</span>
          </i>
          <i>
            Diseño gráfico: <span>Jesús Bosqued </span>/Interpretación:{" "}
            <span>Celia Freijeiro</span>
          </i>
          <i>Una producción de la Sociedad Cervantina</i>
          <i>con el apoyo de INAEM y Fundación La Caixa</i>
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
export default Cucaracha;
