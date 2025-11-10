import React, { useRef } from "react";
import "./ProgramsSection.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const programs = [
  {
    title: "Pre",
    age: "Age 2–3 years",
    description: "The program is designed around play and caters to the development of Physical and Socio-Emotional Skills...",
    image: "/assets/about.webp",
    bgColor: "#cfd8ff",
  },
  {
    title: "Primary",
    age: "Age 3–4 years",
    description: "The program is designed to give children a strong foundation of inquiry-based learning through play...",
    image: "/assets/geographylab.webp",
    bgColor: "#fff9b3",
  },
  {
    title: "Middle & Senior",
    age: "Age 5–11 years",
    description: "The program is infused with activities that help children in foundational literacy and numeracy...",
    image: "/assets/arts.webp",
    bgColor: "#ffe1b3",
  },
];

export default function ProgramsSection() {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      // Title bounce animation
        gsap.from(".section-title, .section-subtitle", {
        opacity: 0,
        y: 100,
        duration: 1.5,
        delay: 1.6,
        scrollTrigger: {
          trigger: ".programs-section",
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      });


      // Animate each program card individually
      const cards = gsap.utils.toArray(".program-card");
      cards.forEach((card, i) => {
        gsap.from(card, {
          opacity: 0,
          y: 100,
          duration: 1.2,
          ease: "bounce.out",
          delay: i * 0.2, // nice stagger effect
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        });
      });
    },
    { scope: sectionRef } // makes sure it runs only inside this component
  );

  return (
    <>

    <section className="programs-section">
    <h2 className="section-title">Our Early <span>Learning</span> Programs</h2>
    <p className="section-subtitle">
    Carefully designed programs to nurture every stage of your child’s growth.
    </p>

    <div className="programs-grid">
    {programs.map((item, index) => (
    <div key={index} className="program-card" style={{ backgroundColor: item.bgColor }}>
    <h3 className="program-title">{item.title}</h3>
    <p className="program-age">({item.age})</p>
    <p className="program-desc">{item.description}</p>
    <div className="program-image">
    <img src={item.image} alt={item.title} />
    </div>
    </div>
    ))}
    </div>
    </section>

    </>
  );
}
