import React from "react";
import { Link } from "react-router";

const Visions = () => {
  const sections = [
    {
      type: "content",
      title: "Un monde accessible et équitable",
      description: (
        <>
          Nous imaginons un avenir où les organisations de toutes tailles, qu’il
          s’agisse de startups, de PME ou de grandes entreprises, ont accès aux
          outils, technologies et ressources nécessaires pour innover. En
          rendant la recherche et le développement (R&D) accessible à tous, nous
          visons à :
          <ul>
            <li>
              <span style={{ fontWeight: "bold" }}>
                Réduire les disparités technologiques :{" "}
              </span>
              Combler la fracture numérique et offrir des opportunités
              équitables.
            </li>
            <li>
              <span style={{ fontWeight: "bold" }}>
                Renforcer l’autonomie des organisations locales :{" "}
              </span>
              Permettre à chaque acteur de devenir une force motrice de
              changement dans son secteur.{" "}
            </li>
            <li>
              <span style={{ fontWeight: "bold" }}>
                Stimuler l’innovation à l’échelle mondiale :{" "}
              </span>
              Connecter les talents, les idées et les ressources pour générer
              des solutions globales.
            </li>
          </ul>
        </>
      ),
      extraClasses: "",
    },
    {
      type: "parallax",
      title: "Un continent africain au cœur de l’innovation",
      description: (
        <>
          Notre vision s’ancre profondément dans le potentiel du continent
          africain. Nous croyons que la
          <span style={{ fontWeight: "bold" }}>diversité culturelle</span>, la{" "}
          <span style={{ fontWeight: "bold" }}>créativité locale</span>, et la{" "}
          <span style={{ fontWeight: "bold" }}>
            collaboration internationale
          </span>
          peuvent positionner l’Afrique comme un acteur clé de l’innovation
          mondiale. CorreIA LLC s’engage à :
          <ul>
            <li>
              <span style={{ fontWeight: "bold" }}>
                Renforcer l’écosystème technologique africain :{" "}
              </span>
              En soutenant les entreprises locales dans leur transformation
              numérique.
            </li>
            <li>
              <span style={{ fontWeight: "bold" }}>
                Encourager les partenariats interculturels :{" "}
              </span>
              En connectant les acteurs africains et internationaux pour créer
              des solutions collaboratives.
            </li>{" "}
            <li>
              <span style={{ fontWeight: "bold" }}>
                Valoriser les talents locaux :{" "}
              </span>
              En investissant dans le développement des compétences et en
              promouvant une génération de leaders technologiques.
            </li>
          </ul>
        </>
      ),
      extraClasses: "black-overlay-6 parallax",
    },
    {
      type: "content",
      title: "Une innovation durable et inclusive",
      description: (
        <>
          Nous rêvons d’un avenir où
          <span style={{ fontWeight: "bold" }}>
            {" "}
            l’innovation ne se limite pas à des avancées technologiques, mais
            s’intègre aux valeurs humaines.
          </span>
          Chez CorreIA LLC, nous croyons que :
          <ul>
            <li>
              <span style={{ fontWeight: "bold" }}>L’innovation durable </span>
              est celle qui respecte l’environnement, soutient les communautés
              et améliore la qualité de vie.
            </li>
            <li>
              <span style={{ fontWeight: "bold" }}>
                L’innovation inclusive :{" "}
              </span>
              est celle qui considère les besoins de tous, en intégrant des
              perspectives diverses et des voix souvent marginalisées.
            </li>
          </ul>
        </>
      ),
      extraClasses: "bg-gray-light",
    },
    {
      type: "image",
      title: "Notre Vision en action",
      description: (
        <>
          Pour réaliser cette vision, nous intégrons :
          <ul>
            <li>
              <span style={{ fontWeight: "bold" }}>
                La collaboration interculturelle :{" "}
              </span>
              Des partenariats enrichis par la diversité.
            </li>
            <li>
              <span style={{ fontWeight: "bold" }}>
                L’innovation continue :{" "}
              </span>
              Une recherche constante de nouvelles solutions.
            </li>{" "}
            <li>
              <span style={{ fontWeight: "bold" }}>
                Une responsabilité sociale :{" "}
              </span>
              Des projets qui visent un impact économique, social et
              environnemental durable.
            </li>
          </ul>
          <span style={{ fontWeight: "bold" }}>
            CorreIA LLC rêve d’un monde où chaque organisation, chaque
            communauté et chaque individu a la possibilité d’innover pour
            façonner un avenir équitable, prospère et durable.
          </span>
        </>
      ),
      imageUrl: "img/big-01.jpg",
    },
  ];

  const contactInfo = [
    {
      icon: "waituk-icon-phone",
      title: "Call Us On",
      value: "977 985 1108896",
      link: "tel:9779851108896",
    },
    {
      icon: "waituk-icon-email",
      title: "Email Us At",
      value: "Email at Waituk.net",
      link: "mailto:waituk.net",
    },
    {
      icon: "waituk-icon-pin",
      title: "Visit Office",
      value: "707 Ive Corner - London",
    },
  ];

  const socialLinks = [
    { icon: "waituk-icon-facebook", link: "#" },
    { icon: "waituk-icon-twitter", link: "#" },
    { icon: "waituk-icon-google-plus", link: "#" },
    { icon: "waituk-icon-pinterest", link: "#" },
    { icon: "waituk-icon-dribbble", link: "#" },
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
                  Notre vision : Une innovation partagée au service d’un progrès
                  collectif
                </h1>
              </div>
              <p>
                Nous aspirons à un monde où
                <span className="fw-bold">
                  {" "}
                  l’innovation est accessible à tous,
                </span>{" "}
                indépendamment des barrières économiques, géographiques ou
                sectorielles. Notre vision repose sur un idéal clair : faire de
                l’innovation un moteur essentiel de développement durable,
                capable de transformer les défis en opportunités et de favoriser
                un progrès collectif.
              </p>
              <div className="breadcrumb-block">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="index-2.html">Home</a>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="index-2.html">Notre Identité</a>
                  </li>
                  <li className="breadcrumb-item active">Vision</li>
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

      <div className="content-block footer-main text-center bg-black">
        <div className="container">
          {/* Newsletter Form */}
          <div className="waituk_newsletter-form">
            <form action="#" method="post">
              <fieldset className="clearfix">
                <div className="form-group input-holder">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email Address"
                  />
                </div>
                <input
                  type="submit"
                  className="btn btn-trans-dark-gray"
                  value="Subscribe"
                />
              </fieldset>
            </form>
          </div>

          {/* Contact Info */}

          <div className="content-block footer-info">
            <div className="row text-left">
              {contactInfo.map((info, index) => (
                <div className="col-12 col-md-4 mb-3" key={index}>
                  <div className="row align-items-center fw-bold">
                    {/* Icon column with auto width */}
                    <div className="col-auto">
                      <span
                        className={`social-network icon ${info.icon}`}
                      ></span>
                    </div>
                    {/* Text column takes remaining space */}
                    <div className="col">
                      <span>{info.title}</span> <br />
                      {info.link ? (
                        <span>
                          <Link to={info.link}>{info.value}</Link>
                        </span>
                      ) : (
                        <span>{info.value}</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Social Networks */}
          <ul className="social-network d-flex gap-3 justify-content-center">
            {socialLinks.map((social, index) => (
              <li key={index}>
                <a href={social.link}>
                  <span className={social.icon}></span>
                </a>
              </li>
            ))}
          </ul>
        </div>
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

export default Visions;
