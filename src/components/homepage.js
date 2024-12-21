import React, { useRef } from "react";
import "./../style/homepage.css";

const Homepage = () => {
  const galleryRef = useRef(null); // Reference for the gallery section

  const handleScroll = (yOffsetDesktop, yOffsetMobile) => {
    const yOffset = window.innerWidth <= 768  ? yOffsetMobile : yOffsetDesktop; // Adjust the offset based on screen width
    const yPosition = galleryRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: yPosition, behavior: "smooth" });
  };

  return (
    <div className="homepage">
      {/* Hero Section */}
      <header className="hero-section">
        <nav className="navbar">
          <button className="nav-button" onClick={() => handleScroll(43, 43)}>Artwork</button>
          <button className="nav-button" onClick={() => handleScroll(1130, 3350)}>Shop</button>
          <button className="nav-button" onClick={() => handleScroll(1750, 5700)}>Blog</button>
          <button className="nav-button" onClick={() => handleScroll(2340, 7400)}>Contact</button>
        </nav>
        <div className="hero-content">
          <h1 className="hero-title">Welcome to My Art Portfolio</h1>
          <p>Explore my world of creativity and inspiration</p>
          <button className="cta-button" onClick={() => handleScroll(650, 2050)}>View Gallery</button>
        </div>
      </header>

      {/* About Section */}
      <section className="about-section">
      <div className="background-image left-image"></div>
      <div className="background-image right-image"></div>

      <div className="content">
        <h2>About Me</h2>
        <p>
          Art isn't just my passion; it's my life. <br /> I create mesmerizing,
          one-of-a-kind pieces that blend tradition with innovation,
          capturing stories and emotions in every stroke. <br /> Join me on this 
          creative journey and discover the magic of art.
        </p>
        <h6>
          <strong>Email:</strong> Vishalkoli1402@gmail.com<br />
          <strong>Mobile:</strong> 866838****
        </h6>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery-preview" ref={galleryRef}>
        <h2>Featured Artworks</h2>
        <div className="art-grid">
          {["A1.jpg", "A2.jpg", "A3.jpg", "A4.jpg"].map((image, index) => (
            <div className="art-item" key={index}>
              <img src={image} alt={`Art ${index + 1}`} className="artwork-image" />
              <div className="image-overlay">
                <h3 className="image-title">{`Art ${index + 1}`}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Homepage;
