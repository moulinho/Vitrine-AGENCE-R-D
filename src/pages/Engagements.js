import React from "react";

const Engagements = () => {
  const sections = [
    {
      type: "content",
      title: "Démocratiser l'accès à l'innovation",
      description: `Nous croyons que l'innovation ne doit pas être un privilège réservé à quelques-uns. C’est pourquoi nous nous engageons à rendre nos solutions et services de R&D accessibles à toutes les organisations, qu'elles soient grandes ou petites, en leur fournissant des outils et des ressources adaptées à leurs besoins spécifiques.`,
      extraClasses: "",
    },
    {
      type: "parallax",
      title: "Favoriser la durabilité",
      description: `La durabilité est au cœur de notre démarche. Nous intégrons des pratiques responsables dans tous nos projets afin de réduire notre empreinte écologique et de contribuer à un avenir plus respectueux de l'environnement. Nous cherchons à construire des solutions qui allient innovation technologique et responsabilité environnementale.`,
      extraClasses: "black-overlay-6 parallax",
    },
    {
      type: "content",
      title: "Soutenir la collaboration interculturelle",
      description: `Enracinés dans la richesse de la diversité culturelle, nous encourageons la collaboration entre différentes cultures et disciplines pour générer des solutions globales et enrichies. Nos partenariats, à la fois locaux et internationaux, reflètent cette vision de synergie et d’innovation partagée.`,
      extraClasses: "bg-gray-light",
    },
    {
      type: "image",
      title: "Cultiver l’innovation continue",
      description: `Nous nous engageons à anticiper les besoins de nos partenaires et à développer des solutions novatrices et évolutives. Notre approche repose sur une remise en question permanente et un désir de toujours repousser les limites.`,
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
                  Nos engagements : <br /> Transformer les défis en opportunités
                </h1>
              </div>
              <p>
                Nos engagements reflètent notre mission de démocratiser la
                recherche et le développement (R&D) et de créer des solutions
                qui transforment les défis en opportunités.
                {/* Fondés sur nos valeurs et nos principes, nous visons à apporter un impact positif, tant pour nos partenaires que pour la société dans son ensemble. */}
              </p>
              <div className="breadcrumb-block">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="index-2.html">Home</a>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="index-2.html">Notre Identité</a>
                  </li>
                  <li className="breadcrumb-item active">Engagements</li>
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
                    <div className="description text-center">
                      <p>{section.description}</p>
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
                    <div className="description text-center text-white">
                      <p>{section.description}</p>
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
                      <p>{section.description}</p>
                    </div>
                  </div>
                </div>
              </section>
            );
          }
          return null;
        })}
      </div>

     
 
    </main>
  );
};

export default Engagements;
