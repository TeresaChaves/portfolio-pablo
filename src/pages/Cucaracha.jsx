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
          <div
            className="cover_cucaracha"
            style={{ backgroundImage: `url(${imagenes[imagenIndex]})` }}
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
          <i className="name-ficha">
            {" "}
            <i className="name-ficha">Estrenada en La Fundición de Sevilla.</i>
          </i>
          <i>
            Dramaturgia y dirección: <span>Javier Ballesteros </span>
          </i>
          <i>
            Escenografía y vestuario: <span>Pablo Chaves</span>
          </i>
          <i>
            Reparto:
            <span>
              Laura Barceló, Pablo Chaves, Eva Chocrón, Virginia de la Cruz,
              Matilde Gimeno, María Jáimez y June Velayos{" "}
            </span>{" "}
          </i>{" "}
          <i>
            Ayte. dirección <span>Víctor Nacarino </span> /Música:
            <span>Isabel Arranz </span>
          </i>{" "}
          <i>
            Coor. producción: <span>Raúl de la Torre</span> / Ayudante de
            producción: <span>Juan Seade </span>
          </i>
          <i>
            Cartelería: <span>Alejandra Sánchez-Mateos</span>
          </i>
          <i>
            Producción: <span>Mujer en obras</span>
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

export default Cucaracha;
