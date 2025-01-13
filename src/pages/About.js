import React from "react";
import Aside from "../components/Aside/Aside";

const About = () => {
  const listAbout = [
    {
      img: "img/img-09.jpg",
      title: "Experts à votre service",
      text: (
        <>
          <span style={{ fontWeight: "bold", fontSize: "18px" }}>
            Des solutions sur mesure pour relever vos défis.
          </span>{" "}
          Chez{" "}
          <span style={{ fontWeight: "bold", fontSize: "18px", marginTop: "0px" }}>
            CorreIA LLC
          </span>
          , nos experts mettent leur créativité et leur expertise à votre
          service pour concevoir des solutions digitales innovantes. Nous
          naviguons entre les contradictions créatives et repoussons les limites
          conventionnelles pour transformer vos ambitions en réalisations
          tangibles.
        </>
      ),
    },
    {
      img: "img/img-10.jpg",
      title: "L'excellence au cœur de nos actions",
      text: (
        <>
          <span style={{ fontWeight: "bold", fontSize: "18px" }}>
            Un engagement pour la perfection, à chaque étape.
          </span>
          Nous croyons que la perfection est un processus évolutif. Chaque
          projet est une opportunité de redéfinir les standards et de créer des
          solutions durables et adaptées à vos besoins. Avec{" "}
          <span
            style={{ fontWeight: "bold", fontSize: "18px", marginTop: "0px" }}
          >
            CorreIA LLC
          </span>{" "}
          , l'excellence n'est pas un objectif, mais une méthode.
        </>
      ),
    },
    {
      img: "img/img-11.jpg",
      title: "Une créativité sans limites",
      text: (
        <>
          <span style={{ fontWeight: "bold", fontSize: "16px" }}>
            Contourner les frontières pour imaginer l'impossible.
          </span>{" "}
          Pour nous, chaque défi est une chance d'explorer de nouvelles
          possibilités. En refusant les chemins linéaires, nous imaginons des
          solutions uniques et efficaces qui dépassent les attentes et ouvrent
          la voie à l'innovation.
        </>
      ),
    },
    {
      img: "img/img-09.jpg",
      title: "Ne laisser aucun détail de côté",
      text: (
        <>
          <span style={{ fontWeight: "bold", fontSize: "18px" }}>
            Un regard précis pour des solutions complètes.
          </span> <br/>
          Chez{" "}
          <span style={{ fontWeight: "bold", fontSize: "18px", marginTop: "0px" }}>
            CorreIA LLC
          </span>
          , chaque détail compte. Nous examinons minutieusement chaque aspect de
          vos besoins pour garantir des solutions globales et adaptées. Rien
          n'est laissé au hasard dans notre quête de l'impact durable.
        </>
      ),
    },
  ];

  return (
    <main>
      {/* Visual/banner of the page */}
      <section className="visual">
        <div
          className="visual-inner about-banner dark-overlay parallax"
          data-stellar-background-ratio="0.55"
        >
          <div className="centered">
            <div className="container">
              <div className="visual-text visual-center">
                <div className="visual-title">
                  <h1>Notre Identité</h1>
                </div>
                <div className="breadcrumb-block">
                  <ol className="breadcrumb justify-content-center">
                    <li className="breadcrumb-item">
                      <a href="index-2.html">Acceuil</a>
                    </li>
                    <li className="breadcrumb-item active"> Notre Identité</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main content wrapper */}
      <div className="content-wrapper">
        <section className="content-block">
          <div className="container text-center">
            <div className="heading bottom-space">
              <h2>
                Pensez en <span>Dehors</span> de la boîte : Et si l’opposé était
                vrai ?
              </h2>
            </div>
            <div className="description">
              <p>
                Chez CorreIA LLC, nous croyons que l’innovation naît de la
                capacité à naviguer entre des contradictions créatives. En
                contournant les frontières et en repoussant les limites
                conventionnelles, nous transformons chaque défi en opportunité.
                Pour nous, l’innovation et la création ne sont pas des
                destinations, mais des processus évolutifs et continus, portés
                par une vision audacieuse et adaptable. Ensemble, explorons de
                nouvelles perspectives et créons une valeur tangible.
              </p>
            </div>
          </div>
        </section>

        <section className="content-block p-0">
          <div className="container-fluid">
            <div className="content-slot alternate-block">
              {listAbout.map((block, index) => (
                <div className="row" key={index}>
                  <div className="col-lg-6">
                    <div
                      className={`bg-stretch img-wrap wow slideIn${
                        index % 2 === 0 ? "Left" : "Right"
                      }`}
                    >
                      <img src={block.img} alt="images" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="text-wrap">
                      <h3>{block.title}</h3>
                      <p>{block.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* <section
          className="content-block quotation-block black-overlay-6 parallax"
          data-stellar-background-ratio="0.55"
        >
          <div className="container">
            <div className="inner-wrapper text-white">
              <h3>BEST EVER DESIGN</h3>
              <h2>Time to enhance your web presence!</h2>
              <div className="btn-container">
                <a href="#" className="btn btn-primary">
                  GET QUOTATION
                </a>
              </div>
            </div>
          </div>
        </section> */}
<div className="bg-light">

        <Aside />
</div>
      </div>
    </main>
  );
};

export default About;
