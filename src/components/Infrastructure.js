import React, { useState, useEffect } from "react";
import "./Infrastructure.css";

const Infrastructure = () => {
  // All images in your gallery
  const images = [
    "./assets/1.webp",
    "./assets/2.webp",
    "./assets/3.webp",
    "./assets/4.webp",
    "./assets/3.webp",
  ];

  const [currentIndex, setCurrentIndex] = useState(null);

  // Handle next and previous
  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // Close preview on outside click or ESC key
  const closePreview = () => setCurrentIndex(null);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") closePreview();
      if (e.key === "ArrowRight") nextImage(e);
      if (e.key === "ArrowLeft") prevImage(e);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  });

  return (
    <>
      <div className="gallerymainsection">
         <div className="gallertitle">
          <h1>Activity</h1>
          <div className="galleryline"></div>
        </div>

        <div className="diamondgallerysection">
          
          <div className="diamond-scroll-vertical">
            <div className="infraheading"><h2>Sports</h2></div>
            {/* FIRST CONTAINER */}
            <div className="firstcontainer">
           
              {images.map((img, i) => (
                <div className="diamond-gallery" key={i}>
                  <div
                    className="diamond"
                    onClick={() => setCurrentIndex(i)}
                  >
                    <img src={img} alt={`img${i + 1}`} />
                  </div>
                </div>
              ))}
            </div>

            <div className="infraheading"><h2>Cultural</h2></div>
            {/* SECOND CONTAINER */}
            <div className="firstcontainer">
            
              {images.map((img, i) => (
                <div className="diamond-gallery" key={`2-${i}`}>
                  <div
                    className="diamond"
                    onClick={() => setCurrentIndex(i)}
                  >
                    <img src={img} alt={`img${i + 1}`} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ==== SWEET PREVIEW CAROUSEL ==== */}
      {currentIndex !== null && (
        <div className="previewOverlay" onClick={closePreview}>
          <div className="previewBox" onClick={(e) => e.stopPropagation()}>
            <img
              key={currentIndex} // triggers animation
              src={images[currentIndex]}
              alt="Preview"
              className="previewImg"
            />

            {/* Navigation Arrows */}
            <button className="navBtn prevBtn" onClick={prevImage}>❮</button>
            <button className="navBtn nextBtn" onClick={nextImage}>❯</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Infrastructure;
