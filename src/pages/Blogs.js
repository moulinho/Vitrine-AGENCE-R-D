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
          institutionnel du Club Abidjan Ville Durable en 2025. Cet
          accompagnement précieux inclut :
          <ul>
            <li>
              Un accès à un écosystème de partenaires stratégiques pour
              renforcer l'impact de notre projet.
            </li>
            <li>
              Un appui dans la structuration et le déploiement de Gilui.ai.
            </li>
          </ul>
          <span className="fw-bols">Une étape clé pour CorreIA LLC</span>
          <br />
          Fondée en mai 2024 à Paris, CorreIA LLC s’est rapidement imposée comme
          un acteur innovant en agence de Recherche & Développement, avec une
          mission claire : utiliser la technologie pour résoudre des défis
          réels. Cette distinction reflète notre engagement envers la recherche
          et le développement, en particulier pour les marchés émergents comme
          celui de la Côte d’Ivoire.
          <span className="fw-bols">
            Un avenir plus durable grâce à la collaboration
          </span>
          <br />
          Nous remercions chaleureusement le Club Abidjan Ville Durable pour
          cette reconnaissance et leur engagement à accompagner des projets
          porteurs de sens. Ensemble, nous sommes convaincus que Gilui.ai
          contribuera à façonner un avenir énergétique plus durable, tout en
          renforçant l’accès à des solutions technologiques pour tous.
          <br />
          <br />
          <h2 className="fw-bolder">A Propos de Abidjan Ville Durable</h2>
          Le <span className="fw-bold">Club Abidjan Ville Durable (CAVD)</span>
          est une organisation française regroupant plus de 90 entreprises
          engagées dans le développement de solutions innovantes pour les villes
          africaines. Créé pour répondre aux défis de l’urbanisation rapide et
          des transitions environnementales, le club collabore avec des acteurs
          locaux et internationaux afin de construire des villes plus
          inclusives, résilientes et respectueuses de l’environnement.
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
      title: "Martin Correia, PDG de CorreIA LLC",
      description: (
        <>
          Dans un monde en constante évolution, où la technologie et la culture
          jouent un rôle prépondérant dans la transformation des sociétés,{" "}
          <span className="fw-bold">Livrit Martin Correia</span> se distingue
          par son parcours exceptionnel et son engagement multidimensionnel.
          <br />
          Descendant direct de{" "}
          <span className="fw-bold">Diogo Alvares Correia</span>, navigateur
          portugais et pionnier du métissage culturel, Livrit Martin Correa
          incarne l’héritage d’une vision globale, enrichie par ses passions
          pour la technologie, l’art et la culture juive.
          <br />
          <br />
          <span className="fw-bold">Un héritage de visionnaire</span>
          <br />
          L’histoire personnelle de{" "}
          <span className="fw-bold">Livrit Martin Correia</span> est
          profondément marquée par son admiration pour des figures emblématiques
          telles qu’ <span className="fw-bold">Albert Einstein</span> et
          <span className="fw-bold">Sigmund Freud</span> , toutes deux issues de
          la <span className="fw-bold">culture juive</span> . Inspiré par leur
          rigueur scientifique et leur approche intellectuelle, il applique ces
          principes dans son travail, qu’il s’agisse d’innovation technologique
          ou de leadership stratégique.
          <br />
          <span className="fw-bold">À la tête de CorreIA LLC</span>
          <br />
          En tant que{" "}
          <span className="fw-bold">
            Président Directeur Général et Directeur de la politique de
            Recherche et Développement (R&D) de CorreIA LLC
          </span>
          , Martin pilote des projets novateurs axés sur l’intelligence
          artificielle et le développement durable. Parmi ses contributions
          notables :
          <ul>
            <li>
              <span className="fw-bold">Gilui.ai</span>, un modèle d’IA conçu
              pour rendre les données publiques accessibles et exploitables,
              facilitant ainsi la prise de décision pour les entrepreneurs et
              les citoyens.
            </li>
            <li>
              <span className="fw-bold">CorreIA LLM</span>
              Création d’une équipe multidisciplinaire pour l’élaboration et la
              mise en oeuvre de projets de développement durable.
            </li>
          </ul>
          <span className="fw-bold">
            Une Influence multidimensionnelle{" "}
          </span>{" "}
          <br />
          Outre son rôle chez CorreIA LLC, Martin Correa occupe des postes
          stratégiques :
          <br />
          <ol>
            <li>
              <span className="fw-bold">TV5MONDE</span> : En tant qu’agent
              externe, il contribue à enrichir l’offre numérique TV5MONDE
              Afrique, l’un des plus grands médias francophones.
            </li>
            <li>
              <span className="fw-bold">Ex-Change Expertise asbl</span>: En tant
              que représentant, il soutient les PME et entreprises africaines
              dans le renforcement de leurs capacités.
            </li>
            <li>
              <span className="fw-bold">Sheba Medical Center</span> : Depuis
              novembre 2024, il représente en Côte d’Ivoire ce{" "}
              <span className="fw-bold">centre de santé public juif</span> de
              renommée mondiale. À ce titre, il :
              <ul>
                <li>
                  Facilite l’accès des patients ivoiriens à des soins médicaux
                  de classe mondiale.
                </li>
                <li>
                  Offre un accompagnement personnalisé pour garantir une
                  expérience fluide et efficace.
                </li>
                <li>
                  Promeut des collaborations entre professionnels de santé
                  ivoiriens et israéliens.
                </li>
              </ul>
            </li>
          </ol>
          <span className="fw-bold">Conclusion : Un leader inspirant</span>{" "}
          <br />
          Comme son ancêtre{" "}
          <span className="fw-bold">Diogo Alvares Correia</span> , Livrit Martin
          Correia n’est pas seulement un entrepreneur ou un innovateur
          technologique ; il est un{" "}
          <span className="fw-bold">bâtisseur de ponts</span>, reliant les
          <span className="fw-bold">cultures, les technologies</span> et les{" "}
          <span className="fw-bold">individus</span>. À travers ses multiples
          engagements, il illustre comment une vision globale et une passion
          pour le progrès peuvent redéfinir les limites de ce qui est possible.{" "}
          <br />
          Cet article est une invitation à suivre son parcours et à découvrir
          comment ses projets façonnent un avenir plus connecté, plus inclusif
          et résolument tourné vers l’innovation.
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
      id: 6,
      image: "img/img-35.jpg",
      date: "17 Jun",
      title:
        "La Mission de CorreIA LLC : Accompagner le nouvel élan de collaboration entre l’Europe et l’Afrique",
      description: (
        <>
          Dans un monde où les défis sociaux, économiques et environnementaux
          s’intensifient, l'innovation ne peut plus être une simple option, mais
          devient une nécessité absolue. Chez{" "}
          <span className="fw-bold">CorreIA LLC,</span> nous avons transformé
          cette nécessité en action, en plaçant la recherche et le développement
          (R&D) au cœur de notre mission. Aujourd’hui, nous souhaitons partager
          ce qui guide nos initiatives et inspire nos partenariats : une mission
          claire, une vision ambitieuse et des valeurs profondément ancrées.
          <p className="fw-bold">
            Une Mission : Relier l’Europe et l’Afrique par l’Innovation
          </p>
          <p>
            Notre mission est simple mais audacieuse :{" "}
            <span className="fw-bold">démocratiser l’accès à la R&D</span> et
            bâtir des ponts entre l’Europe et l’Afrique pour stimuler une
            collaboration mutuellement bénéfique. Nous croyons que l’innovation
            ne doit pas être le privilège d’une minorité technologique, mais un
            levier universel pour relever les défis complexes et améliorer les
            conditions de vie.
          </p>
          <p>
            En accompagnant nos partenaires dans leur démarche d’innovation,
            nous les aidons à :
            <ul>
              <li className="fw-bold">
                Surmonter les limitations en ressources et en compétences.
              </li>
              <li className="fw-bold">
                Répondre aux défis sociétaux avec des solutions novatrices et
                inclusives.
              </li>
              <li className="fw-bold">
                Se développer de manière durable tout en renforçant leur
                compétitivité.
              </li>
            </ul>
          </p>
          <p>
            CorreIA LLC s’efforce d’être le catalyseur de cette transformation,
            en réunissant le meilleur des deux continents pour créer un impact
            tangible.
          </p>
          <p className="fw-bold">
            Une Vision pour Demain : L’Afrique comme Acteur Global de
            l’Innovation
          </p>
          <p>
            Nous aspirons à un monde où l’innovation devient un{" "}
            <span className="fw-bold">bien commun</span>, une ressource partagée
            entre les peuples et les cultures. En ancrant nos activités dans le
            <span className="fw-bold">
              métissage culturel entre l’Europe et l’Afrique
            </span>{" "}
            , nous avons une vision ambitieuse :
            <span className="fw-bold">
              faire de la diversité culturelle un moteur clé du développement
              économique et social.
            </span>
            <br />
            Nous rêvons d’un avenir où l’Afrique, grâce à sa créativité et son
            potentiel inexploité, se positionne comme un{" "}
            <span className="fw-bold">
              acteur central de l’innovation mondiale
            </span>{" "}
            , tout en intégrant les meilleures pratiques européennes pour créer
            des solutions hybrides et durables.
          </p>
          <p className="fw-bold">Nos Valeurs : L’Éthique de l’Innovation</p>
          Les valeurs de CorreIA LLC façonnent notre identité et guident nos
          actions :
          <ul>
            <li>
              {" "}
              <span className="fw-bold">Accessibilité </span> : Nous
              démocratisons l’innovation pour en faire un outil inclusif et
              universel.
            </li>
            <li>
              {" "}
              <span className="fw-bold">Durabilité</span> : Chaque initiative
              est pensée pour réduire son empreinte écologique et répondre aux
              défis environnementaux.
            </li>
            <li>
              {" "}
              <span className="fw-bold">Collaboration</span> : En réunissant les
              talents et perspectives des deux continents, nous créons des
              synergies enrichissantes.
            </li>
            <li>
              {" "}
              <span className="fw-bold">Excellence</span> : Nous nous engageons
              à atteindre un niveau de qualité irréprochable dans chacune de nos
              solutions.
            </li>
          </ul>
          <p>
            Ces valeurs nous permettent de créer des projets qui allient
            <span className="fw-bold">
              technologie de pointe, créativité interculturelle et respect des
              enjeux sociaux et environnementaux.
            </span>
          </p>
          <p className="fw-bold">Des Projets qui Illustrent Notre Vision</p>
          Nos initiatives, telles que :
          <ul>
            <li>
              <span className="fw-bold">Gilui</span>, une application innovante
              dédiée aux villes durables, et
            </li>
            <li>
              <span className="fw-bold">CorreIA LLM</span>un modèle
              d’intelligence artificielle conçu pour centraliser et démocratiser
              les données publiques, illustrent notre engagement à relever les
              défis contemporains par des solutions concrètes et durables. Ces
              projets incarnent notre capacité à transformer les défis locaux en
              <span className="fw-bold">opportunités mondiales</span>, tout en
              intégrant des pratiques responsables.
            </li>
          </ul>
          <p className="fw-bold">Pourquoi Choisir CorreIA LLC ? </p>
          <p>
            En collaborant avec <span className="fw-bold">CorreIA LLC</span>,
            vous rejoignez une entreprise qui repousse constamment les limites
            de l’innovation tout en restant profondément connectée aux réalités
            locales. Vous faites le choix d’un partenaire qui valorise autant la{" "}
            <span className="fw-bold">créativité culturelle</span> que la
            <span className="fw-bold">rigueur technologique</span>, tout en
            bâtissant des solutions adaptées et impactantes.
            <br /> CorreIA LLC, c’est plus qu’une entreprise : c’est une vision,
            un engagement, et une aventure collective pour bâtir un monde où
            l’innovation devient la pierre angulaire du progrès durable. <br />
            <span className="fw-bold">
              CorreIA LLC : Créer aujourd’hui, innover pour demain.
            </span>
          </p>
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
      id: 7,
      image: "img/img-36.jpg",
      date: "17 Jun",
      title:
        "Sékou Bamba : Monsieur Data de CorreIA LLC et Lead du Projet R&D CorreIA LLM",
      description: (
        <>
          <p>
            Dans un monde où la transformation numérique redéfinit les règles du
            jeu économique, des figures émergent pour mener la révolution
            technologique. Parmi elles,{" "}
            <span className="fw-bold">Sékou Bamba</span>, co-fondateur de
            <span className="fw-bold">CorreIA LLC</span>, incarne une nouvelle
            génération d’entrepreneurs africains prêts à relever les défis du
            futur. Désormais, il aspire à diriger le projet ambitieux{" "}
            <span className="fw-bold">CorreIA LLM</span>, renforçant sa position
            de leader dans le domaine de la recherche et développement en
            intelligence artificielle.
          </p>
          <p>
            <p className="fw-bold">Un Parcours inspirant</p>
            Originaire de la <span className="fw-bold">Côte d’Ivoire</span> ,
            Sékou Bamba s’est distingué dès son jeune âge par sa passion pour
            les données et les technologies avancées. Diplômé en{" "}
            <span className="fw-bold">data analytic</span> s et en{" "}
            <span className="fw-bold">transformation digitale</span> , il a
            construit un parcours solide, alliant expertise technique et vision
            stratégique. Ses expériences passées, notamment en tant que
            <span className="fw-bold">
              {" "}
              Coordinateur Data Junior chez Newrest
            </span>{" "}
            , lui ont permis de démontrer sa capacité à extraire des
            informations cruciales de données complexes, facilitant des
            décisions stratégiques éclairées.
          </p>

          <p>
            <span className="fw-bold">
              CorreIA LLC et le projet CorreIA LLM : Une Vision axée sur
              l’impact
            </span>{" "}
            <br />
            CorreIA LLC, une agence de recherche et développement basée à Paris,
            se distingue par son engagement à démocratiser l’accès aux
            technologies avancées. L’agence, sous la direction de ses
            co-fondateurs, développe des solutions en intelligence artificielle
            adaptées aux défis sociaux et économiques de l’Afrique.
          </p>
          <p>
            Parmi ces initiatives, le projet{" "}
            <span className="fw-bold">CorreIA LLM </span>
            occupe une place centrale. Ce projet vise à créer une intelligence
            artificielle qui centralise les données publiques, les analyse pour
            en extraire des informations stratégiques et les rend accessibles
            aux entrepreneurs, aux entreprises et au grand public. Les
            principaux objectifs incluent :
          </p>
          <ul>
            <li>
              <span className="fw-bold">
                Offrir un accès simplifié à des informations fiables
              </span>{" "}
              pour une meilleure prise de décision.
            </li>
            <li className="fw-bold">
              Faciliter les interactions entre les citoyens, les organisations
              et les administrations publiques.
            </li>
          </ul>
          <p>CorreIA LLM repose sur trois piliers fondamentaux :</p>
          <ol>
            <li>
              <span className="fw-bold">Précision</span>: Les données fournies
              sont pertinentes et fiables.
            </li>
            <li>
              <span className="fw-bold">Personnalisation</span> : Les
              informations sont adaptées aux besoins spécifiques de chaque
              utilisateur.
            </li>
            <li>
              <span className="fw-bold">Crédibilité</span> : Les sources de
              données sont authentifiées et référencées.
            </li>
          </ol>
          <p>
            Sékou Bamba, fort de ses compétences en{" "}
            <span className="fw-bold">analyse de données</span> et en
            <span className="fw-bold">conception de solutions innovantes</span>,
            se positionne comme le{" "}
            <span className="fw-bold">
              leader naturel de ce projet stratégique
            </span>
            , assumant un rôle clé dans son développement.
          </p>
          <p>
            <p className="fw-bold">Un engagement pour l’Afrique et au-delà</p>
            L’ambition de Sékou Bamba dépasse les frontières. En prenant la tête
            du projet CorreIA LLM, il aspire à :
          </p>
          <ul>
            <li>
              <span className="fw-bold">
                Renforcer l’écosystème technologique africain
              </span>{" "}
              en comblant le manque de services R&D internes dans de nombreuses
              organisations locales.
            </li>
            <li>
              <span className="fw-bold">
                Faciliter l’accès aux technologies avancées
              </span>{" "}
              , notamment dans les secteurs de la santé, de l’éducation et de
              l’économie numérique.
            </li>
            <li>
              <span className="fw-bold">
                Positionner CorreIA LLM comme un outil de transformation sociale
                et économique
              </span>{" "}
              ,en soutenant les entrepreneurs et en simplifiant l’accès aux
              données publiques.
            </li>
          </ul>
          <p>
            En parallèle, ce projet ouvre des opportunités pour collaborer avec
            des acteurs mondiaux comme <span className="fw-bold">ChatGPT</span>,
            élargissant l’impact de CorreIA LLC sur les marchés africains et
            européens.
          </p>
          <p>
            <p className="fw-bold">Un leader inspirant pour CorreIA LLM</p>
            Sékou Bamba est la preuve vivante qu’une combinaison d’expertise
            technique, de vision stratégique et de leadership peut transformer
            des défis en opportunités. En tant que{" "}
            <span className="fw-bold">Lead du projet CorreIA LLM</span> , il
            vise à :
            <ul>
              <li className="fw-bold">
                Établir une synergie entre innovation technologique et impact
                social.
              </li>
              <li>
                <span className="fw-bold">
                  Encourager la mise à jour régulière des données publiques
                </span>{" "}
                pour une transparence accrue.
              </li>
              <li>
                <span className="fw-bold">
                  Favoriser une collaboration internationale
                </span>{" "}
                pour enrichir les capacités des modèles d’IA.
              </li>
            </ul>
          </p>
          <p>
            <p className="fw-bold">
              Conclusion : Vers une IA au service de tous
            </p>
            Avec le projet CorreIA LLM, Sékou Bamba se positionne comme un
            acteur clé de la révolution numérique en Afrique et en Europe. Son
            leadership, son expertise et sa vision ambitieuse font de lui un
            pilier incontournable pour faire de l’intelligence artificielle un
            levier de<span className="fw-bold">progrès durable</span> et de{" "}
            <span className="fw-bold">croissance inclusive</span> . CorreIA LLM,
            sous la direction de Sékou Bamba, s’inscrit dans une dynamique
            d’innovation éthique et collaborative, répondant aux besoins des
            populations locales tout en ouvrant la voie à de nouvelles
            perspectives pour l’IA dans le monde.{" "}
            <span className="fw-bold">"Monsieur Data"</span> de CorreIA LLC est
            prêt à transformer l’avenir, un projet à la fois.
          </p>
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
      id: 8,
      image: "img/img-37.jpg",
      date: "17 Jun",
      title:
        "Matou Faty : Étudiante visionnaire et future architecte de l’innovation numérique",
      description: (
        <>
          <p>
            <span className="fw-bold">Matou Faty</span> , née en France, est une
            étudiante passionnée et déterminée, en pleine formation pour devenir
            développeuse d’applications et analyste de données. Prometteuse dans
            son domaine, elle allie énergie et ambition en tant que
            co-fondatrice, œuvrant à la création de solutions numériques
            innovantes et centrées sur les besoins des utilisateurs.
          </p>
          <p>
            <span className="fw-bold">
              Un Parcours éducatif et professionnel inspirant
            </span>
            Actuellement étudiante en{" "}
            <span className="fw-bold"> développement d’applications</span> ,
            <span className="fw-bold"> analyse de données </span>Faty cultive
            une profonde passion pour les technologies et leur potentiel
            transformateur. En parallèle de ses études, elle met déjà en
            pratique ses compétences en participant activement à des projets
            technologiques.
            <p>Son apprentissage s’articule autour de plusieurs axes :</p>
            <ul>
              <li>
                <span className="fw-bold">
                  Maîtrise des langages de programmation
                </span>{" "}
                : Python, JavaScript, et d’autres outils modernes pour créer des
                solutions performantes.
              </li>
              <li>
                <span className="fw-bold">Analyse de données</span>: Formation
                sur des outils tels que Power BI et SQL pour extraire et
                visualiser des insights stratégiques.
              </li>

              <li>
                <span className="fw-bold">
                  Gestion de projets collaboratifs
                </span>
                : Apprentissage des méthodologies agiles, un atout précieux pour
                ses projets actuels et futurs.
              </li>
            </ul>
          </p>

          <p>
            <span className="fw-bold">Co-Fondatrice et étudiante engagée</span>{" "}
            <br />
            Malgré son statut d’étudiante, Matou Faty a co-fondé un projet
            technologique ambitieux, démontrant une vision claire et une
            capacité exceptionnelle à anticiper les besoins numériques des
            utilisateurs. Avec une approche collaborative et créative, elle
            contribue activement au développement d’outils innovants.
            <p>Ses contributions clés:</p>
            <ol>
              <li>
                <span className="fw-bold">
                  Initiatives centrées sur l’utilisateur
                </span>{" "}
                : Elle participe à la conception de solutions accessibles et
                intuitives, adaptées aux besoins réels des utilisateurs.
              </li>
              <li>
                <span className="fw-bold">
                  Innovation technologique en apprentissage{" "}
                </span>
                : Elle explore et applique des concepts théoriques pour résoudre
                des problématiques concrètes dans ses projets.
              </li>

              <li>
                <span className="fw-bold">Rôle inspirant pour ses pairs</span>:
                Matou incarne une figure d’engagement et de persévérance,
                inspirant d’autres étudiants à viser l’excellence.
              </li>
            </ol>
          </p>
          <p>
            <span className="fw-bold">
              Des projets marquants et porteurs d'avenir{" "}
            </span>
            Malgré son statut d’étudiante, Matou Faty a déjà contribué à
            plusieurs projets qui reflètent son ambition et son potentiel :
            <ul>
              <li>
                <span className="fw-bold">
                  Développement d’applications éducatives
                </span>{" "}
                : Création de prototypes pour améliorer l’accès à
                l’apprentissage numérique.
              </li>
              <li>
                <span className="fw-bold">
                  Analyse de données pour des solutions locales
                </span>
                : Participation à des études qui aident à extraire des
                informations exploitables pour des PME.
              </li>

              <li>
                <span className="fw-bold">
                  {" "}
                  Projets collaboratifs technologiques
                </span>
                : Projets collaboratifs technologiques : Contribution à la
                création d’outils numériques inclusifs, adaptés aux contextes
                africains.
              </li>
            </ul>
          </p>

          <p>
            <span className="fw-bold">Un engagement pour l’avenir</span> :{" "}
            <br />
            Matou Faty aspire à utiliser ses compétences pour résoudre des défis
            concrets, en particulier dans les secteurs où la technologie peut
            avoir un impact social significatif, comme l’éducation, la santé et
            le développement économique. Sa formation actuelle lui fournit une
            base solide pour bâtir un futur où elle pourra pleinement exploiter
            son potentiel.
          </p>

          <p>
            <span className="fw-bold">
              Conclusion : Une étudiante déterminée et visionnaire
            </span>
            Matou Faty n’est pas une simple étudiante ; elle est une future
            pionnière en développement d’applications et en analyse de données.
            Son engagement envers l’innovation technologique, combiné à sa soif
            d’apprentissage, fait d’elle une figure prometteuse dans le domaine
            des technologies numériques.
            <br />
            Alors qu’elle poursuit ses études, elle prépare également le terrain
            pour devenir une actrice clé de la transformation digitale, en
            Afrique et au-delà. Matou Faty incarne l’énergie et le talent d’une
            nouvelle génération qui, par ses efforts, façonnera un avenir où la
            technologie sera véritablement au service des besoins humains.
          </p>
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
      id: 9,
      image: "img/img-30.jpg",
      date: "17 Jun",
      title:
        "CorreIA LLC : Transformez vos compétences avec nos formations innovantes",
      description: (
        <>
          <p>
            Chez <span className="fw-bold">CorreIA LLC</span> , nous croyons que
            la formation est la clé pour relever les défis d’un monde en
            constante évolution. En tant qu’agence spécialisée dans le
            développement des compétences professionnelles et académiques, nous
            mettons à votre disposition des programmes de formation innovants
            dans les domaines de la{" "}
            <span className="fw-bold">Communication Digitale</span> , du
            <span className="fw-bold">Marketing Digital</span> et de l’{" "}
            <span className="fw-bold">Intelligence Artificielle (IA)</span> .
            Nos formations sont conçues pour répondre aux besoins spécifiques
            des entreprises, des professionnels et des étudiants souhaitant
            s’adapter à la révolution numérique.
          </p>
          <p>
            <span className="fw-bold">Notre Expertise, Nos Réalisations</span>

            <p>
              CorreIA LLC a déjà eu l’honneur de collaborer avec des
              organisations et institutions de renom pour renforcer leurs
              compétences en numérique et en IA : :
            </p>
            <ul>
              <li>
                <span className="fw-bold">
                  Intelligence Artificielle avec la Chambre de Commerce Belge en
                  Côte d’Ivoire (BELUCI)
                </span>{" "}
                : En décembre 2024, nous avons accompagné des professionnels
                dans la compréhension et l’application des concepts de l’IA pour
                leurs activités stratégiques.
              </li>
              <li>
                <span className="fw-bold">
                  {" "}
                  Marketing Digital avec Orange Côte d’Ivoire
                </span>
                : : Entre février et mars 2023, nos formations ont permis aux
                agents d’Orange CI de développer des campagnes digitales
                efficaces et innovantes, adaptées à leur marché.
              </li>

              <li>
                <span className="fw-bold">
                  Formations pour les Universités Françaises en Côte d’Ivoire
                </span>
                : Depuis 2021, nous accompagnons des étudiants dans les domaines
                de la{" "}
                <span className="fw-bold">
                  Communication et Marketing Digital
                </span>{" "}
                et de{" "}
                <span className="fw-bold">l’Intelligence Artificielle, </span>{" "}
                en les préparant à intégrer un marché du travail en constante
                mutation.
              </li>
            </ul>
          </p>
          <p>
            <span className="fw-bold">Nos Modules de Formation</span> , née en
            Nous proposons des modules adaptés aux besoins des entreprises et
            des particuliers, qu’ils soient débutants ou avancés :
            <p className="fw-bold">1. Communication Digitale</p>
            Apprenez à :
            <ul>
              <li>
                Développer des stratégies efficaces pour gérer vos canaux
                numériques.
              </li>
              <li>
                Mieux communiquer avec vos audiences en ligne grâce à des outils
                modernes.
              </li>
            </ul>
            <p className="fw-bold">2. Marketing Digital</p>
            Boostez votre visibilité avec des compétences pratiques, notamment :
            <ul>
              <li>
                La gestion de campagnes publicitaires sur les réseaux sociaux.
              </li>
              <li>
                L’optimisation de votre site pour attirer et fidéliser vos
                clients.
              </li>
            </ul>
            <p className="fw-bold">3. Intelligence Artificielle (IA)</p>
            Initiez-vous aux concepts de l’IA et découvrez comment :
            <ul>
              <li>Intégrer l’IA dans vos processus métiers.</li>
              <li>
                Automatiser vos tâches répétitives et gagner en efficacité.
              </li>
            </ul>
          </p>
          <p>
            <span className="fw-bold">Pourquoi Choisir CorreIA LLC ?</span> :{" "}
            <ul>
              <li>
                <span className="fw-bold">Expertise avérée </span> : Des années
                d’expérience dans la formation professionnelle et académique.
              </li>
              <li>
                <span className="fw-bold"> Programmes personnalisés</span> :
                Adaptation des formations en fonction des besoins spécifiques de
                chaque client ou organisation.
              </li>
              <li>
                <span className="fw-bold">Accompagnement global </span> : Un
                suivi post-formation pour garantir l’application des compétences
                acquises.
              </li>
            </ul>
          </p>
          <p className="fw-bold">Passez à l’Action !</p>
          Ne laissez pas vos équipes ou vos projets numériques prendre du
          retard. Contactez-nous dès aujourd’hui pour :
          <ul>
            <li>
              {" "}
              <span className="fw-bold">
                Planifier une formation sur mesure
              </span>{" "}
              adaptée à vos besoins.
            </li>
            <li>
              {" "}
              <span className="fw-bold">Développer vos compétences</span> pour
              exceller dans un environnement numérique en constante évolution.
            </li>
          </ul>
        </>
      ),
      contact: [
       
        {
          icon: (
            <Link to={`tel:+33775707722`} target="_blank">
              <span className="waituk-icon-phone"></span>
              {/* <img src="/img/envelope.svg" alt="whatsapp" width={15} /> */}
            </Link>
          ),
          // email: "rd@correia.ai",
        }, {
          icon: (
            <Link to={`mailto:formation@correia.ai `} target="_blank">
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
                <h1>Blog & Actualités               </h1>
              </div>
              <div className="breadcrumb-block">
                <ol className="breadcrumb justify-content-center">
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
