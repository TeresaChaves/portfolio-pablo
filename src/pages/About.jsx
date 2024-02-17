import React from "react";
import "./About.css";
import pablo from "../assets/Pablo.jpg";

function About() {
  return (
    <section className="section-contacto">
      <div className="container-foto">
        <img className="img-contacto" src={pablo} alt="foto perfil" />
      </div>
      <div className="container-texto">
        <h2 className="titulo-contacto">Bio</h2>
        <p className="parrafo-contacto">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere,
          animi quaerat! Placeat, harum repudiandae cupiditate commodi
          aspernatur sint quo similique est ipsa, ipsum, reiciendis maiores sed
          unde incidunt a minima. Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Harum et enim accusamus, vero distinctio accusantium
          amet. Laborum, saepe labore, hic magni repudiandae temporibus vitae
          provident soluta quo fugit, quis ipsa.
        </p>
        <br />
        <p className="parrafo-contacto">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere,
          animi quaerat! Placeat, harum repudiandae cupiditate commodi
          aspernatur sint quo similique est ipsa, ipsum, reiciendis maiores sed
          unde incidunt a minima.
        </p>
      </div>
    </section>
  );
}

export default About;
