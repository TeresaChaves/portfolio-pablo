import React, { useState, useEffect } from "react";
import "./Proyectos.css";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "react-lazy-load-image-component/src/effects/opacity.css";

import { NavLink } from "react-router-dom";

function Proyectos() {
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

  const nueve =
    "https://res.cloudinary.com/dlt2cjtvj/image/upload/w_1200,f_auto/v1742915801/PORTFOLIO%20ESCENOGRAFIA/lafortaleza/C_LA_FORTALEZA_tq3lod.jpg";
  const ocho =
    "https://res.cloudinary.com/dlt2cjtvj/image/upload/w_1200,f_auto/v1742915843/PORTFOLIO%20ESCENOGRAFIA/marcela/A_marcela_lkyv4v.jpg";
  const uno =
    "https://res.cloudinary.com/dlt2cjtvj/image/upload/w_1200,f_auto/v1742915916/PORTFOLIO%20ESCENOGRAFIA/perfil/uno_vcejid.jpg";
  const doce =
    "https://res.cloudinary.com/dlt2cjtvj/image/upload/f_auto,q_auto,w_1400/v1742915763/PORTFOLIO%20ESCENOGRAFIA/guerra/B_SOMOS_LA_GUERRA_eby1hr.jpg";
  const catorce =
    "https://res.cloudinary.com/dlt2cjtvj/image/upload/w_1200,f_auto/v1742915653/PORTFOLIO%20ESCENOGRAFIA/Domesticacion/A_LA_DOMEST_a9f6ca.jpg";
  const trece =
    "https://res.cloudinary.com/dlt2cjtvj/image/upload/w_1200,f_auto/v1742917102/PORTFOLIO%20ESCENOGRAFIA/buenaobra/A_BUENA_OBRA_vy6qgk.jpg";
  const diez =
    "https://res.cloudinary.com/dlt2cjtvj/image/upload/w_1200,f_auto/v1742915897/PORTFOLIO%20ESCENOGRAFIA/tablao/A_Tablao_cn5val.jpg";
  const once =
    "https://res.cloudinary.com/dlt2cjtvj/image/upload/w_1200,f_auto/v1742902837/PORTFOLIO%20ESCENOGRAFIA/PSICOSIS/A_PSICOSIS_4.48_j102mf.jpg";
  const seis =
    "https://res.cloudinary.com/dlt2cjtvj/image/upload/w_1200,f_auto/v1742915733/PORTFOLIO%20ESCENOGRAFIA/gaviotas/subir3_hqontk.jpg";
  const siete =
    "https://res.cloudinary.com/dlt2cjtvj/image/upload/w_1200,f_auto/v1742915702/PORTFOLIO%20ESCENOGRAFIA/elbanquete/0_krmgfm.jpg";
  const cinco =
    "https://res.cloudinary.com/dlt2cjtvj/image/upload/w_1200,f_auto/v1742915621/PORTFOLIO%20ESCENOGRAFIA/cucaracha/0_kies0u.jpg";
  const dos =
    "https://res.cloudinary.com/dlt2cjtvj/image/upload/w_1200,f_auto/v1742915924/PORTFOLIO%20ESCENOGRAFIA/perfil/dos_ptpi5h.jpg";
  const quince =
    "https://res.cloudinary.com/dlt2cjtvj/image/upload/f_auto,q_auto,w_1400/v1749204257/PORTFOLIO%20ESCENOGRAFIA/1Los_Nuestros/BB_Los_nuestos_axwyyo.jpg";
  const dieciseis =
    "https://res.cloudinary.com/dlt2cjtvj/image/upload/f_auto,q_auto,w_800/v1749210188/PORTFOLIO%20ESCENOGRAFIA/2LasApariciones/A_Apariciones_1_2_-min_isz5if.png";
  const diecisiete =
    "https://res.cloudinary.com/dlt2cjtvj/image/upload/f_auto,q_auto,w_800/v1749229117/PORTFOLIO%20ESCENOGRAFIA/3Peque%C3%B1oCUmulo/A_Peque%C3%B1o_c%C3%BAmulo-min_io7ip6.jpg";
  const dieciocho =
    "https://res.cloudinary.com/dlt2cjtvj/image/upload/f_auto,q_auto,w_1400/v1749230587/PORTFOLIO%20ESCENOGRAFIA/4Matrimonio%20Blanco/B_Matrimonio_blanco-min_w9mcfd.jpg";
  // Array de proyectos
  const proyectos = [
    {
      title: "Los Nuestros",
      imgSrc: quince,
      direccion: "Lucía Carballal",
      lugar: "Centro Dramático Nacional",
      link: "/losNuestros",
    },
    {
      title: "Las Apariciones",
      imgSrc: dieciseis,
      direccion: "Juan Ceacero",
      lugar: "Centro Dramatico Nacional",
      link: "/lasApariciones",
    },
    {
      title: "Pequeño Cúmulo de Abismos",
      imgSrc: diecisiete,
      direccion: "Cris Blanco",
      lugar: "Teatro María Guerrero",
      link: "/pequenoCumuloDeAbismos",
    },

    {
      title: "La Fortaleza",
      imgSrc: nueve,
      direccion: "Lucía Carballal",
      lugar: "Teatro de la Comedia",
      link: "/laFortaleza",
    },

    {
      title: "Marcela: Una canción de Cervantes",
      imgSrc: ocho,
      direccion: "Leticia Dolera",
      lugar: "Sala Cervantina",
      link: "/marcela",
    },
    {
      title: "Cola de pez",
      imgSrc: uno,
      direccion: "Natalia Huerte y Javier Lara",
      lugar: "Bastero Kulturgunea",
      link: "/colaDePez",
    },
    {
      title: "La trilogía: Somos la guerra",
      imgSrc: doce,
      direccion: "Luz Arcas",
      lugar: "Teatros del Canal",
      link: "/somosLaGuerra",
    },
    {
      title: " La trilogía: La Domesticación",
      imgSrc: catorce,
      direccion: "Luz Arcas",
      lugar: "Teatros del Canal",
      link: "/laDomesticacion",
    },
    {
      title: "La trilogía: La Buena Obra",
      imgSrc: trece,
      direccion: "Luz Arcas",
      lugar: "Teatros del Canal",
      link: "/buenaobra",
    },
    {
      title: "Tablao",
      imgSrc: diez,
      direccion: "Ernesto Artillo",
      lugar: "Ca2m y Condeduque",
      link: "/tablao",
    },
    {
      title: "Psicosis 4.48",
      imgSrc: once,
      direccion: "Luz Arcas",
      lugar: " Teatro Español",
      link: "/psicosis",
    },
    {
      title: "Gaviotas",
      imgSrc: seis,
      direccion: "Gritadero Teatro",
      lugar: "Umbral del la Primavera",
      link: "/gaviotas",
    },
    {
      title: "El banquete",
      imgSrc: siete,
      direccion: "Adrián Pulido",
      lugar: "Nave 73",
      link: "/elbanquete",
    },
    {
      title: "Cucaracha con paisaje de fondo",
      imgSrc: cinco,
      direccion: "Javier Ballesteros",
      lugar: "Teatro Español",
      link: "/cucaracha",
    },
    {
      title: "No estoy de frente",
      imgSrc: dos,
      direccion: "Paco León",
      lugar: "Sala Exlímite",
      link: "/noEstoyDeFrente",
    },
    {
      title: "Matrimonio Blanco",
      imgSrc: dieciocho,
      direccion: "Flavia Forni y Icíar Ventepan",
      lugar: "Sala Réplika",
      link: "/matrimonioBlanco",
    },
  ];

  return (
    <section
      className="home-margin"
      aria-label="Pablo Chaves Maza, escenógrafo en España especializado en diseño de escenografías teatrales">
      <header className="header-display">
        <p>proyectos</p>
      </header>

      {proyectos.map((proyecto, index) => (
        <NavLink to={proyecto.link} key={proyecto.title}>
          <article className="article-proyectos-display">
            {/* Condicional para la disposición de texto e imagen */}
            {isMobile ? (
              <>
                <div className="container-img-proyectos">
                  <LazyLoadImage
                    src={proyecto.imgSrc}
                    alt={`foto de proyecto ${proyecto.title}`}
                    className="img-proyectos"
                    effect="opacity"
                  />
                  <div className="responsive-align-project-name">
                    <div className="texto-proyectos-name">
                      <p>{proyecto.title}</p>
                    </div>

                    <div className="texto-proyectos-name">
                      <div className="entrelineas">
                        <span className="text-teatro-light">Dirección: </span>
                        <span>{proyecto.direccion}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="texto-proyectos-name">
                  <p>{proyecto.title}</p>
                </div>
                <div className="container-img-proyectos">
                  <LazyLoadImage
                    src={proyecto.imgSrc}
                    alt={`foto de proyecto ${proyecto.title}`}
                    className="img-proyectos"
                    effect="opacity"
                  />
                </div>
                <div className="texto-proyectos-name">
                  <div className="entrelineas">
                    <span className="text-teatro-light">Dirección: </span>
                    <span>{proyecto.direccion}</span>
                  </div>
                  <div>
                    <span>{proyecto.lugar}</span>
                  </div>
                </div>
              </>
            )}
          </article>
        </NavLink>
      ))}
    </section>
  );
}

export default Proyectos;
