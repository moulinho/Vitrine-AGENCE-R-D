import React from "react";
import { Link } from "react-router";

export default function Detail({ project }) {
  return (
    <main className="">
        <div className="bg-dark p-5 opacity-50" >

        </div>
      {/* Visual Banner Section */}
      <section className="visual visual-sub visual-no-bg my-5 ">
        <div className="visual-inner no-overlay bg-gray-light">
          <div className="centered">
            <div className="container">
              <div className="visual-text visual-center">
                <div className="visual-title">
                  <h1>{project.title}</h1>
                </div>
                <div className="breadcrumb-block">
                  <ol className="breadcrumb justify-content-center">
                    <li className="breadcrumb-item">
                      <Link to="/">Home</Link>
                    </li>
                    <li className="breadcrumb-item">
                      <Link to="/projets">Project</Link>
                    </li>
                    <li className="breadcrumb-item active">{project.title} </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Wrapper */}
      <div className="content-wrapper">
        <section className="content-block">
          <div className="container">
            <div className="row portfolio-gallery">
              {/* Gallery Images */}
              <div className="bottom-space-medium-only col-lg-6">
                <div className="img-block border-hover-effect">
                  <img src={project.images[0]} alt="images" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="row">
                  <div className="col-small col-md-6">
                    <div className="img-block border-hover-effect">
                      <img src={project.images[1]} alt="images" />
                    </div>
                  </div>
                  <div className="col-small col-md-6">
                    <div className="img-block border-hover-effect">
                      <img src={project.images[2]} alt="images" />
                    </div>
                  </div>
                  <div className="col-small mb-0 col-md-12">
                    <div className="img-block border-hover-effect">
                      <img src={project.images[3]} alt="images" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Details */}
            <div className="portfolio-des top-space text-left fs-5">
              <div className="row">
                <div className="col-lg-6 bottom-space-medium-only">
                  <ul className="content-list info-list">
                    <li className="row">
                      <div className="col">
                        <span className="waituk-icon-folder">
                          <span className="sr-only">&nbsp;</span>
                        </span>
                        <span className="text title">Nom du projet</span>
                      </div>
                      <div className="col">
                        <p>{project.title}</p>
                      </div>
                    </li>
                    <li className="row">
                      <div className="col">
                        <span className="waituk-icon-user">
                          <span className="sr-only">&nbsp;</span>
                        </span>
                        <span className="text title"> Promoteur:</span>
                      </div>
                      <div className="col">
                        <p>{project.projectDetails.createdBy}</p>
                      </div>
                    </li>
                    <li className="row">
                      <div className="col">
                        <span className="waituk-icon-calendar">
                          <span className="sr-only">&nbsp;</span>
                        </span>
                        <span className="text title"> Version:</span>
                      </div>
                      <div className="col">
                        <p>{project.projectDetails.completedOn}</p>
                      </div>
                    </li>
                    <li className="row">
                      <div className="col">
                        <span className="waituk-icon-skill">
                          <span className="sr-only">&nbsp;</span>
                        </span>
                        <span className="text title"> Domaine:</span>
                      </div>
                      <div className="col">
                        <p>{project.projectDetails.skills}</p>
                      </div>
                    </li>
                    <li className="row">
                      <div className="col">
                        <span className="waituk-icon-link2">
                          <span className="sr-only">&nbsp;</span>
                        </span>
                        <span className="text title">Client:</span>
                      </div>
                      <div className="col">
                        <p>
                          <Link to={project.path}>
                            {project.projectDetails.client}
                          </Link>{" "}
                        </p>
                      </div>
                      {/* <div className="col">
                            <span className="sr-only">{project.projectDetails.client}</span>
                          </div> */}
                    </li>
                  </ul>

                  {/* Project Detail Text */}
                  <div className="text-block top-space">
                    <div className="text-block-title">
                      <h3>Detail</h3>
                    </div>
                    <p>{project.projectDetails.description}</p>
                  </div>
                  <br />
                  <div className="text-block">
                    <div className="text-block-title">
                      <h3>Conclusion</h3>
                    </div>
                    <p>{project.conclusion}</p>
                  </div>
                  <br />
                  <div className="text-block d-flex align-items-center gap-4">
                    <div className="text-block-title">
                      <h3 className="mb-0">Contact:</h3>
                    </div>
                    <div className="d-flex gap-4 ">
                      {project.contact.map((icon, index) => (
                        <span key={index} className="relative">
                          <span className="hover-shadow transition-transform transform hover:scale-105 hover:translate-y-1">
                            {icon.icon}
                          </span>
                          
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Additional Project Text */}
                <div className="col-lg-6">
                  <div className="text-block">
                    <div className="text-block-title">
                      <h4>Objectifs principaux :</h4>
                    </div>
                    <ol>
                      {project.objectives.map((text, index) => (
                        <li key={index}>
                          <span className="fw-bold">{text.title}</span>
                          <br />
                          {text.description}
                        </li>
                      ))}
                    </ol>
                  </div>
                  <br />

                  <div className="text-block">
                    <div className="text-block-title">
                      <h4>Caractéristiques clés de Gilui.ai :</h4>
                    </div>
                    <ol>
                      {project.caracteristiques.map((text, index) => (
                        <li key={index}>
                          <span className="fw-bold">{text.title}</span>
                          <br />
                          {text.description}
                        </li>
                      ))}
                    </ol>
                  </div>
                  <br />

                  <div className="text-block">
                    <div className="text-block-title">
                      <h4>Impact attendu :</h4>
                    </div>
                    <ol>
                      {project.impact.map((text, index) => (
                        <li key={index}>
                          <span className="fw-bold">{text.title}</span>
                          <br />
                          {text.description}
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
