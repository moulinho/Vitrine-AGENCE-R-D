import React from 'react'

const Team = () => {
  return (

    <main>
      {/* Visual/Banner of the page */}
      <section className="visual">
        <div className="visual-inner visual-banner dark-overlay parallax" data-stellar-background-ratio="0.55">
          <div className="container">
            <div className="visual-text-large text-left visual-center">
              <div className="visual-title">
                <h1>The Team</h1>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit porro laudantium sequi. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              <div className="breadcrumb-block">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><a href="index-2.html"> Home </a></li>
                  <li className="breadcrumb-item"><a href="index-2.html"> Elements </a></li>
                  <li className="breadcrumb-item active"> Team </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Visual/Banner of the page */}
      
      {/* Main content wrapper */}
      <div className="content-wrapper">
        <section className="content-block">
          <div className="container">
            <div className="heading bottom-space text-center">
              <h2>Learn. <span>Acheive.</span> Admire</h2>
            </div>
            <div className="description text-center">
              <p>Delightful unreserved impossible few estimating men favourable see entreaties. She propriety immediate was improving. He or entrance humoured likewise moderate. Much nor game son say feel. Fat make met can must form into gate. Me we offending prevailed discovery.</p>
            </div>
            <div className="row">
              {[
                { name: "Nicola Gorani", role: "Founder / CEO", img: "img/team-06.jpg", desc: "Put all speaking her delicate recurred every possible..." },
                { name: "Jeremi Stralt", role: "Founder / CEO", img: "img/team-05.jpg", desc: "Set indulgence inquietude discretion insensible bed why announcing..." },
                { name: "Colin Nizurb", role: "Web Programmer", img: "img/team-04.jpg", desc: "Much nor game son say feel. Fat make met can must form into gate..." },
                { name: "Darren Donovan", role: "Founder / CEO", img: "img/team-09.jpg", desc: "Set indulgence inquietude discretion insensible bed why announcing..." },
                { name: "Ina Brettan", role: "Visual Design Guru", img: "img/team-08.jpg", desc: "Put all speaking her delicate recurred every possible..." },
                { name: "Leona Mattur", role: "Web Programmer", img: "img/team-07.jpg", desc: "Middleton fat two satisfied additions..." }
              ].map((teamMember, index) => (
                <div className="col-md-4" key={index}>
                  <figure className="team-box caption-fade-up top-l-space">
                    <div className="img-block">
                      <img src={teamMember.img} alt={`${teamMember.name} description`} />
                    </div>
                    <figcaption className="team-des-v2">
                      <span className="sub">{teamMember.role}</span>
                      <strong className="content-title name">{teamMember.name}</strong>
                      <p>{teamMember.desc}</p>
                    </figcaption>
                  </figure>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quotation Block */}
        <section className="content-block quotation-block black-overlay-6 parallax" data-stellar-background-ratio="0.55">
          <div className="container">
            <div className="inner-wrapper text-white">
              <h3>BEST EVER DESIGN</h3>
              <h2>Thinking of joining a winning team?</h2>
              <div className="btn-container">
                <a href="#" className="btn btn-primary">VIEW VACANCIES</a>
              </div>
            </div>
          </div>
        </section>

        {/* Logos Section */}
        <aside className="content-block">
          <div className="container">
            <div className="logo-container">
              <div className="owl-carousel logo-slide" id="waituk-owl-slide-4">
                {[
                  "logo-01.png", "logo-02.png", "logo-03.png", "logo-04.png", "logo-03.png"
                ].map((logo, index) => (
                  <div className="slide-item" key={index}>
                    <img src={`img/${logo}`} alt="logo" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </aside>
      </div>
      {/* End Main content wrapper */}
    </main>
  );


}

export default Team