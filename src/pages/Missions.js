import React from "react";

const Missions = () => {
  const sections = [
    {
      type: "content",
      title: "Transformer la R&D en un bien commun",
      description: (
        <>
          Dans un monde en constante évolution, les entreprises et les
          communautés doivent innover pour relever les défis économiques,
          sociaux et environnementaux. Nous considérons la R&D comme une
          ressource essentielle, capable de transformer des idées en solutions
          concrètes. En la démocratisant, nous ouvrons des opportunités aux
          organisations pour :
          <ul>
            <li>Accéder à des outils technologiques avancés.</li>
            <li>Surmonter les limitations de ressources et de compétences.</li>
            <li>Stimuler leur compétitivité sur un marché globalisé.</li>
          </ul>
        </>
      ),
      extraClasses: "",
    },
    {
      type: "parallax",
      title: "Accompagner l’innovation et la transformation",
      description: (
        <>
          Notre rôle va au-delà de la simple fourniture de solutions
          technologiques. Nous accompagnons nos partenaires à chaque étape de
          leur
          <span style={{ fontWeight: "bold" }}> parcours d’innovation:</span>
          <ol>
            <li>
              <span style={{ fontWeight: "bold" }}>
                Analyse des besoins spécifiques :{" "}
              </span>
              Identifier les défis uniques de chaque organisation.
            </li>
            <li>
              <span style={{ fontWeight: "bold" }}>
                Co-conception de solutions adaptées :{" "}
              </span>
              Proposer des stratégies personnalisées et impactantes.
            </li>{" "}
            <li>
              <span style={{ fontWeight: "bold" }}>
                Mise en œuvre opérationnelle :{" "}
              </span>
              Assurer une intégration fluide des outils et technologies
              développés.
            </li>
            <li>
              <span style={{ fontWeight: "bold" }}>
                Suivi et amélioration continue :{" "}
              </span>
              Évaluer et optimiser les résultats pour garantir un impact
              durable.
            </li>
          </ol>
        </>
      ),
      extraClasses: "black-overlay-6 parallax",
    },
    {
      type: "content",
      title: "Créer un impact positif et durable",
      description: (
        <>
          Nous sommes convaincus que l’innovation, lorsqu’elle est bien
          orientée, peut transformer la société et améliorer les conditions de
          <ul>
            <li>
              <span style={{ fontWeight: "bold" }}>
                Stimuler le développement économique local:{" "}
              </span>
              Créer des opportunités d’emploi et renforcer les capacités des
              communautés.
            </li>
            <li>
              <span style={{ fontWeight: "bold" }}>
                Promouvoir une transition écologique :{" "}
              </span>
              Intégrer des pratiques respectueuses de l’environnement dans
              toutes nos initiatives.{" "}
            </li>{" "}
            <li>
              <span style={{ fontWeight: "bold" }}>
                Réduire les inégalités :{" "}
              </span>
              Rendre accessibles les avantages de la technologie et de
              l’innovation à ceux qui en ont le plus besoin.
            </li>
          </ul>
        </>
      ),
      extraClasses: "bg-gray-light",
    },
    {
      type: "image",
      title: "Un engagement global, une vision locale",
      description: (
        <>
          Ancrés en Afrique tout en intégrant des pratiques mondiales, nous
          adaptons nos solutions pour répondre aux besoins spécifiques de chaque
          région. Cela reflète notre engagement à combiner
          <span style={{ fontWeight: "bold" }}>
            perspectives locales et approches globales
          </span>
          pour maximiser l’impact de nos actions.
        </>
      ),
      imageUrl: "img/big-01.jpg",
    },
  ];


  return (
    <main>
      {/* Visual Banner Section */}
      <section className="visual">
        <div
          className="visual-inner visual-banner-v22 dark-overlay parallax"
          data-stellar-background-ratio="0.55"
        >
          <div className="container">
            <div className="visual-text-large text-left visual-center">
              <div className="visual-title mt-5">
                <h1>
                  Notre mission : Démocratiser la recherche et le développement
                  (R&D) pour un impact durable
                </h1>
              </div>
              <p>
                Notre mission est de{" "}
                <span className="fw-bold">
                  {" "}
                  rendre la recherche et le développement (R&D) accessibles,
                  inclusifs et durables.
                </span>{" "}
                Nous croyons fermement que l’innovation doit être un
                <span className="fw-bold">
                  {" "}
                  levier stratégique à la portée de toutes les organisations,
                </span>{" "}
                des petites entreprises aux grandes institutions, quels que
                soient leur taille, leur secteur ou leur emplacement
                géographique.
              </p>
              <div className="breadcrumb-block">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="index-2.html">Home</a>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="index-2.html">Notre Identité</a>
                  </li>
                  <li className="breadcrumb-item active">ADN</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Wrapper */}
      <div className="content-wrapper">
        {sections.map((section, index) => {
          if (section.type === "content") {
            return (
              <section
                key={index}
                className={`content-block ${section.extraClasses}`}
              >
                <div className="container">
                  <div className="demo-wrapper">
                    <div className="text-center element-heading">
                      <h3>{section.title}</h3>
                    </div>
                    <div className="description text-left">
                      {section.description}
                    </div>
                  </div>
                </div>
              </section>
            );
          } else if (section.type === "parallax") {
            return (
              <section
                key={index}
                className={`content-block quotation-block ${section.extraClasses}`}
                data-stellar-background-ratio="0.55"
              >
                <div className="container">
                  <div className="demo-wrapper">
                    <div className="text-center element-heading text-white">
                      <h3>{section.title}</h3>
                    </div>
                    <div className="description text-left text-white">
                      {section.description}
                    </div>
                  </div>
                </div>
              </section>
            );
          } else if (section.type === "image") {
            return (
              <section
                key={index}
                id="work-section"
                className="content-block work-block"
              >
                <div className="bg-stretch">
                  <img
                    src={section.imageUrl}
                    alt="Background"
                    className="cultiver"
                  />
                </div>
                <div className="container">
                  <div className="demo-wrapper">
                    <div className="text-center element-heading">
                      <h3>{section.title}</h3>
                    </div>
                    <div className="description text-center">
                      {section.description}
                    </div>
                  </div>
                </div>
              </section>
            );
          }
          return null;
        })}
      </div>

   

      {/* Footer Bottom */}
      {/* <div className="footer-bottom text-center">
           <div className="container">
             <p>Copyright 2016 - Roxine - Multi Purpose Theme by Waituk</p>
           </div>
         </div> */}
    </main>
  );
};

export default Missions;
