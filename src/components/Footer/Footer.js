import React from "react";
import { Link } from "react-router";

const Footer = () => {
  const contactInfo = [
    {
      icon: "waituk-icon-phone",
      title: "Call Us On",
      value: (
        <>
          <a className="link-secondary" href="tel:9779851108896">
            977 985 1108896
          </a>
        </>
      ),
    },
    {
      icon: "waituk-icon-email",
      title: "Email Us At",
      value: (
        <>
          Email at{" "}
          <a className="link-secondary" href="mailto:waituk.net">
            Waituk.net
          </a>{" "}
        </>
      ),
    },
    {
      icon: "waituk-icon-pin",
      title: "Visit Office",
      value: "707 Ive Corner - London",
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
  return (
    <footer className="footer footer-v1">
      <div className="content-block footer-main text-center bg-black">
        <div className="container">
          {/* Newsletter Form */}
          <div className="waituk_newsletter-form">
            <form action="#" method="post">
              <fieldset className="clearfix">
                <div className="form-group input-holder">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email Address"
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
                  <div className="d-flex align-items-center">
                    {/* Icon column */}
                    <div className="icon-wrapper me-3">
                      <span
                        className={`social-network icon ${info.icon}`}
                      ></span>
                    </div>
                    {/* Text content */}
                    <div>
                      <strong>{info.title}</strong> <br />
                      <span>{info.value}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Social Networks */}
          <ul className="social-network d-flex gap-3 justify-content-center">
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
