import React from 'react'

export default function Services() {
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
  return (
    <main>
      {/* Visual/banner section */}
      <section className="visual">
        <div
          className="visual-inner visual-banner-v10 dark-overlay parallax"
          data-stellar-background-ratio="0.55"
        >
          <div className="centered">
            <div className="container">
              <div className="visual-center text-center">
                <div className="visual-title">
                  <h1>Services</h1>
                </div>
                <div className="breadcrumb-block">
                  <ol className="breadcrumb justify-content-center">
                    <li className="breadcrumb-item">
                      <a href="index-2.html">Home</a>
                    </li>
                    
                    <li className="breadcrumb-item active">service</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main content wrapper */}
      <div className="content-wrapper">
        <section className="content-block">
          <div className="container">
            <div className="row multiple-row v-align-row">
              {/* First block */}
              <div className="col-12 col-md-6 col-lg-4 mb-4">
                <div className="col-wrap text-center">
                  <div className="block-heading text-left">
                  <h5 >POURQUOI VOUS ENGAGER DANS</h5>
                          <h4 className='fw-bolder'>UNE COLLABORATION AVEC NOUS ?</h4>
                          <span className="block-sub-heading">
                            Collaborer avec nous, c'est choisir une expertise
                            unique, une approche personnalisée, et des solutions
                            durables adaptées à vos besoins.
                          </span>
                  </div>
                </div>
              </div>

              {/* Info items */}
              {infoItems.map((item, index) => (
                <div className="col-12 col-md-6 col-lg-4 mb-4" key={index}>
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
      </div>
    </main>
  )
}
