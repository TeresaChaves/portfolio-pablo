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
import { Helmet } from "react-helmet";

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
    <section
      className="home-margin"
      aria-label="Pablo Chaves Maza, escenógrafo en España especializado en diseño de escenografías teatrales">
      <div>
        {/* <header>
          <h1>Cola de pez</h1>
        </header> */}
        <Helmet>
          <title>La Buena Obra || Pablo Chaves</title>
          <meta
            name="description"
            content="Proyecto Domesticación de Pablo Chaves estrenada en los Teatros del Canal"
          />
        </Helmet>
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
            }>
            ❮
          </button>
          <button
            className="button-derecha-cover"
            onClick={() =>
              setImagenIndex((prevIndex) => (prevIndex + 1) % imagenes.length)
            }>
            ❯
          </button>
        </div>
        <Indicadores total={imagenes.length} actual={imagenIndex} />
      </div>
      <div class="container">
        <div className="container-ficha-centrada">
          <i className="name-ficha">Estrenada en los Teatros del Canal</i>
          <div className="container-ficha-centrada">
            <i>
              Dirección artística, coreografía, dramaturgia, espacio escénico:
              <span>Luz Arcas</span> Espacio escénico:{" "}
              <span>: Luz Arcas y Pablo Chaves</span>
            </i>
            <i>
              Acompañamiento artístico y dramatúrgico{" "}
              <span>Victoria Aimé y Rafael SM Paniagua </span>
            </i>
            <i>
              Música: <span>Le Parody / </span> Iluminación:{" "}
              <span>Jorge Colomer / </span>Espacio sonoro:{" "}
              <span>Pablo Contreras</span>
            </i>{" "}
            <i>
              Texto: <span>:Luz Arcas y Abraham Gragera / </span> Vestuario:
              <span>
                Luz Arcas, Victoria Aime, Rafael SM Panigua Roberto Martínez
              </span>
            </i>{" "}
            <i>
              Foto y vídeo promocional: <span>Virginia Rota /</span> Diseño
              gráfico: <span>María Peinado</span>
            </i>
            <i>
              Dirección técnica: <span>Cristina L. Bolívar </span>{" "}
            </i>
            <i>
              Diseño y coordinación de producción:{" "}
              <span>Alex Foulkes y Alberto Núñez</span>
            </i>
            <i>
              Producción ejecutiva: <span>Fernando Jariego</span>{" "}
            </i>
          </div>
        </div>
        <div class="grid-container">
          <div className="grid-item" onClick={() => handleImagenClick(0)}>
            <img src={uno} alt="Imagen La buena obra de Pablo Chaves" />
          </div>
          <div className="grid-item" onClick={() => handleImagenClick(1)}>
            <img src={dos} alt="Imagen La buena obra de Pablo Chaves" />
          </div>
          <div className="grid-item" onClick={() => handleImagenClick(2)}>
            <img src={tres} alt="Imagen La buena obra de Pablo Chaves" />
          </div>
          <div className="grid-item" onClick={() => handleImagenClick(3)}>
            <img src={cuatro} alt="Imagen La buena obra de Pablo Chaves" />
          </div>
          <div className="grid-item" onClick={() => handleImagenClick(4)}>
            <img src={cinco} alt="Imagen La buena obra de Pablo Chaves" />
          </div>
          <div className="grid-item" onClick={() => handleImagenClick(5)}>
            <img src={seis} alt="Imagen La buena obra de Pablo Chaves" />
          </div>

          <div className="grid-item" onClick={() => handleImagenClick(6)}>
            <img src={ocho} alt="Imagen La buena obra de Pablo Chaves" />
          </div>
          <div className="grid-item" onClick={() => handleImagenClick(7)}>
            <img src={nueve} alt="Imagen 3" />
          </div>
          <div className="grid-item" onClick={() => handleImagenClick(8)}>
            <img src={diez} alt="Imagen La buena obra de Pablo Chaves" />
          </div>
          <div className="grid-item" onClick={() => handleImagenClick(9)}>
            <img src={once} alt="Imagen La buena obra de Pablo Chaves" />
          </div>
          <div className="grid-item" onClick={() => handleImagenClick(10)}>
            <img src={doce} alt="Imagen La buena obra de Pablo Chaves" />
          </div>
        </div>
      </div>
      <div
        className={`imagen-ampliada ${imagenAmpliada ? "visible" : ""}`}
        onClick={cerrarImagenAmpliada}>
        {imagenAmpliada && (
          <>
            <button
              className="button-izquierda"
              onClick={(e) => {
                e.stopPropagation();
                cambiarImagen(-1);
              }}>
              ❮
            </button>
            <img
              src={imagenAmpliada}
              alt="Imagen Full Screnn proyecto Pablo Chaves"
            />
            <button
              className="button-derecha"
              onClick={(e) => {
                e.stopPropagation();
                cambiarImagen(1);
              }}>
              ❯
            </button>
          </>
        )}
      </div>
    </section>
  );
}
export default BuenaObra;
