import "./ColaDePez.css";

import { Helmet } from "react-helmet";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "react-lazy-load-image-component/src/effects/opacity.css";
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

  const uno =
    "https://res.cloudinary.com/dlt2cjtvj/image/upload/f_auto,q_auto,w_1200/v1742917102/PORTFOLIO%20ESCENOGRAFIA/buenaobra/A_BUENA_OBRA_vy6qgk.jpg";
  const dos =
    "https://res.cloudinary.com/dlt2cjtvj/image/upload/f_auto,q_auto,w_1200,q_auto/v1742917103/PORTFOLIO%20ESCENOGRAFIA/buenaobra/B_BUENA_OBRA_ed7jt8.jpg";
  const tres =
    "https://res.cloudinary.com/dlt2cjtvj/image/upload/f_auto,q_auto,w_1200,q_auto/v1742917114/PORTFOLIO%20ESCENOGRAFIA/buenaobra/C_BUENA_OBRA_fm2erg.jpg";
  const cuatro =
    "https://res.cloudinary.com/dlt2cjtvj/image/upload/f_auto,q_auto,w_1200,q_auto/v1742917105/PORTFOLIO%20ESCENOGRAFIA/buenaobra/D_BUENA_OBRA_mempsl.jpg";
  const cinco =
    "https://res.cloudinary.com/dlt2cjtvj/image/upload/f_auto,q_auto,w_1200,q_auto/v1742917122/PORTFOLIO%20ESCENOGRAFIA/buenaobra/F_BUENA_OBRA_xxy50a.jpg";
  const seis =
    "https://res.cloudinary.com/dlt2cjtvj/image/upload/f_auto,q_auto,w_1200,q_auto/v1742917116/PORTFOLIO%20ESCENOGRAFIA/buenaobra/G_BUENA_OBRA_xah6nz.jpg";
  const siete =
    "https://res.cloudinary.com/dlt2cjtvj/image/upload/f_auto,q_auto,w_1200,q_auto/v1742917107/PORTFOLIO%20ESCENOGRAFIA/buenaobra/H_BUENA_OBRA_xcxc5f.jpg";
  const ocho =
    "https://res.cloudinary.com/dlt2cjtvj/image/upload/f_auto,q_auto,w_1200,q_auto/v1742917109/PORTFOLIO%20ESCENOGRAFIA/buenaobra/I_BUENA_OBRA_wy7mlk.jpg";
  const nueve =
    "https://res.cloudinary.com/dlt2cjtvj/image/upload/f_auto,q_auto,w_1200,q_auto/v1742917111/PORTFOLIO%20ESCENOGRAFIA/buenaobra/J_BUENA_OBRA_c8gd2q.jpg";
  const diez =
    "https://res.cloudinary.com/dlt2cjtvj/image/upload/f_auto,q_auto,w_1200,q_auto/v1742917112/PORTFOLIO%20ESCENOGRAFIA/buenaobra/K_BUENA_OBRA_yf5ips.jpg";
  const once =
    "https://res.cloudinary.com/dlt2cjtvj/image/upload/f_auto,q_auto,w_1200,q_auto/v1742917120/PORTFOLIO%20ESCENOGRAFIA/buenaobra/L_BUENA_OBRA_gqikqg.jpg";
  const doce =
    "https://res.cloudinary.com/dlt2cjtvj/image/upload/f_auto,q_auto,w_1200,q_auto/v1742917118/PORTFOLIO%20ESCENOGRAFIA/buenaobra/E_BUENA_OBRA_ssgppt.jpg";

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
          {imagenes.map((src, index) => (
            <div
              key={index}
              className="grid-item"
              onClick={() => handleImagenClick(index)}>
              <LazyLoadImage
                src={src}
                alt={`Imagen La buena obra de Pablo Chaves ${index + 1}`}
                effect="blur"
              />
            </div>
          ))}
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
