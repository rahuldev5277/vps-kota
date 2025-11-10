import React, { useState, useEffect, useRef } from "react";
import "./Infrastructure.css";

const Infrastructure = () => {
  const images = [
    "/assets/about.webp",
    "/assets/art.webp",
    "/assets/arts.webp",
    "/assets/biolab.webp",
    "/assets/chemistrylab.webp",
    "/assets/computerlab.webp",
    "/assets/geographylab.webp",
    "/assets/lab.webp",
    "/assets/clab.webp",
  ];

  // Group images in sets of 3
  const slides = [];
  for (let i = 0; i < images.length; i += 3) {
    slides.push(images.slice(i, i + 3));
  }

  // Clone first slide for seamless loop
  const extendedSlides = [...slides, slides[0]];

  const [currentSlide, setCurrentSlide] = useState(0);
  const trackRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => prev + 1);
    }, 3000); // every 3s

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (currentSlide === extendedSlides.length - 1) {
      // When reaching the cloned slide
      const timeout = setTimeout(() => {
        // Disable transition temporarily
        trackRef.current.style.transition = "none";
        setCurrentSlide(0);

        // Re-enable transition after a short delay
        setTimeout(() => {
          trackRef.current.style.transition = "transform 0.8s ease-in-out";
        }, 50);
      }, 800); // Wait for transition to finish

      return () => clearTimeout(timeout);
    }
  }, [currentSlide, extendedSlides.length]);

  return (
    <div className="divisions division_3 padding_2x">
      <hr className="hr" />
      <section className="title_header center_title">
        <h1 className="title">Infrastructure</h1>
        <div className="lineinfra"></div>
      </section>

      <section className="carousel-container">
        <div
          ref={trackRef}
          className="carousel-track"
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
            transition: "transform 0.8s ease-in-out",
          }}
        >
          {extendedSlides.map((group, index) => (
            <div className="carousel-slide" key={index}>
              {group.map((img, i) => (
                <div className="card" key={i}>
                  <img src={img} alt={`Slide ${index + 1}`} />
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
      <hr className="hr" />
    </div>
  );
};

export default Infrastructure;
