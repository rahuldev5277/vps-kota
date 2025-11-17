import React from "react";
import "./about.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  useGSAP(() => {
    // Animate text content from left
    gsap.from(".about_image_box", {
      x: -100,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".about_section",
        start: "top 70%",
        toggleActions: "play none none none",
      },
    });

    // Animate image from right
    gsap.from(".about_text_box", {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".about_section",
        start: "top 70%",
        toggleActions: "play none none none",
      },
    });
  });

  return (
    <>

      <div className="about_section">
        <div className="about_image_box">
          <img 
            src="./assets/bulding3.jpg" 
            alt="About" 
            className="about_image"
          />
        </div>

        <div className="about_text_box">
          <h3 className="about_small_title">About Our</h3>
          <h1 className="about_big_title">society</h1>

          <p className="about_paragraph">
              At <strong>Vidyashram Public School</strong>, we believe in nurturing
              every child’s potential by blending <strong>ancient values</strong> with
              the <strong>demands of modern education.</strong> We strive to create a
              disciplined, safe, and engaging learning environment where students
              become <strong>responsible, respectful, and resourceful     </strong> 
              individuals.
              <br/>
              We invite you to be an active part of this journey — your involvement plays a vital role in your child’s development.
          </p>
        </div>
      </div>

      


    </>
  );
}
