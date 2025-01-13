import React from "react";
import Aside from "../components/Aside/Aside";

const Team = () => {
  const dataTeam = [
    {
      name: "Matou FATY",
      role: "Co-fondatrice, Développeuse d’applications et analyste de données",
      img: "img/team-06.jpg",
      desc: "En tant que co-fondatrice, Matou Faty combine ses compétences en développement d’applications et en analyse de données pour concevoir des solutions technologiques innovantes et centrées sur les besoins des utilisateurs.",
    },
    {
      name: "Martin CORREIA (Livrit)",
      role: "PDG, Directeur de la politique de Recherche & Développement (R&D)",
      img: "img/team-05.jpg",
      desc: (
        <>
          Il guide la vision et les stratégies de l’entreprise, en veillant à
          aligner innovation technologique et impact social. <br />
          Son expertise approfondie en intelligence artificielle (IA) et en
          entrepreneuriat social reflète son engagement à repousser les limites
          de l’innovation, tout en développant des solutions concrètes et
          adaptées aux besoins des entreprises et des communautés.
        </>
      ),
    },
    {
      name: "Sékou BAMBA",
      role: "Co-fondateur, spécialiste en analyse de données",
      img: "img/team-04.jpg",
      desc: "En tant que co-fondateur et spécialiste en analyse de données, Sékou Bamba apporte une expertise précieuse dans le traitement, l’interprétation et l’exploitation des données. Son rôle est central dans la transformation des données en informations stratégiques, permettant à l’entreprise de développer des solutions adaptées aux défis de ses clients.",
    },
    // {
    //   name: "Darren Donovan",
    //   role: "Founder / CEO",
    //   img: "img/team-09.jpg",
    //   desc: "Set indulgence inquietude discretion insensible bed why announcing...",
    // },
    // {
    //   name: "Ina Brettan",
    //   role: "Visual Design Guru",
    //   img: "img/team-08.jpg",
    //   desc: "Put all speaking her delicate recurred every possible...",
    // },
    // {
    //   name: "Leona Mattur",
    //   role: "Web Programmer",
    //   img: "img/team-07.jpg",
    //   desc: "Middleton fat two satisfied additions...",
    // },
  ];
  return (
    <main>
      {/* Visual/Banner of the page */}
      <section className="visual">
        <div
          className="visual-inner visual-banner dark-overlay parallax"
          data-stellar-background-ratio="0.55"
        >
          <div className="container fs-5">
            <div className="visual-text-large text-left visual-center text-center my-5">
              <div className="visual-title">
                <h1>Équipe</h1>
              </div>
             
              <div className="breadcrumb-block">
                <ol className="breadcrumb justify-content-center">
                  <li className="breadcrumb-item">
                    <a href="index-2.html"> Home </a>
                  </li>
                  <li className="breadcrumb-item active"> Équipe </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Visual/Banner of the page */}

      {/* Main content wrapper */}
      <div className="content-wrapper">
        <section className="content-block p-5">
          <div className="container">
            {/* <div className="heading bottom-space text-center my-5">
              <h2 >
                Learn. <span>Acheive.</span> Admire
              </h2>
            </div>
            <div className="description text-center ">
              <p className="fw-bold fs-5">
                Delightful unreserved impossible few estimating men favourable
                see entreaties. She propriety immediate was improving. He or
                entrance humoured likewise moderate. Much nor game son say feel.
                Fat make met can must form into gate. Me we offending prevailed
                discovery.
              </p>
            </div> */}
            <div className="row justify-content-evenly gap-1 fs-5 text-left">
              {dataTeam.map((teamMember, index) => (
                <div className="col-md-3" key={index}>
                  <figure className="team-box caption-fade-up top-l-space">
                    <div className="img-block">
                      <img
                        src={teamMember.img}
                        alt={`${teamMember.name} description`}
                      />
                    </div>
                    <figcaption className="team-des-v2">
                      <span className="sub fw-bold fs-5">{teamMember.role}</span>
                      <strong className="content-title name">
                        {teamMember.name}
                      </strong>
                      <p>{teamMember.desc}</p>
                    </figcaption>
                  </figure>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quotation Block */}
        {/* <section
          className="content-block quotation-block black-overlay-6 parallax"
          data-stellar-background-ratio="0.55"
        >
          <div className="container">
            <div className="inner-wrapper text-white">
              <h3>BEST EVER DESIGN</h3>
              <h2>Thinking of joining a winning team?</h2>
              <div className="btn-container">
                <a href="#" className="btn btn-primary">
                  VIEW VACANCIES
                </a>
              </div>
            </div>
          </div>
        </section> */}
<div className="bg-light">

        <Aside />
        </div>
      </div>
      {/* End Main content wrapper */}
    </main>
  );
};

export default Team;
