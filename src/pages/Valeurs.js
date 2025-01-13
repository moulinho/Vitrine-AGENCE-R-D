import React from "react";
import { Link } from "react-router";

const Valeurs = () => {
  const sections = [
    {
      type: "content",
      title: "Accessibilité et inclusion",
      description: (
        <>
          Nous croyons que l'innovation et la recherche doivent être accessibles à tous. Nous cultivons un environnement inclusif, où chaque voix est entendue, et nous nous engageons à réduire les barrières à l'accès aux technologies et aux solutions numériques.

        </>
      ),
      extraClasses: "",
    },
    {
      type: "parallax",
      title: "Innovation continue",
      description: (
        <>
         L'innovation est au cœur de notre ADN. Nous nous efforçons de repousser les limites, d'explorer de nouvelles approches et de développer des solutions qui anticipent les besoins de demain. Pour nous, l’innovation est un processus évolutif et infini.

        </>
      ),
      extraClasses: "black-overlay-6 parallax",
    },
    {
      type: "content",
      title: "Collaboration et synergie",
      description: (
        <>
          Nous valorisons la puissance des partenariats et des échanges interculturels. En réunissant des perspectives variées et des expertises multiples, nous générons des solutions enrichies et durables. La diversité culturelle est pour nous une richesse inestimable qui alimente notre créativité et nos stratégies.
        </>
      ),
      extraClasses: "bg-gray-light",
    },
    {
      type: "image",
      title: "Excellence et rigueur",
      description: (
        <>
          Nous aspirons à l'excellence dans tout ce que nous entreprenons. Chaque projet est mené avec un souci constant de qualité, de précision et d'impact mesurable.
<br/>CorreIA LLC s'engage à incarner ces valeurs dans chaque projet, chaque collaboration, et chaque interaction, afin de bâtir un avenir plus équitable, innovant et durable.
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
                Nos Valeurs : Les piliers fondamentaux de CorreIA LLC

                </h1>
              </div>
              <p>
              Nos valeurs sont les piliers fondamentaux qui guident chacune de nos actions. Elles reflètent notre engagement envers l'innovation, la durabilité, et le progrès collectif, tout en mettant en avant l'humain au centre de nos projets.
              </p>
              <div className="breadcrumb-block">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="index-2.html">Home</a>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="index-2.html">Notre Identité</a>
                  </li>
                  <li className="breadcrumb-item active">Valeurs</li>
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

export default Valeurs;
