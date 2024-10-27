import React, { useState, useEffect } from "react";
import "./Proyectos.css";
import uno from "../assets/uno.jpeg";
import dos from "../assets/dos.jpeg";
import cinco from "../assets/cucaracha/0.jpg";
import seis from "../assets/gaviotas/subir3.jpg";
import siete from "../assets/elbanquete/0.jpg";
import ocho from "../assets/prueba/A marcela.jpg";
import nueve from "../assets/la-fortaleza/C LA FORTALEZA.jpeg";
import diez from "../assets/tablao/A Tablao.jpg";
import once from "../assets/psicosis/A PSICOSIS 4.48.jpeg";
import doce from "../assets/guerra/A SOMOS LA GUERRA.jpg";
import trece from "../assets/BuenaObra/A BUENA OBRA.jpg";
import catorce from "../assets/Domesticacion/A LA DOMEST.jpg";
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

  // Array de proyectos
  const proyectos = [
    {
      title: "La Fortaleza",
      imgSrc: nueve,
      direccion: "Lucía Carballal",
      lugar: "Teatro de la Comedia",
      link: "/fortaleza",
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
      link: "/cola-de-pez",
    },
    {
      title: "La trilogía: Somos la guerra",
      imgSrc: doce,
      direccion: "Luz Arcas",
      lugar: "Teatro del Canal",
      link: "/somos-la-guerra",
    },
    {
      title: " La trilogía: La Domesticación",
      imgSrc: catorce,
      direccion: "Luz Arcas",
      lugar: "Teatro del Canal",
      link: "/domesticacion",
    },
    {
      title: "La trilogía: La Buena Obra",
      imgSrc: trece,
      direccion: "Luz Arcas",
      lugar: "Teatro del Canal",
      link: "/buena-obra",
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
      link: "/no-estoy-de-frente",
    },
  ];

  return (
    <section className="home-margin">
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
