import React from "react";
import { Link } from "react-router";

const ADN = () => {
  const sections = [
    {
      type: "content",
      title: "Métissage Culturel : Une richesse au cœur de Notre identité",
      description: (
        <>
          Notre ADN est profondément enraciné dans le{" "}
          <span style={{ fontWeight: "bold" }}>métissage culturel</span>,
          combinant le savoir-faire européen avec les perspectives africaines.
          Cette diversité nourrit notre créativité, enrichit nos solutions et
          nous permet d’aborder chaque projet avec une perspective globale et
          locale.
        </>
      ),
      extraClasses: "",
    },
    {
      type: "parallax",
      title: "Innovation évolutive : Un processus continu",
      description: (
        <>
          Pour nous, l’innovation n’est pas un point final, mais un
          <span style={{ fontWeight: "bold" }}>
            processus évolutif et continu
          </span>
          . Nous croyons fermement que chaque solution peut être améliorée,
          chaque défi peut ouvrir de nouvelles opportunités, et que
          l’adaptabilité est la clé pour rester à l’avant-garde.
        </>
      ),
      extraClasses: "black-overlay-6 parallax",
    },
    {
      type: "content",
      title: "Impact durable : Allier technologie et responsabilité",
      description: (
        <>
          Nous nous engageons à utiliser la technologie pour générer un impact
          durable, en intégrant des solutions respectueuses de l’environnement
          et en répondant aux besoins sociaux et économiques de nos partenaires.
          <span style={{ fontWeight: "bold" }}>CorreIA LLC</span>
          LLC place la durabilité au centre de son ADN, comme un moteur de
          progrès équitable.
        </>
      ),
      extraClasses: "bg-gray-light",
    },
    {
      type: "image",
      title: "Humanité et technologie : Une alliance équilibrée",
      description: (
        <>
          Notre ADN reflète une approche où
          <span style={{ fontWeight: "bold" }}>
            l’humain est au cœur de la technologie
          </span>
          . Nous utilisons l’intelligence artificielle et les outils numériques
          non seulement pour innover, mais aussi pour améliorer les conditions
          de vie et répondre aux aspirations des communautés avec respect et
          empathie.
          <span style={{ fontWeight: "bold" }}>
            CorreIA LLC : un ADN unique qui allie innovation, diversité
            culturelle et impact durable pour façonner un avenir meilleur et
            inclusif.
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
                  L’ADN de CorreIA LLC : Métissage culturel et innovation
                  évolutive{" "}
                </h1>
              </div>
              <p>
                Notre ADN repose sur une combinaison unique de{" "}
                <span className="fw-bold">valeurs humaines</span> , de{" "}
                <span className="fw-bold">technologie de pointe</span> et de{" "}
                <span className="fw-bold">créativité culturelle</span> . C’est
                cette essence qui nous permet de transformer les idées en
                solutions concrètes et durables, en relevant les défis les plus
                complexes.
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

export default ADN;
