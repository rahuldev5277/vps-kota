import React from "react";
import "./Infrastructure.css";

const Infrastructure = () => {
  const images = [
    "/assets/1.webp",
    "/assets/2.webp",
    "/assets/3.webp",
    "/assets/4.webp",
    "/assets/3.webp",
    "/assets/4.webp",
  ];

  return (
    <div className="divisions padding_2x">
      <section className="gallery center_title">
        <h1 className="title">Gallery</h1>
        <div className="lineinfra"></div>
      </section>

      <div className="custom-gallery">
        <div className="item medium">
          <img src={images[0]} alt="gallery" />
        </div>
        <div className="item medium">
          <img src={images[1]} alt="gallery" />
        </div>
        <div className="item small">
          <img src={images[2]} alt="gallery" />
        </div>
        <div className="item medium">
          <img src={images[3]} alt="gallery" />
        </div>
        <div className="item small">
          <img src={images[4]} alt="gallery" />
        </div>
        <div className="item medium">
          <img src={images[5]} alt="gallery" />
        </div>
      </div>
    </div>
  );
};

export default Infrastructure;
