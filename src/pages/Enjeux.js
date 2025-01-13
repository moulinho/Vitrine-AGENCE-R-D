import React from 'react'
import { Link } from "react-router";


const Enjeux = () => {
    const sections = [
        {
          type: "content",
          title: "Réduire la fracture numérique",
          description: `L'accès inégal aux technologies freine le développement équitable, en particulier en Afrique. CorreIA LLC agit pour combler cette fracture numérique en démocratisant l'accès aux outils et solutions numériques. Nous accompagnons les organisations et les communautés pour leur permettre de profiter pleinement des opportunités qu'offre l'ère numérique.`,
          extraClasses: "",
        },
        {
          type: "parallax",
          title: "Combler le manque de ressources en R&D",
          description: `De nombreuses organisations, notamment en Afrique, manquent de ressources et de compétences pour mener des projets de recherche et développement (R&D). En proposant des services externalisés et personnalisés en R&D, CorreIA LLC aide ces acteurs à surmonter leurs limites, stimulant ainsi leur capacité d’innovation et leurs compétitivités.`,
          extraClasses: "black-overlay-6 parallax",
        },
        {
          type: "content",
          title: "Relever les défis des changements climatiques",
          description: `Face à l’urgence climatique, CorreIA LLC s’engage à intégrer la durabilité dans tous ses projets. Nous développons des solutions innovantes qui réduisent l'empreinte écologique et encouragent des pratiques respectueuses de l'environnement. Notre objectif est de promouvoir une transformation durable qui répond aux enjeux environnementaux tout en soutenant le progrès économique et social.`,
          extraClasses: "bg-gray-light",
        },
        {
          type: "image",
          title: "Renforcer les Compétences et les Talents Locaux",
          description: `Le développement durable passe par l'humain. CorreIA LLC s'engage à investir dans la formation et l'accompagnement des talents locaux pour répondre aux besoins croissants en compétences technologiques et en innovation. En offrant des opportunités de renforcement des capacités, nous contribuons à bâtir une base solide de professionnels compétents, capables de relever les défis technologiques, économiques et environnementaux de demain.`,
          imageUrl: "img/big-01.jpg",
        },
      ];
    
      const contactInfo = [
        {
          icon: "waituk-icon-phone",
          title: "Call Us On",
          value: "977 985 1108896",
          link: "tel:9779851108896",
        },
        {
          icon: "waituk-icon-email",
          title: "Email Us At",
          value: "Email at Waituk.net",
          link: "mailto:waituk.net",
        },
        {
          icon: "waituk-icon-pin",
          title: "Visit Office",
          value: "707 Ive Corner - London",
        },
      ];
    
      const socialLinks = [
        { icon: "waituk-icon-facebook", link: "#" },
        { icon: "waituk-icon-twitter", link: "#" },
        { icon: "waituk-icon-google-plus", link: "#" },
        { icon: "waituk-icon-pinterest", link: "#" },
        { icon: "waituk-icon-dribbble", link: "#" },
      ];
    
  return (
    <main>
         {/* Visual Banner Section */}
         <section className="visual">
           <div
             className="visual-inner visual-banner-v22 dark-overlay parallax"
             data-stellar-background-ratio="0.55"
           >
             <div className="container">
               <div className="visual-text-large text-left visual-center">
                 <div className="visual-title mt-5">
                   <h1>
                   Nos Enjeux stratégiques face aux défis d'aujourd'hui et de demain                   </h1>
                 </div>
                 <p>
                 Nous sommes profondément engagés à relever les grands défis de notre époque. Conscients de l'impact des transformations technologiques, sociales et environnementales, nous mobilisons notre expertise pour offrir des solutions concrètes et durables.
                 </p>
                 <div className="breadcrumb-block">
                   <ol className="breadcrumb">
                     <li className="breadcrumb-item">
                       <a href="index-2.html">Home</a>
                     </li>
                     <li className="breadcrumb-item">
                       <a href="index-2.html">Notre Identité</a>
                     </li>
                     <li className="breadcrumb-item active">Enjeux</li>
                   </ol>
                 </div>
               </div>
             </div>
           </div>
         </section>
   
         {/* Main Content Wrapper */}
         <div className="content-wrapper">
           {sections.map((section, index) => {
             if (section.type === "content") {
               return (
                 <section
                   key={index}
                   className={`content-block ${section.extraClasses}`}
                 >
                   <div className="container">
                     <div className="demo-wrapper">
                       <div className="text-center element-heading">
                         <h3>{section.title}</h3>
                       </div>
                       <div className="description text-center">
                         <p>{section.description}</p>
                       </div>
                     </div>
                   </div>
                 </section>
               );
             } else if (section.type === "parallax") {
               return (
                 <section
                   key={index}
                   className={`content-block quotation-block ${section.extraClasses}`}
                   data-stellar-background-ratio="0.55"
                 >
                   <div className="container">
                     <div className="demo-wrapper">
                       <div className="text-center element-heading text-white">
                         <h3>{section.title}</h3>
                       </div>
                       <div className="description text-center text-white">
                         <p>{section.description}</p>
                       </div>
                     </div>
                   </div>
                 </section>
               );
             } else if (section.type === "image") {
               return (
                 <section
                   key={index}
                   id="work-section"
                   className="content-block work-block"
                 >
                   <div className="bg-stretch">
                     <img src={section.imageUrl} alt="Background"  className="cultiver" />
                   </div>
                   <div className="container">
                     <div className="demo-wrapper">
                       <div className="text-center element-heading">
                         <h3>{section.title}</h3>
                       </div>
                       <div className="description text-center">
                         <p>{section.description}</p>
                       </div>
                     </div>
                   </div>
                 </section>
               );
             }
             return null;
           })}
         </div>
   
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
     <div className="row text-left">
       {contactInfo.map((info, index) => (
         <div className="col-12 col-md-4 mb-3" key={index}>
           <div className="row align-items-center fw-bold">
             {/* Icon column with auto width */}
             <div className="col-auto">
               <span className={`social-network icon ${info.icon}`}></span>
             </div>
             {/* Text column takes remaining space */}
             <div className="col">
               <span >{info.title}</span> <br />
               {info.link ? (
                 <span>
                   <Link  to={info.link}>
                     {info.value}
                   </Link>
                 </span>
               ) : (
                 <span>{info.value}</span>
               )}
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
                   <a href={social.link}>
                     <span className={social.icon}></span>
                   </a>
                 </li>
               ))}
             </ul>
           </div>
         </div>
   
         {/* Footer Bottom */}
         {/* <div className="footer-bottom text-center">
           <div className="container">
             <p>Copyright 2016 - Roxine - Multi Purpose Theme by Waituk</p>
           </div>
         </div> */}
       </main>
  )
}

export default Enjeux