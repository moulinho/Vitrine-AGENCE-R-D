import React, { useState } from "react";
import { Link } from "react-router";
import Aside from "../components/Aside/Aside";

export default function Contact() {
  const socialLinks = [
    {
      title: "rd@correia.ai",
      icon: "waituk-icon-email",
      link: "rd@correia.ai",
    },
    {
      title: "whatsapp",
      icon: "/img/whatsapp.svg",
      link: "https://wa.me/message/R2AN3TFJCKDHM1",
    },
  ];

  const [formData, setFormData] = useState({
    con_fname: "",
    con_lname: "",
    con_phone: "",
    con_email: "",
    con_message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <main className="">
      <div className="bg-dark p-5 opacity-50"></div>
      {/* Visual Banner Section */}
      <section className="visual visual-sub visual-no-bg my-5 ">
        <div className="visual-inner no-overlay bg-gray-light">
          <div className="centered">
            <div className="container">
              <div className="visual-text visual-center">
                <div className="visual-title">
                  <h1>Nous contacter</h1>
                </div>
                <div className="breadcrumb-block">
                  <ol className="breadcrumb justify-content-center">
                    <li className="breadcrumb-item">
                      <Link to="/">Home</Link>
                    </li>

                    <li className="breadcrumb-item active">contacte </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="content-wrapper">
        <section className="content-block pb-0">
          <div className="container">
            <div className="contact-container">
              <div className="contact-title">
                <h6>Nous contacter</h6>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  {/* contact form */}
                  <form
                    onSubmit={handleSubmit}
                    id="contact_form"
                    className="waituk_contact-form"
                  >
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            placeholder="Nom *"
                            id="con_fname"
                            name="con_fname"
                            className="form-control"
                            value={formData.con_fname}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            placeholder="Prenom(s) *"
                            id="con_lname"
                            name="con_lname"
                            className="form-control"
                            value={formData.con_lname}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="tel"
                            placeholder="Téléphone"
                            id="con_phone"
                            name="con_phone"
                            className="form-control"
                            value={formData.con_phone}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="email"
                            placeholder="Email *"
                            id="con_email"
                            name="con_email"
                            className="form-control"
                            value={formData.con_email}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <textarea
                        className="form-control"
                        placeholder="Messages *"
                        id="con_message"
                        name="con_message"
                        value={formData.con_message}
                        onChange={handleChange}
                      ></textarea>
                    </div>
                    <div className="btn-container">
                      <button
                        id="btn_sent"
                        className="btn btn-primary btn-arrow"
                      >
                        Envoyer
                      </button>
                      <p id="error_message"></p>
                    </div>
                  </form>
                </div>
                <div className="col-lg-6 col-xl-5 ml-xl-auto">
                  <div className="info-slot">
                    <div className="icon">
                      <span className="waituk-icon-map-marker"></span>
                    </div>
                    <div className="text">
                      <address>
                        CorreIA LLC
                        <br />
                        61 rue de Lyon, 75012 Paris, France
                      </address>
                    </div>
                  </div>
                  <div className="info-slot">
                    <div className="icon">
                      <span className="waituk-icon-headset"></span>
                    </div>
                    <div className="text">
                      <ul className="content-list contact-list">
                        <li>
                          <a href="tel:+33775707722"> +33 (7) 75 707 722</a>
                        </li>
                        <li>
                          <a href="tel:+2250101210208">+225 (01) 01 210 208</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="info-slot">
                    <div className="icon">
                      <span className="waituk-icon-message"></span>
                    </div>
                    <div className="text">
                      <ul className="content-list contact-list">
                        {socialLinks.map((social, index) => (
                          <li key={index}>
                            <Link to={social.link}>{social.title}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="map-holder ">
          <iframe
            title="map-holder"
            src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d85090.44465517328!2d2.2637145078368497!3d48.86015324233528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x47e66f5be4dc120f%3A0x8f9bbc175d86c38c!2sDomiciliation%20entreprise%20Paris%20%22Les%20Tricolores%22%2C%2015%20Rue%20des%20Halles%2C%2075001%20Paris%2C%20France!3m2!1d48.860182599999995!2d2.3461149!4m5!1s0x47e66f5be4dc120f%3A0x8f9bbc175d86c38c!2sDomiciliation%20entreprise%20Paris%20%22Les%20Tricolores%22%2C%2015%20Rue%20des%20Halles%2C%2075001%20Paris%2C%20France!3m2!1d48.860182599999995!2d2.3461149!5e1!3m2!1sen!2sci!4v1736729801268!5m2!1sen!2sci"
            width="600"
            height="450"
            style={{ border: "0" }}
            loading="lazy"
          ></iframe>
        </div>
        <Aside />
      </div>
    </main>
  );
}
