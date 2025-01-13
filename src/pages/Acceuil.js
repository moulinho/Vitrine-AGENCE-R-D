import React from "react";
import { Link } from "react-router";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Aside from "../components/Aside/Aside";
function Acceuil() {
  const teamMembers = [
    {
      id: 1,
      name: "Jason Stratham",
      role: "UI/UX Guru",
      img: "/img/team-01.jpg",
    },
    {
      id: 2,
      name: "Jessica Fizovic",
      role: "UI/UX Guru",
      img: "/img/team-02.jpg",
    },
    { id: 3, name: "James Nass", role: "UI/UX Guru", img: "/img/team-03.jpg" },
  ];

  const infoItems = [
    {
      icon: "/img/education.svg",
      title: 'Formation en IA',
      description: ' Renforcement des capacités des entreprises & PME sur l’intelligence artificielle (IA)',
      link: '#',
    },
    {
      icon: '/img/marketing.svg',
      title: 'Communication et Marketing Digital',
      description: 'Élaboration de stratégie de communication, Marketing digital et créations graphiques.',
      link: '#',
    },
    {
      icon: '/img/good-idea.svg',
      title: 'Recherche & Développement (R&D)',
      description: 'Accompagnement en innovation. Service R&D externalisé pour les entreprises & PME',
      link: '#',
    },
    {
      icon: '/img/chip-ai.svg',
      title: 'Solutions technologiques basées sur l’IA',
      description: 'Automatisation et optimisation des processus métiers grâce aux outils d’intelligence artificielle (IA)',
      link: '#',
    },
    {
      icon: '/img/data-center.svg',
      title: 'Analyse et traitement de données',
      description: 'Accompagnement les organisations dans l’exploitation de leurs données.',
      link: '#',
    },
  ];
  const projetItems = [
    { id: 1, img: "../img/img-37.jpg", categories: "ui photography" },
    { id: 2, img: "../img/img-32.jpg", categories: "photography programming" },
    // { id: 3, img: "../img/img-33.jpg", categories: "ui photography" },
    // { id: 4, img: "../img/img-34.jpg", categories: "ecommerce programming" },
    // { id: 5, img: "../img/img-35.jpg", categories: "programming ecommerce" },
    // { id: 6, img: "../img/img-36.jpg", categories: "ecommerce ui" },
  ];
  return (
    <div>
      {/* <!-- main wrapper --> */}
      <div id="wrapper" className="no-overflow-x">
        <div className="page-wrapper">
          <main>
            {/* <!-- visual/banner of the page --> */}
            <section
              className="main-section "
            >
              <div className="container-fluid bsb-hero-6 bsb-overlay pt-5">
                <div className="row justify-content-center align-items-center text-white text-start">
                  <div className="col-12 col-md-11 col-xl-10">
                    {/* Sub-title */}
                    <h5 className=" text-white fw-bold mb-3">
                      RECHERCHE & DEVELOPPEMENT. INTELLIGENCE
                      ARTIFICIELLE. <br /> COMMUNICATION
                    </h5>

                    {/* Main title */}
                    <h1
                      className="slider-main-title text-white fw-bold mb-4 zoom-animation"
                      style={{ fontSize: "clamp(2rem,7vw, 10rem)" }} // Scales font size based on viewport width
                    >
                      AGENCE R&D
                    </h1>

                    {/* Slider text */}
                    <div
                      className="slider-text text-white mb-5 zoom-animation"
                      style={{ fontSize: "clamp(1rem, 1vw, 1.5rem)" }}
                    >
                      CorreIA LLC est une agence de recherche et développement
                      (R&D) <br />
                      spécialisée en intelligence artificielle (IA).
                      {/* Nous avons pour mission
          de rendre l'innovation accessible à tous, en transformant la R&D en
          une ressource partagée et démocratisée.
          <br />
          Nos projets se concentrent sur l'Afrique, où le manque de services
          internes de R&D freine l'innovation et la résolution des défis
          complexes du continent. Nous visons à combler cette lacune en devenant
          le service R&D externalisé des organisations africaines, contribuant
          ainsi à un développement socio-économique durable. */}
                    </div>

                    {/* Button */}
                    <div className="pt-5 zoom-from-bottom-to-up">
                      <a href="#!" className="btn btn-primary has-radius-small">
                        Pourquoi nous choisir ?
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* <!--/visual/banner of the page --> */}
            {/* <!-- main content wrapper --> */}
            <div className="content-wrapper">
              <section className="content-block">
                <div className="container">
                  <div className="row multiple-row v-align-row">
                    <div className="col-lg-4 col-md-6">
                      <div className="col-wrap">
                        <div className="block-heading text-left">
                          <h5>POURQUOI VOUS ENGAGER DANS</h5>
                          <h4 className="fw-bolder">
                            UNE COLLABORATION AVEC NOUS ?
                          </h4>
                          <span className="block-sub-heading">
                            Collaborer avec nous, c'est choisir une expertise
                            unique, une approche personnalisée, et des solutions
                            durables adaptées à vos besoins.
                          </span>
                          <div className="divider">
                            <img
                              src="../img/divider.png"
                              alt="images description"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    {infoItems.map((item, index) => (
                      <div
                        className="col-12 col-md-6 col-lg-4 mb-4"
                        key={index}
                      >
                        <div className="col-wrap">
                          <div className="ico-box bg-gray-light text-center">
                            <div className="icon mb-3">
                            <img src={item.icon} alt={item.title} width={35} />

                            </div>
                            <h4>
                              <a href={item.link}>{item.title}</a>
                            </h4>
                            <div className="des">
                              <p>{item.description}</p>
                            </div>
                            {/* <div className="link-holder">
                        <a className="link-more" href={item.link}>
                          LEARN MORE
                        </a>
                      </div> */}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <section
                className="content-block quotation-block black-overlay-6 parallax"
                data-stellar-background-ratio="0.55"
              >
                <div className="container">
                  <div className="inner-wrapper text-white">
                    <h3>VOUS AVEZ UN BESOIN ?</h3>
                    <h2>Demander une cotation</h2>
                    <div className="btn-container">
                      <Link
                        href="#"
                        className="btn btn-primary has-radius-small"
                      >
                        Demander
                      </Link>
                    </div>
                  </div>
                </div>
              </section>
              <section className="content-block portfolio-block pb-0" id="container">
                <div className="block-heading bottom-space text-center text-uppercase">
                  <h2>Projets</h2>
                </div>
                <ul className="filter-nav text-center button-group filter-button-group">
                  <li>
                    <Link data-filter="*">Gilui</Link>
                  </li>
                  <li>
                    <Link data-filter=".ui">CorreIA LLM</Link>
                  </li>
                </ul>
                <div className="row grid g-4 justify-content-center">
                  {projetItems.map((item) => (
                    <div
                      key={item.id}
                      className={`gallery-item col-lg-4 mt-0 col-md-6 ${item.categories}`}
                    >
                      <figure className="picture-item img-block shine-effect image-zoom port-v2">
                        <img
                          src={item.img}
                          alt="Gallery item"
                          // className="img-fluid" // Ensures image responsiveness
                          style={{objectFit: 'cover'}}
                        />
                        <figcaption>
                          <div className="link-box d-flex justify-content-center gap-3">
                            <a href="#!">
                              <span className="waituk-icon-heart">
                                <span className="sr-only">&amp;</span>
                              </span>
                            </a>
                            <a href="#!">
                              <span className="waituk-icon-link">
                                <span className="sr-only">&amp;</span>
                              </span>
                            </a>
                          </div>
                        </figcaption>
                      </figure>
                    </div>
                  ))}
                </div>
              </section>
              <section className="content-block text-left">
                <div className="container">
                  <div className="block-heading bottom-space">
                    <h3>Pourquoi vous engager dans</h3>
                    <h2> une collaboration avec nous ?</h2>
                    <span className="block-sub-heading">
                      Collaborer avec nous, c'est choisir une expertise unique,
                      une approche personnalisée, et des solutions durables
                      adaptées à vos besoins.
                    </span>
                    <div className="divider">
                      <img src="../img/divider.png" alt="images description" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="bottom-space-small-only">
                        <p className="fw-bold"> Ce qui nous distingue :</p>
                        <ul style={{ paddingLeft: "1rem" }}>
                          <li>
                            <span className="waituk-icon-checkmark-circle">
                              <span className="sr-only">&amp;</span>
                            </span>
                            <span className="fw-bold">
                              {" "}
                              Innovation centrée sur vos besoins :
                            </span>
                            Nous développons des solutions technologiques
                            innovantes qui répondent précisément à vos objectifs
                            stratégiques.
                          </li>
                          <li>
                            <span className="waituk-icon-checkmark-circle">
                              <span className="sr-only">&amp;</span>
                            </span>
                            <span className="fw-bold">
                              Expertise internationale et locale :
                            </span>
                            Notre équipe multidisciplinaire combine une
                            connaissance approfondie des réalités africaines et
                            européennes, garantissant des solutions sur-mesure.
                          </li>
                          <li>
                            <span className="waituk-icon-checkmark-circle">
                              <span className="sr-only">&amp;</span>
                            </span>
                            <span className="fw-bold">
                              Engagement pour la durabilité :
                            </span>
                            Nous intégrons des pratiques responsables dans tous
                            nos projets pour réduire les impacts
                            environnementaux.
                          </li>
                          <li>
                            <span className="waituk-icon-checkmark-circle">
                              <span className="sr-only">&amp;</span>
                            </span>
                            <span className="fw-bold">
                              Services personnalisés :
                            </span>
                            Que ce soit pour la formation, le développement de
                            projets R&D ou l'adoption de solutions
                            d’intelligence artificielle, nous vous accompagnons
                            à chaque étape.
                          </li>

                          <li>
                            <span className="waituk-icon-checkmark-circle">
                              <span className="sr-only">&amp;</span>
                            </span>
                            <span className="fw-bold">Impact mesurable :</span>
                            Nos projets, tels que CorreIA LLM et Gilui, ont
                            démontré leur capacité à transformer des secteurs
                            clés comme l'énergie, la santé et les données
                            publiques.
                          </li>
                        </ul>

                        <div className="btn-container top-m-space">
                          <Link
                            href="#"
                            className="btn btn-black has-radius-small"
                          >
                            Contactez-nous <br /> aujourd’hui !
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="bottom-s-space">
                        <p>
                          Pourquoi attendre ? Rejoignez les nombreuses
                          entreprises et organisations qui nous font déjà
                          confiance. Ensemble, construisons un futur innovant,
                          durable et prospère. Découvrez nos projets et services
                          dès maintenant !
                        </p>
                      </div>
                      <div className="row">
                        <div className="col-sm-6">
                          <p className="fw-bold">Nos domaines d'expertise :</p>

                          <ul className="content-links text-primary text-uppercase">
                            <li>R&D externalisée</li>
                            <li>
                              Développement d'applications et analyse de données
                            </li>
                            <li>Adoption et intégration de solutions IA</li>
                          </ul>
                        </div>
                        <div className="col-sm-6">
                          <ul className="content-links text-primary text-uppercase">
                            <li>
                              Stratégies de communication et marketing digital
                            </li>
                            <li>
                              Formation en intelligence artificielle et
                              marketing numérique
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section id="work-section" className="content-block work-block">
                <div className="bg-stretch">
                  <img src="../img/big-01.jpg" alt="big" className="cultiver" />
                </div>
                <div className="container">
                  <div className="block-heading  text-center">
                    <h3>Espace de travail</h3>
                    <h2 className="">La Culture CorreIA LLC</h2>
                    {/* <span className="block-sub-heading">
                      Lovely people with nack for design creativity flourish
                      here.
                    </span> */}
                    <div className="divider">
                      <img src="../img/divider.png" alt="images description" />
                    </div>
                  </div>
                  <div className="description text-center container-md">
                    <p>
                      Chez CorreIA LLC, nous croyons fermement que la créativité
                      et l'innovation s'épanouissent dans un environnement qui
                      valorise l’humain. Notre espace de travail incarne cette
                      vision : un lieu où des talents divers convergent pour
                      donner vie à des idées audacieuses et transformer les
                      défis en opportunités.
                    </p>
                  </div>
                </div>
              </section>

              <section className="content-block">
                <div className="container">
                  <div className="block-heading bottom-space">
                    <h3>QUI SOMMES-NOUS</h3>
                    <h2>EQUIPE DE TRAVAIL</h2>
                    <span className="block-sub-heading">
                      Nous croyons que la réussite repose sur une collaboration
                      harmonieuse et un esprit d'équipe fort. Nous sommes une
                      famille de professionnels engagés, unis par une passion
                      commune pour l'innovation et le progrès.
                    </span>
                    <div className="divider">
                      <img src="/img/divider.png" alt="Divider" />
                    </div>
                  </div>
                  <div className="team-container">
                    <OwlCarousel
                      className="owl-theme"
                      loop
                      margin={10}
                      nav
                      dots={false}
                      responsive={{
                        0: { items: 1 },
                        600: { items: 2 },
                        1000: { items: 3 },
                      }}
                    >
                      {teamMembers.map((member) => (
                        <div className="slide-item" key={member.id}>
                          <figure className="team-box caption-fade-up">
                            <div className="img-block rev-gray-scale">
                              <img src={member.img} alt={`${member.name}`} />
                            </div>
                            <figcaption className="text-right">
                              <strong className="content-title mb-0">
                                {member.name}
                              </strong>
                              <span className="sub">{member.role}</span>
                            </figcaption>
                          </figure>
                        </div>
                      ))}
                    </OwlCarousel>
                  </div>
                </div>
              </section>

              <section
                className="content-block count-block text-center p-0 parallax"
                data-stellar-background-ratio="0.55"
              >
                <div className="container-fluid">
                  <div className="row no-gutters">
                    <div className="col-sm-6 col-lg-3">
                      <div className="col-wrap">
                        <div className="icon">
                          <span className="waituk-icon-projects"></span>
                        </div>
                        <h3>03</h3>
                        <div className="text text-uppercase">PROJECTS</div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-3">
                      <div className="col-wrap">
                        <div className="icon">
                          <span className="waituk-icon-smile"></span>
                        </div>
                        <h3>03</h3>
                        <div className="text text-uppercase">CLIENTS</div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-3">
                      <div className="col-wrap">
                        <div className="icon">
                          <span className="waituk-icon-award"></span>
                        </div>
                        <h3>01</h3>
                        <div className="text text-uppercase">PRIX</div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-3">
                      <div className="col-wrap">
                        <div className="icon">
                          <span className="waituk-icon-celebrate"></span>
                        </div>
                        <h3>02</h3>
                        <div className="text text-uppercase">Réalisations</div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <Aside />
            </div>
            {/* <!--/main content wrapper --> */}
          </main>
        </div>
      </div>
      {/* <!-- search form wrapper --> */}
      <div className="search-form-wrapper">
        <a href="#" className="nav-search-link close">
          <span className="waituk-icon-android-close"></span>
        </a>
        <div className="holder">
          <input
            type="search"
            className="form-control form-control-v1"
            placeholder="Enter Your Search"
          />
          <button type="submit">
            <span className="waituk-icon-search"></span>
          </button>
        </div>
      </div>
      <a href="#" className="section-scroll" id="scroll-to-top">
        <i className="fa fa-angle-up"></i>
      </a>
    </div>
  );
}

export default Acceuil;
