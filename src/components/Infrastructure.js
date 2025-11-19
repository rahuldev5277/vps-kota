import React, { useState, useEffect, useRef, useCallback } from "react";
import "./Infrastructure.css";

const Infrastructure = () => {
  // Separate arrays for Sports and Cultural
  const sportsImages = [
    "./assets/activity1.webp",
    "./assets/activity2.webp",
    "./assets/activity3.webp",
    "./assets/activity4.webp",
    "./assets/activity5.webp",
  ];

  const culturalImages = [
    "./assets/cultural1.webp",
    "./assets/cultural2.webp",
    "./assets/cultural3.webp",
    "./assets/cultural4.webp",
    "./assets/activity5.webp",
  ];

  // Merge arrays for preview carousel
  const allImages = [...sportsImages, ...culturalImages];

  const [currentIndex, setCurrentIndex] = useState(null);
  const [galleryVisible, setGalleryVisible] = useState(false);

  const galleryRef = useRef(null);

  // -------------------------------------------------------------
  // WRAP next/prev functions in useCallback to fix ESLint warnings
  // -------------------------------------------------------------
  const nextImage = useCallback(
    (e) => {
      e.stopPropagation();
      setCurrentIndex((prev) => (prev + 1) % allImages.length);
    },
    [allImages.length]
  );

  const prevImage = useCallback(
    (e) => {
      e.stopPropagation();
      setCurrentIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
    },
    [allImages.length]
  );

  const closePreview = () => setCurrentIndex(null);

  // -------------------------------------------------------------
  // FIX 1: IntersectionObserver cleanup warning
  // -------------------------------------------------------------
  useEffect(() => {
    const ref = galleryRef.current; // store value to avoid ESLint warning

    const observer = new IntersectionObserver(
      ([entry]) => {
        setGalleryVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (ref) observer.observe(ref);

    return () => {
      if (ref) observer.unobserve(ref);
    };
  }, []);

  // -------------------------------------------------------------
  // FIX 2: Include nextImage, prevImage in dependencies
  // -------------------------------------------------------------
  useEffect(() => {
    const handleKey = (e) => {
      // Allow only when gallery section is visible
      if (!galleryVisible) return;

      if (e.key === "Escape") closePreview();
      if (e.key === "ArrowRight") nextImage(e);
      if (e.key === "ArrowLeft") prevImage(e);
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [galleryVisible, nextImage, prevImage]);

  return (
    <>
      <div className="gallerymainsection" ref={galleryRef}>
        <div className="gallertitle">
          <h1>Activity</h1>
          <div className="galleryline"></div>
        </div>

        <div className="diamondgallerysection">
          <div className="diamond-scroll-vertical">
            
            {/* SPORTS SECTION */}
            <div className="infraheading">
              <h2>Sports</h2>
            </div>

            <div className="firstcontainer">
              {sportsImages.map((img, i) => (
                <div className="diamond-gallery" key={`sports-${i}`}>
                  <div className="diamond" onClick={() => setCurrentIndex(i)}>
                    <img src={img} alt={`Sports ${i + 1}`} />
                  </div>
                </div>
              ))}
            </div>

            {/* CULTURAL SECTION */}
            <div className="infraheading">
              <h2>Cultural</h2>
            </div>

            <div className="firstcontainer">
              {culturalImages.map((img, i) => (
                <div className="diamond-gallery" key={`cultural-${i}`}>
                  <div
                    className="diamond"
                    onClick={() => setCurrentIndex(i + sportsImages.length)}
                  >
                    <img src={img} alt={`Cultural ${i + 1}`} />
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* ==== PREVIEW CAROUSEL ==== */}
      {currentIndex !== null && (
        <div className="previewOverlay" onClick={closePreview}>
          <div className="previewBox" onClick={(e) => e.stopPropagation()}>
            <img
              key={currentIndex}
              src={allImages[currentIndex]}
              alt="Preview"
              className="previewImg"
            />
            <button className="navBtn prevBtn" onClick={prevImage}>❮</button>
            <button className="navBtn nextBtn" onClick={nextImage}>❯</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Infrastructure;
