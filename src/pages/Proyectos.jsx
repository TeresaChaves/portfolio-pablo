import React from "react";
import "./Proyectos.css";
import uno from "../assets/uno.jpeg";
import dos from "../assets/dos.jpeg";
import tres from "../assets/tres.jpeg";
import cuatro from "../assets/cuatro.jpeg";
import cinco from "../assets/cucaracha/0.jpg";
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
            <img className="img-proyectos" src={uno}></img>
          </div>
          <div className="texto-proyectos-name">
            <div className="entrelineas">
              <span className="text-teatro-light">Dirección: </span>
              <span>Teresa Chaves</span>
            </div>
            <div>
              <span className="text-teatro-light">En: </span>
              <span>Teatros del Canal</span>
            </div>
          </div>
        </article>
      </NavLink>
      <article className="article-proyectos-display">
        <div className="texto-proyectos-name">
          <p>Cola de pez</p>
        </div>
        <div>
          <img className="img-proyectos" src={dos}></img>
        </div>
        <div className="texto-proyectos-name">
          <div className="entrelineas">
            <span className="text-teatro-light">Dirección: </span>
            <span>Teresa Chaves</span>
          </div>
          <div>
            <span className="text-teatro-light">En: </span>
            <span>Teatros del Canal</span>
          </div>
        </div>
      </article>
      <article className="article-proyectos-display">
        <div className="texto-proyectos-name">
          <p>Cola de pez</p>
        </div>
        <div>
          <img className="img-proyectos" src={cinco}></img>
        </div>
        <div className="texto-proyectos-name">
          <div className="entrelineas">
            <span className="text-teatro-light">Dirección: </span>
            <span>Teresa Chaves</span>
          </div>
          <div>
            <span className="text-teatro-light">En: </span>
            <span>Teatros del Canal</span>
          </div>
        </div>
      </article>{" "}
      <article className="article-proyectos-display">
        <div className="texto-proyectos-name">
          <p>Cola de pez</p>
        </div>
        <div>
          <img className="img-proyectos" src={cuatro}></img>
        </div>
        <div className="texto-proyectos-name">
          <div className="entrelineas">
            <span className="text-teatro-light">Dirección: </span>
            <span>Teresa Chaves</span>
          </div>
          <div>
            <span className="text-teatro-light">En: </span>
            <span>Teatros del Canal</span>
          </div>
        </div>
      </article>
    </section>
  );
}
export default Proyectos;
