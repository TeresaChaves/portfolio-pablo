import React from "react";
import "./Proyectos.css";
import uno from "../assets/uno.jpeg";
import dos from "../assets/dos.jpeg";
import cinco from "../assets/cucaracha/0.jpg";
import seis from "../assets/gaviotas/subir3.jpg";
import siete from "../assets/elbanquete/0.jpg";
import ocho from "../assets/prueba/A marcela.jpg";
import { NavLink } from "react-router-dom";

function Proyectos() {
  return (
    <section className="home-margin">
      <header className="header-display">
        <p>proyectos</p>
      </header>
      <NavLink to="/cola-de-pez">
        <article className="article-proyectos-display">
          <div className="texto-proyectos-name">
            <p>Cola de pez</p>
          </div>
          <div>
            <img
              className="img-proyectos"
              src={uno}
              alt="foto de proyecto uno"
            ></img>
          </div>
          <div className="texto-proyectos-name">
            <div className="entrelineas">
              <span className="text-teatro-light">Dirección: </span>
              <span>Natalia Huerte y Javier Lara</span>
            </div>
            <div>
              <span className="text-teatro-light">En: </span>
              <span>Bastero Kulturgunea</span>
            </div>
          </div>
        </article>
      </NavLink>
      <NavLink to="/no-estoy-de-frente">
        <article className="article-proyectos-display">
          <div className="texto-proyectos-name">
            <p>No estoy de frente</p>
          </div>
          <div>
            <img
              className="img-proyectos"
              src={dos}
              alt="foto de proyecto dos"
            ></img>
          </div>
          <div className="texto-proyectos-name">
            <div className="entrelineas">
              <span className="text-teatro-light">Dirección: </span>
              <span>Paco León</span>
            </div>
            <div>
              <span className="text-teatro-light">En: </span>
              <span>Sala Exlímite</span>
            </div>
          </div>
        </article>
      </NavLink>
      <NavLink to="/cucaracha">
        <article className="article-proyectos-display">
          <div className="texto-proyectos-name">
            <p>Cucharacha con paisaje de fondo</p>
          </div>
          <div>
            <img
              className="img-proyectos"
              src={cinco}
              alt="foto de proyecto cinco"
            ></img>
          </div>
          <div className="texto-proyectos-name">
            <div className="entrelineas">
              <span className="text-teatro-light">Dirección: </span>
              <span>Javier Ballesteros</span>
            </div>
            <div>
              <span className="text-teatro-light">En: </span>
              <span>Teatro Español</span>
            </div>
          </div>
        </article>{" "}
      </NavLink>
      <NavLink to="/elbanquete">
        <article className="article-proyectos-display">
          <div className="texto-proyectos-name">
            <p>El banquete</p>
          </div>
          <div>
            <img
              className="img-proyectos"
              src={siete}
              alt="foto de proyecto siete"
            ></img>
          </div>
          <div className="texto-proyectos-name">
            <div className="entrelineas">
              <span className="text-teatro-light">Dirección: </span>
              <span>Adrián Pulido</span>
            </div>
            <div>
              <span className="text-teatro-light">En: </span>
              <span>Nave 73</span>
            </div>
          </div>
        </article>
      </NavLink>
      <NavLink to="/gaviotas">
        <article className="article-proyectos-display">
          <div className="texto-proyectos-name">
            <p>Gaviotas</p>
          </div>
          <div>
            <img
              className="img-proyectos img-top"
              src={seis}
              alt="foto de proyecto seis"
            ></img>
          </div>
          <div className="texto-proyectos-name">
            <div className="entrelineas">
              <span className="text-teatro-light">Dirección: </span>
              <span>Gritadero Teatro</span>
            </div>
            <div>
              <span className="text-teatro-light">En: </span>
              <span>Umbral del la Primavera</span>
            </div>
          </div>
        </article>
      </NavLink>
      <NavLink to="/marcela">
        <article className="article-proyectos-display">
          <div className="texto-proyectos-name">
            <p>Marcela: Una canción de Cervantes</p>
          </div>
          <div>
            <img
              className="img-proyectos img-top"
              src={ocho}
              alt="foto de proyecto seis"
            ></img>
          </div>
          <div className="texto-proyectos-name">
            <div className="entrelineas">
              <span className="text-teatro-light">Dirección: </span>
              <span>Leticia Dolera</span>
            </div>
            <div>
              <span className="text-teatro-light">En: </span>
              <span>Sala Cervantina</span>
            </div>
          </div>
        </article>
      </NavLink>
    </section>
  );
}
export default Proyectos;
