import React from "react";
import { Link } from "react-router";

const Header = () => {
  const menuItems = [
    { label: "Blog One Column", path: "/blog-one-col" },
    { label: "Blog Two Column", path: "/blog-two-col" },
    { label: "Blog Three Column", path: "/blog-three-col" },
    { label: "Blog Left Sidebar", path: "/blog-left-sidebar" },
    { label: "Blog Right Sidebar", path: "/blog-right-sidebar" },
    { label: "Masonry", path: "/blog-masonry" },
    { label: "Full Width", path: "/blog-full-width" },
    { label: "Blog Single", path: "/blog-single" },
  ];

  const features = [
    {
      title: "Gilui",
      path: "/gilui"
    },
    {
      title: "CorreIA LLM",
      path: "/correIa_LLM"
    },
   
  ];

  const identityMenuItems = [
    {
      label: "À propos de nous",
      href: "/about"
    },
    {
      label: "Engagements",
      href: "/Engagement"
      
    },
    {
      label: "Enjeux",
      href: "/enjeux"
     
    },
    { label: "Notre ADN", href: "/ADN" },
    { label: "Notre Vision", href: "/vision" },
    { label: "Notre Mission", href: "/mission" },
    { label: "Nos valeurs", href: "/valeur" }
  ];

  return (
    <header
      className="fixed-top main-header header-white transparent with-icons"
      id="waituk-main-header"
    >
      <div id="nav-section">
        <div
          className="bottom-header container-fluid mega-menus"
          id="mega-menus"
        >
          <nav
            className="navbar navbar-expand-lg navbar-toggleable-md no-border-radius no-margin mega-menu-multiple"
            id="navbar-inner-container"
          >
            <form
              action="https://html.waituk.com/roxine/mega-menu-5.html"
              id="top-search"
              className="no-margin top-search"
            >
              <div className="form-group no-margin">
                <input
                  className="form-control no-border"
                  id="search_term"
                  name="search_term"
                  placeholder="Type & Press Enter"
                  type="text"
                />
              </div>
            </form>
            <button
              type="button"
              className="navbar-toggler navbar-toggler-left"
              data-toggle="collapse"
              data-target="#mega-menu"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <Link
              className="navbar-brand mr-auto m-sm-auto"
              to="/"
            >
              {" "}
              <img src="/img/logo.svg" alt="roxine" />{" "}
              <img src="/img/logo-dark.svg" alt="roxine" />
            </Link>
            <div
              className="collapse navbar-collapse flex-row-reverse "
              id="mega-menu"
            >
              <ul className="nav navbar-nav ">
                <li className="dropdown" data-animation="fadeIn">
                  <Link
                    to="/"
                    className="dropdown-toggle fw-semibolder "
                    data-toggle="dropdown"
                    href="index-2.html"
                    data-title="Home"
                  >
                    {" "}
                    Accueil{" "}
                  </Link>
                </li>
            
                <li className="dropdown" data-animation="fadeIn">
                  <Link className="dropdown-toggle fw-semibolder " data-toggle="dropdown">
                  Notre Identité 
                  </Link>
                  <ul className="dropdown-menu no-border-radius">
                    {identityMenuItems.map((item, index) => (
                      <li
                        key={index}
                        className={
                          item.subItems
                            ? "dropdown dropdown-left dropdown-parent"
                            : ""
                        }
                      >
                        <Link className="sub-marker fw-semibolder " to={item.href}>
                          {item.label}
                          {item.subItems && (
                            <i className="waituk-icon-ios-more icn-right"></i>
                          )}
                        </Link>
                        {item.subItems && (
                          <ul className="dropdown-menu dropdown-menu-indent-sm no-border-radius">
                            {item.subItems.map((subItem, subIndex) => (
                              <li key={subIndex}>
                                <Link className="fw-semibolder " href={subItem.href}>{subItem.label}</Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                </li>
                <li >
                  <Link className="fw-semibolder "  to="/services"> Services </Link>
                </li>
                <li className="dropdown" data-animation="fadeIn">
                  <Link
                    to='/projets'
                  className="dropdown-toggle fw-semibolder " data-toggle="dropdown"
                  >
                    Projects
                  </Link>
                  <ul className="dropdown-menu no-border-radius">
                    {features.map((menu, index) => (
                      <li
                        key={index}
                        className="dropdown dropdown-right dropdown-parent"
                      >
                        <Link className="sub-marker fw-semibolder " to={menu.path}>
                          {menu.title}
                        </Link>
                      
                      </li>
                    ))}
                  </ul>
                </li>

                <li>
                  <Link to="/team" className="fw-semibolder "> Équipes </Link>
                </li>
                <li className="dropdown">
                  <Link
                    className="dropdown-toggle fw-semibolder "
                    to="/blog"
                    // role="button"
                    // data-bs-toggle="dropdown"
                    // aria-expanded="false"
                  >
                    Blog & actualités
                  </Link>
                  {/* <ul className="dropdown-menu no-border-radius">
                    {menuItems.map((item, index) => (
                      <li key={index}>
                        <Link className="dropdown-item fw-semibolder " to={item.path}>
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul> */}
                </li>
                {/* Portfolio Dropdown */}
                {/* <li className="dropdown" data-animation="fadeIn">
                  <Link className="dropdown-toggle" data-toggle="dropdown">
                    Portfolio
                  </Link>
                  <ul className="dropdown-menu no-border-radius">
                    {portfolioMenuItems.map((item, index) => (
                      <li
                        key={index}
                        className={
                          item.subItems
                            ? "dropdown dropdown-left dropdown-parent"
                            : ""
                        }
                      >
                        <Link className="sub-marker" href="#">
                          {item.label}
                          {item.subItems && (
                            <i className="waituk-icon-ios-more icn-right"></i>
                          )}
                        </Link>
                        {item.subItems && (
                          <ul className="dropdown-menu dropdown-menu-indent-sm no-border-radius">
                            {item.subItems.map((subItem, subIndex) => (
                              <li key={subIndex}>
                                <Link href={subItem.href}>{subItem.label}</Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                </li> */}
                {/* <li className="dropdown dropdown-full-width-g">
                  <Link
                    className="dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Elements
                  </Link>
                  <div className="dropdown-menu no-border-radius no-padding">
                    <div className="row row-autoheight no-gutters">
                      {submenuItems.map((submenu, index) => (
                        <div
                          className="col-lg-3 col-autoheight clearfix"
                          key={index}
                        >
                          <div className="widget-default clearfix">
                            <ul className="s-list s-list-pl s-list-mb-10 no-padding">
                              {submenu.items.map((item, idx) => (
                                <li key={idx}>
                                  <Link href={item.path}>
                                    <i className={item.icon}></i> {item.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </li> */}
               
               
                

                <li>
                  <Link className="fw-semibolder " to='/contact'> Contact </Link>
                </li>
               
              </ul>
            </div>
           
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
