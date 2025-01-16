import React, { useState } from "react";
import { Link } from "react-router";

const Footer = () => {
  const contactInfo = [
    {
      icon: "waituk-icon-phone",
      title: "Appelez-nous",
      value: (
        <>
          <a className="link-secondary" href="tel:0101210208">
            +33 (7) 75 707 722 <br /> +225 (01) 01 210 208
          </a>
        </>
      ),
    },
    {
      icon: "waituk-icon-email",
      title: "Envoyez-nous un e-mail à",
      value: (
        <>
          <a className="link-secondary" href="mailto:rd@correia.ai">
            rd@correia.ai
          </a>{" "}
        </>
      ),
    },
    {
      icon: "waituk-icon-pin",
      title: "CorreIA LLC",
      value: (
        <>
          CorreIA LLC 61 rue de Lyon, <br /> 75012 Paris, France
        </>
      ),
    },
  ];

  const socialLinks = [
    { icon: "/img/facebooks.svg", link: "https://web.facebook.com/CorreiaLLC" },
    {
      icon: "/img/whatsapps.svg",
      link: "https://wa.me/message/R2AN3TFJCKDHM1",
    },
    {
      icon: "/img/linkedin.svg",
      link: "https://www.linkedin.com/company/104069378/admin/dashboard/",
    },
  ];

  const [formData, setFormData] = useState({ subscribe: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <footer className="footer footer-v1">
      <div className="content-block footer-main text-center bg-black">
        <div className="container">
          {/* Newsletter Form */}
          <div className="waituk_newsletter-form">
            <form  onSubmit={handleSubmit}>
              <fieldset className="clearfix">
                <div className="form-group input-holder">
                  <input
                    type="email"

                    className="form-control"
                    placeholder="Email Address"
                    name="newsletter"
                    value={formData.newsletter}
                    onChange={handleChange}
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
            <div className="row text-left ">
              {contactInfo.map((info, index) => (
                <div className="col-12 col-sm-6 col-md-4 mb-4" key={index}>
                  <div className="row  justify-content-center align-items-center">
                    {/* Icon column */}
                    <div className="col-1 icon-wrapper">
                      <div className={`social-network icon ${info.icon}`}></div>
                    </div>
                    {/* Text content */}
                    <div className="col">
                      <strong>{info.title}</strong> <br />
                      <span>{info.value}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Social Networks */}
          <ul className="social-network text-gray d-flex gap-3 justify-content-center">
            {socialLinks.map((social, index) => (
              <li key={index}>
                <Link to={social.link}>
                  <img src={social.icon} alt={social.icon} width={35} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* <div className="footer-bottom text-center">
      <div className="container">
        <p>Copyright 2016 - Roxine - Multi Purpose Theme by Waituk </p>
      </div>
    </div> */}
    </footer>
  );
};

export default Footer;
