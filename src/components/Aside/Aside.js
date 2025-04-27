import React from 'react'

const Aside = () => {
    const logos = [
        { id: 1, src: "/img/image7.png", alt: "Logo 1" },
        { id: 2, src: "/img/image9.png", alt: "Logo 2" },
        { id: 3, src: "/img/image10.jpg", alt: "Logo 3" },
        { id: 4, src: "/img/image11.jpg", alt: "Logo 4" },
        // { id: 5, src: "/img/logo-03.png", alt: "Logo 5" },   
      ];
  return (
    <aside className="content-block">
    <div className="container">
      <div className="logo-container">
        <div className="logo-slide d-flex justify-content-evenly align-items-center" id="waituk-owl-slide-4">
          {logos.map((logo) => (
            <div className="slide-item"  key={logo.id}>
              <img src={logo.src} alt={logo.alt} width={80} style={{objectFit:'cover'}} />
            </div>
          ))}
        </div>
      </div>
    </div>
  </aside>
  )
}

export default Aside