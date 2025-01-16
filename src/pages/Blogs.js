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
      title: "L'ADN de CorreIA LLC : Signification des lettres de notre logo",

      description: (
        <>
          Le logo de CorreIA LLC est une œuvre d'art visuelle qui incarne
          l'essence même de l'entreprise. Chaque lettre a été conçue avec une
          intention précise, reflétant les valeurs et la mission de la société.
          <br />{" "}
          <span className="fw-bold">
            La lettre "C" : Le réceptacle de l'innovation
          </span>
          . <br />
          La forme ouverte et incurvée du "C" symbolise un espace accueillant où
          convergent idées, talents et ressources créatives. Elle incarne un
          réservoir dynamique, prêt à transformer ces éléments en solutions
          concrètes, illustrant ainsi la vision de CorreIA LLC en tant
          qu’entreprise innovante et adaptable. <br />
          <span className="fw-bold">
            La lettre "O" : Dépasser les limites et embrasser le paradoxe
          </span>
          . <br />
          Le "O" débordant et ouvert représente la volonté de contourner les
          frontières et de repousser les limites conventionnelles. Il incarne
          l'approche de l'entreprise, qui fusionne des éléments apparemment
          opposés pour créer des solutions uniques et efficaces, tout en restant
          fidèle à des valeurs humaines et éthiques. <br />
          <span className="fw-bold">
            Les lettres "R" inachevées : Mouvement perpétuel et ouverture
          </span>
          Les "R" volontairement inachevés symbolisent un mouvement perpétuel,
          évoquant l’idée que l’innovation et la création sont des processus
          évolutifs et continus. Cette incomplétude souligne la flexibilité et
          la quête constante de progrès de CorreIA LLC, toujours en recherche de
          nouvelles solutions et d’améliorations. <br />
          <span className="fw-bold">
            La lettre "E" : Activation et transformation "
          </span>{" "}
          La structure du "E", avec ses trois barres horizontales et sa ligne
          verticale, évoque une activation de processus. Elle représente le
          potentiel de l’entreprise à initier des changements significatifs,
          transformant des idées en réalisations concrètes grâce à des processus
          de recherche et développement innovants. . <br />
          <span className="fw-bold">
            La lettre "I" : L’humain au cœur de l’innovation et du développement
            durable
          </span>
          Le "i" incarne l'importance de l’humain dans le processus
          d'innovation. Le point au sommet symbolise l’étincelle d'idées,
          reflétant l’engagement de CorreIA LLC à placer l’humain et la
          durabilité au centre de ses projets, en développant des solutions
          technologiques répondant aux valeurs humaines et environnementales.{" "}
          <br />
          <span className="fw-bold">
            La lettre "A" : Ouverture à la créativité et souffle d’innovation
          </span>{" "}
          La forme ouverte du "a" symbolise une porte accueillant un{" "}
          <span className="fw-bold"> souffle créatif</span>. Ce souffle
          représente les idées nouvelles et l’énergie qui poussent l’entreprise
          à constamment se renouveler, explorant de nouvelles solutions et
          repoussant les limites de la technologie.
          <br />
          <span className="fw-bold">
            Les rayures en filigrane : Profondeur et complexité
          </span>{" "}
          .<br />
          Les rayures subtiles en arrière-plan ajoutent une dimension de
          profondeur, symbolisant les multiples couches d'innovation et la
          complexité des défis que l’entreprise s’efforce de relever. Elles
          reflètent la richesse des projets menés et l’interconnexion des idées
          au sein de CorreIA LLC.
          <br />
          <span className="fw-bold">
            Motifs africains : Métissage et ancrage culturel
          </span>{" "}
          <br />
          Les motifs africains intégrés dans le logo rendent hommage à la
          richesse culturelle du continent africain. Ils symbolisent
          l’interconnexion des cultures et des idées, mettant en avant
          l'importance de la diversité et de l'inclusivité, éléments
          fondamentaux de l’identité de CorreIA LLC. <br />
          En somme, le logo de CorreIA LLC est une représentation visuelle riche
          et complexe, reflétant l'engagement de l'entreprise envers
          l'innovation, l'humain, et le métissage culturel, tout en symbolisant
          sa mission de transformer des idées en solutions concrètes et
          durables.
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
      id: 3,
      image: "img/img-32.jpg",
      date: "17 Jun",
      title: "Projet R&D : abrand News Magazine",

      description: (
        <>
          Dans un monde où l’information se diffuse en un instant et disparaît
          tout aussi vite, <i> abrand News - Mag</i> se distingue en prenant le
          temps de révéler l'essence de chaque organisation. Plus qu'un simple
          magazine, nous créons une immersion totale, un espace où chaque
          entreprise, chaque collectivité, et chaque acteur social ou culturel a
          l’opportunité de partager son histoire, ses valeurs et son impact en
          profondeur.
          <br /> Avec <i> abrand News - Mag</i>, nous réinventons la façon de
          communiquer et de découvrir les organisations, loin des formats
          d’actualité éphémères et des discours figés. Ici, l’authenticité est
          au cœur de chaque page. Nous plongeons dans l’ADN de nos partenaires
          pour explorer leurs parcours, leurs engagements, et leurs
          réalisations. En intégrant des interviews exclusives, des reportages
          immersifs et des contributions d’experts, nous offrons une perspective
          à 360 degrés, qui redéfinit la notion de transparence et valorise le
          dialogue avec le public. . <br />
          Ce premier numéro, consacré à CorreIA LLC, incarne parfaitement notre
          ambition. CorreIA LLC est une entreprise où la rencontre des cultures
          françaises et africaines ne se limite pas à des mots, mais se traduit
          par des projets concrets, des créations graphiques uniques, et des
          valeurs profondément ancrées dans le changement social. À travers les
          pages de ce numéro, vous découvrirez l’histoire d’une startup qui
          fusionne tradition et innovation pour façonner un avenir durable en
          France et en Côte d’Ivoire.
          <br />
          Nous croyons fermement que chaque organisation a un rôle essentiel à
          jouer et mérite d’être mise en lumière pour inspirer et fédérer. En
          devenant la voix et l’écho de ceux qui œuvrent pour le progrès,{" "}
          <i> abrand News - Mag</i> fait bien plus que raconter des histoires ;
          il façonne la perception de l’impact social et économique de ces
          acteurs sur la société, faisant de chaque organisation la une de
          demain !
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
      id: 4,
      image: "img/img-33.jpg",
      date: "17 Jun",
      title:
        "1er prix, CorreIA LLC récompensée pour son projet Gilui.ai par le Club Abidjan Ville Durable",
      description: (
        <>
          <span className="fw-bold">Communiqué officiel de CorreIA LLC</span>{" "}
          <br />
          Paris, France – Décembre 2024, Nous sommes ravis d’annoncer que
          <span className="fw-bold">CorreIA LLC</span> a été distinguée en tant
          que lauréat de l’édition 2024 du
          <span className="fw-bold">
            Concours Initiatives Ville Durable (CIVD)
          </span>
          , organisé par le{" "}
          <span className="fw-bold">Club Abidjan Ville Durable</span>. Cette
          reconnaissance prestigieuse met en lumière notre projet phare,{" "}
          <span className="fw-bold">Gilui.ai</span> , conçu pour transformer la
          gestion énergétique en Côte d’Ivoire.
          <span className="fw-bold">
            {" "}
            À propos de Gilui.ai : Une solution innovante pour une gestion
            énergétique durable Gilui.ai
          </span>
          est une plateforme innovante qui digitalise l’utilisation des
          compteurs d’électricité. Ce projet répond à des enjeux cruciaux en
          matière de gestion énergétique, offrant une précision accrue dans les
          relevés, une transparence dans la facturation et une capacité
          d’adaptation aux besoins réels des consommateurs. <br />
          Notre objectif est simple mais ambitieux : moderniser les
          infrastructures énergétiques de la Côte d’Ivoire pour offrir une
          expérience utilisateur améliorée, tout en optimisant la répartition
          des ressources et en favorisant des comportements éco-responsables.
          <br />
          <span className="fw-bold">
            Un accompagnement institutionnel pour concrétiser notre vision
          </span>{" "}
          <br />
          En tant que lauréat, nous aurons l’honneur de bénéficier du soutien
          institutionnel du Club Abidjan Ville Durable en 2025. Cet accompagnement précieux inclut :
        <ul>
          <li>
          Un accès à un écosystème de partenaires stratégiques pour renforcer l'impact de notre projet.

          </li>
          <li>
          Un appui dans la structuration et le déploiement de Gilui.ai.
          </li>
       
        </ul>
         
        
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
