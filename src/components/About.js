import React from "react";
import "./about.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  useGSAP(() => {
    // Animate text content from left
    gsap.from(".division_2 .flex_content", {
      x: -100,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: "#about",
        start: "top 70%",
        toggleActions: "play none none none",
      },
    });

    // Animate image from right
    gsap.from(".division_2 .rounded-2xl", {
      y: 100,
      opacity: 0,
      duration: 1.5,
      ease: "power3.out",
      scrollTrigger: {
        trigger: "#about",
        start: "top 70%",
        toggleActions: "play none none none",
      },
    });
  });

  return (
    <section id="about" className="division_2">
      {/* Left content */}
      <div className="flex_content">
        <div className="title_header">
          <h2 className="title medium">
            About Our <span id="aboutsocity">Society</span>
          </h2>
          <p>
            At <strong>Vidyashram Public School</strong>, we believe in
            nurturing every child’s potential by blending{" "}
            <strong>ancient values</strong> with the{" "}
            <strong>demands of modern education.</strong> We strive to create a
            disciplined, safe, and engaging learning environment where students
            become <strong>responsible, respectful, and resourceful</strong>{" "}
            individuals.
            <br />
            We invite you to be an active part of this journey — your
            involvement plays a vital role in your child’s development.
            Together, we will shape confident leaders, strong thinkers, and
            compassionate citizens of tomorrow.
          </p>
        </div>
      </div>

      {/* Right image */}
  
        <div className="rounded-2xl">
          <img className="rounded" src="/assets/about.webp" alt="About" />
        </div>
    </section>
  );
}
