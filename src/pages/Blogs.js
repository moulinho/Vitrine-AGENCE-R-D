import React from "react";
import { Link } from "react-router";

export default function Blogs() {
  const posts = [
    {
      id: 1,
      image: "img/img-30.jpg",
      date: "17 Jun",
      title: "CorreIA LLC : Genèse et Fondation",
     
      description: (
        <>
          Fondée <span className="fw-bold">le 14 mai 2024 à Paris</span> ,
          CorreIA LLC est une startup française spécialisée dans la recherche et
          le développement (R&D) en intelligence artificielle (IA). <br />
          L'entreprise est le fruit de la collaboration entre jeunes diplômés et
          professionnels expérimentés, unissant leurs compétences pour répondre
          aux défis contemporains du marché de l'emploi et mener des projets à
          fort impact socio-économique. <br />
          <span className="fw-bold">
            {" "}
            <u>
              L'originalité de CorreIA LLC réside dans son métissage culturel.
            </u>{" "}
          </span>
          L'équipe est composée de membres français et ivoiriens, fusionnant le
          savoir-faire européen avec les valeurs et pratiques africaines. <br />
          Cette diversité culturelle est au cœur de l'identité de l'entreprise,
          enrichissant ses méthodes de travail, ses créations graphiques et ses
          stratégies commerciales.
          <span className="fw-bold">Le nom "CorreIA"</span> rend hommage à{" "}
          <span className="fw-bold">Diogo Álvares Correia</span>, navigateur
          portugais du 15ᵉ siècle, reconnu comme un pionnier du métissage
          culturel entre européens et peuples autochtones du Brésil. <br />
          Cette référence historique souligne l'engagement de l'entreprise en
          faveur de l'intégration et de la diversité. <br />
          Fait notable, l'un des membres fondateurs de{" "}
          <span className="fw-bold">CorreIA LLC</span> est un descendant direct
          de ce navigateur portugais, perpétuant ainsi un héritage familial de
          découverte et de fusion culturelle.
          <br />
          CorreIA LLC se distingue par sa mission de{" "}
          <span className="fw-bold">
            démocratiser l'accès à la recherche et au développement, en
            particulier en Afrique, où les services internes de R&D sont souvent
            limités
          </span>{" "}
          .<br />
          En se positionnant comme un{" "}
          <span className="fw-bold">service R&D externalisé</span>, l'entreprise
          contribue au développement du continent en proposant des solutions
          innovantes adaptées aux besoins locaux.
          <br />
          Parmi ses projets phares, CorreIA LLC travaille sur la construction
          d'un{" "}
          <span className="fw-bold">
            modèle d'IA adapté aux entreprises locales en France et en Côte
            d'Ivoire
          </span>{" "}
          , ainsi que sur{" "}
          <span className="fw-bold">
            la digitalisation de l'utilisation des compteurs d'électricité en
            Côte d'Ivoire.
          </span>{" "}
          <br />
          Ces initiatives illustrent l'engagement de l'entreprise à utiliser
          l'IA pour répondre à des problématiques concrètes et améliorer le
          quotidien des populations.
          <br />
          En moins d'un an, CorreIA LLC a su s'imposer comme un acteur innovant
          dans le domaine de l'intelligence artificielle, alliant expertise
          technologique et richesse culturelle.
          <br />
          Son parcours témoigne de la force du métissage culturel et de
          l'importance de l'innovation pour relever les défis socio-économiques
          contemporains.
          <br />
        </>
      ),
      contact: [
        {
          icon: (
            <Link to={`mailto:rd@correia.ai`} target="_blank">
              <img src="/img/envelope.svg" alt="whatsapp" width={15} />
            </Link>
          ),
          // email: "rd@correia.ai",
        },
        {
          icon: (
            <Link to="https://wa.me/message/R2AN3TFJCKDHM1" target="_blank">
              <img src="/img/whatsapp.svg" alt="whatsapp" width={15} />
            </Link>
          ),
          // whatsapp: "https://wa.me/message/R2AN3TFJCKDHM1",
        },
      ],
    },
    {
      id: 2,
      image: "img/img-31.jpg",
      date: "17 Jun",
      title: "Product Design",
      description:
        "This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Auctor, nisi elit consequat ipsum.",
      contact: [
        {
          icon: (
            <Link to={`mailto:rd@correia.ai`} target="_blank">
              <img src="/img/envelope.svg" alt="whatsapp" width={15} />
            </Link>
          ),
          // email: "rd@correia.ai",
        },
        {
          icon: (
            <Link to="https://wa.me/message/R2AN3TFJCKDHM1" target="_blank">
              <img src="/img/whatsapp.svg" alt="whatsapp" width={15} />
            </Link>
          ),
          // whatsapp: "https://wa.me/message/R2AN3TFJCKDHM1",
        },
      ],
    },
    {
      id: 3,
      image: "img/img-32.jpg",
      date: "17 Jun",
      title: "Product Design",
      description:
        "This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Auctor, nisi elit consequat ipsum.",
      contact: [
        {
          icon: (
            <Link to={`mailto:rd@correia.ai`} target="_blank">
              <img src="/img/envelope.svg" alt="whatsapp" width={15} />
            </Link>
          ),
          // email: "rd@correia.ai",
        },
        {
          icon: (
            <Link to="https://wa.me/message/R2AN3TFJCKDHM1" target="_blank">
              <img src="/img/whatsapp.svg" alt="whatsapp" width={15} />
            </Link>
          ),
          // whatsapp: "https://wa.me/message/R2AN3TFJCKDHM1",
        },
      ],
    },
    {
      id: 4,
      image: "img/img-33.jpg",
      date: "17 Jun",
      title: "Product Design",
      description:
        "This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Auctor, nisi elit consequat ipsum.",
      contact: [
        {
          icon: (
            <Link to={`mailto:rd@correia.ai`} target="_blank">
              <img src="/img/envelope.svg" alt="whatsapp" width={15} />
            </Link>
          ),
          // email: "rd@correia.ai",
        },
        {
          icon: (
            <Link to="https://wa.me/message/R2AN3TFJCKDHM1" target="_blank">
              <img src="/img/whatsapp.svg" alt="whatsapp" width={15} />
            </Link>
          ),
          // whatsapp: "https://wa.me/message/R2AN3TFJCKDHM1",
        },
      ],
    },
    {
      id: 5,
      image: "img/img-34.jpg",
      date: "17 Jun",
      title: "Product Design",
      description:
        "This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Auctor, nisi elit consequat ipsum.",
      contact: [
        {
          icon: (
            <Link to={`mailto:rd@correia.ai`} target="_blank">
              <img src="/img/envelope.svg" alt="whatsapp" width={15} />
            </Link>
          ),
          // email: "rd@correia.ai",
        },
        {
          icon: (
            <Link to="https://wa.me/message/R2AN3TFJCKDHM1" target="_blank">
              <img src="/img/whatsapp.svg" alt="whatsapp" width={15} />
            </Link>
          ),
          // whatsapp: "https://wa.me/message/R2AN3TFJCKDHM1",
        },
      ],
    },
    {
      id: 6,
      image: "img/img-35.jpg",
      date: "17 Jun",
      title: "Product Design",
      description:
        "This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Auctor, nisi elit consequat ipsum.",
      contact: [
        {
          icon: (
            <Link to={`mailto:rd@correia.ai`} target="_blank">
              <img src="/img/envelope.svg" alt="whatsapp" width={15} />
            </Link>
          ),
          // email: "rd@correia.ai",
        },
        {
          icon: (
            <Link to="https://wa.me/message/R2AN3TFJCKDHM1" target="_blank">
              <img src="/img/whatsapp.svg" alt="whatsapp" width={15} />
            </Link>
          ),
          // whatsapp: "https://wa.me/message/R2AN3TFJCKDHM1",
        },
      ],
    },
    {
      id: 7,
      image: "img/img-36.jpg",
      date: "17 Jun",
      title: "Product Design",
      description:
        "This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Auctor, nisi elit consequat ipsum.",
      contact: [
        {
          icon: (
            <Link to={`mailto:rd@correia.ai`} target="_blank">
              <img src="/img/envelope.svg" alt="whatsapp" width={15} />
            </Link>
          ),
          // email: "rd@correia.ai",
        },
        {
          icon: (
            <Link to="https://wa.me/message/R2AN3TFJCKDHM1" target="_blank">
              <img src="/img/whatsapp.svg" alt="whatsapp" width={15} />
            </Link>
          ),
          // whatsapp: "https://wa.me/message/R2AN3TFJCKDHM1",
        },
      ],
    },
    {
      id: 8,
      image: "img/img-37.jpg",
      date: "17 Jun",
      title: "Product Design",
      description:
        "This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Auctor, nisi elit consequat ipsum.",
      contact: [
        {
          icon: (
            <Link to={`mailto:rd@correia.ai`} target="_blank">
              <img src="/img/envelope.svg" alt="whatsapp" width={15} />
            </Link>
          ),
          // email: "rd@correia.ai",
        },
        {
          icon: (
            <Link to="https://wa.me/message/R2AN3TFJCKDHM1" target="_blank">
              <img src="/img/whatsapp.svg" alt="whatsapp" width={15} />
            </Link>
          ),
          // whatsapp: "https://wa.me/message/R2AN3TFJCKDHM1",
        },
      ],
    },
    {
      id: 9,
      image: "img/img-30.jpg",
      date: "17 Jun",
      title: "Product Design",
      description:
        "This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Auctor, nisi elit consequat ipsum.",
      contact: [
        {
          icon: (
            <Link to={`mailto:rd@correia.ai`} target="_blank">
              <img src="/img/envelope.svg" alt="whatsapp" width={15} />
            </Link>
          ),
          // email: "rd@correia.ai",
        },
        {
          icon: (
            <Link to="https://wa.me/message/R2AN3TFJCKDHM1" target="_blank">
              <img src="/img/whatsapp.svg" alt="whatsapp" width={15} />
            </Link>
          ),
          // whatsapp: "https://wa.me/message/R2AN3TFJCKDHM1",
        },
      ],
    },
  ];
  return (
    <main>
      {/* Visual/banner of the page */}
      <section className="visual">
        <div
          className="visual-inner blog-default-banner dark-overlay parallax"
          data-stellar-background-ratio="0.55"
        >
          <div className="container">
            <div className="visual-text-large text-left visual-center">
              <div className="visual-title">
                <h1>Blog - Two Column</h1>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit
                porro laudantium sequi. Lorem ipsum dolor sit amet, consectetur
                adipisicing elit.
              </p>
              <div className="breadcrumb-block">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/"> Home </Link>
                  </li>

                  <li className="breadcrumb-item active"> Blog </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main content wrapper */}
      <div className="content-wrapper">
        <section className="content-block">
          <div className="container">
            <div className="row multiple-row">
              {posts.map((post) => (
                <div className="col-md-6" key={post.id}>
                  <div className="col-wrap">
                    <div className="post-grid reverse-grid">
                      <div className="img-block post-img">
                        <a href={post.link}>
                          <img src={post.image} alt="images" />
                        </a>
                        <time className="post-date" dateTime="2016-10-10">
                          {post.date}
                        </time>
                      </div>
                      <div className="post-text-block bg-gray-light text-left">
                        <h2>
                          <a href={post.link}>{post.title}</a>
                        </h2>
                        <span className="content-sub-title">
                          {post.subtitle}
                        </span>
                        <p>{post.description}</p>
                        <div className="post-meta clearfix d-flex justify-content-between">
                          <div className="post-link-holder">
                            <Link>
                              Nous rejoindre
                              <span className="fa fa-arrow-right">
                                <span className="sr-only">&nbsp;</span>
                              </span>
                            </Link>
                          </div>
                          <div className="post-social text-right">
                            <ul className="social-network social-small">
                              {post.contact.map((icon, index) => (
                                <li key={index}>
                                  <span className="hover-shadow transition-transform transform hover:scale-105 hover:translate-y-1">
                                    {icon.icon}
                                  </span>
                                </li>
                              ))}
                              {/* <li>
                              <a href="#">
                                <span className="waituk-icon-facebook">
                                  <span className="sr-only">&nbsp;</span>
                                </span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span className="waituk-icon-twitter">
                                  <span className="sr-only">&nbsp;</span>
                                </span>
                              </a>
                            </li> */}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="btn-container full-width-btn top-space">
              <Link to="" className="btn btn-black">
                LOAD MORE
                <span className="c-ripple js-ripple">
                  <span className="c-ripple__circle"></span>
                </span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
