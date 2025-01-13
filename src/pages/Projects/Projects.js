import React from "react";
import { Link } from "react-router";

function Projects() {
  const galleryItems = [
    {
      id: 1,
      img: "img/portfolio-21.jpg",
      category: "Gilui",
      description:
        "Le projet Gilui.ai, développé par CorreIA LLC, est une solution technologique visant à révolutionner la gestion énergétique en Côte d’Ivoire.",
      path: "/gilui",
    },
    {
      id: 2,
      img: "img/portfolio-22.jpg",
      category: "CorreIA",
      description:
        "Le projet CorreIA LLM vise à construire un modèle d’intelligence artificielle innovant pour centraliser, analyser et rendre accessibles les données publiques.",
      path: "/correIa_LLM",
    },
  ];

  return (
    <main>
      <section className="visual">
        <div
          className="visual-inner portfolio-banner-v1 black-overlay-3 parallax"
          data-stellar-background-ratio="0.55"
        >
          <div className="centered">
            <div className="container">
              <div className="visual-text visual-center">
                <div className="visual-title">
                  <h1>Projets</h1>
                </div>
                <div className="breadcrumb-block ">
                  <ol className="breadcrumb justify-content-center">
                    <li className="breadcrumb-item">Home</li>
                    <li className="breadcrumb-item">Projets</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="content-wrapper">
        <section className="content-block portfolio-block">
          <div className="container">
            <ul className="filter-nav text-center button-group filter-button-group">
              <li>
                <Link data-filter="*">Gilui</Link>
              </li>
              <li>
                <Link data-filter=".ui">CorreIA LLM</Link>
              </li>
            </ul>
            <div className="row masonary-block justify-content-center">
              {galleryItems.map((item) => (
                <div
                  key={item.id}
                  className={`gallery-item col-md-5 col-lg-5 col-xl-5 ${item.category}`}
                >
                  <figure className="caption-hover-full">
                    <Link className="fancy-pop" to={item.path}></Link>
                    <div className="image-wrapper">
                      <img src={item.img} alt="portfolio" />
                    </div>
                    <div className="image-details">
                      <div className="figcaption">
                        <div className="trigger">
                          <div className="waituk-icon-plus">
                            <span className="sr-only">&nbsp;</span>
                          </div>
                        </div>
                        <div className="info">
                          <h2>{item.description}</h2>
                        </div>
                      </div>
                    </div>
                  </figure>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
export default Projects;
