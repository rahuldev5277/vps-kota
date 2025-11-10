import React, { useRef } from "react";
import "./ProgramsSection.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const programs = [
  {
    title: "Pre",
    description:
      "The program is designed around play and caters to the development of Physical and Socio-Emotional Skills...",
    image: "/assets/about.webp",
    bgColor: "#ee4500",
  },
  {
    title: "Primary",
    description:
      "The program is designed to give children a strong foundation of inquiry-based learning through play...",
    image: "/assets/geographylab.webp",
    bgColor: "#f5ab35",
  },
  {
    title: "Middle & Senior",
    description:
      "The program is infused with activities that help children in foundational literacy and numeracy...",
    image: "/assets/arts.webp",
    bgColor: "#3399ff",
  },
];

export default function ProgramsSection() {
  const sectionRef = useRef(null);

  useGSAP(() => {
      // Animate title + subtitle
      gsap.from([".section-title", ".section-subtitle"], {
        opacity: 0,
        y: 60,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
          toggleActions: "play none none none",
          
        },
      });
      
      gsap.from(".programs-grid", {
      y: 100,
      opacity: 0,
      duration: 1.5,
      delay: 0.70,
      ease: "bounce.out", 
      stagger: 0.3,
      scrollTrigger: {
        trigger: ".programs-section", 
        start: "top 70%", 
        toggleActions: "play none none none",
      },
    });

  
    },
   
  );

  return (
    <>
    <section ref={sectionRef} className="programs-section">
    <h2 className="section-title">Our Early <span>Learning</span> Programs</h2>
    <div className="learningline"></div>
    <p className="section-subtitle">Carefully designed programs to nurture every stage of your child’s growth.</p>

    <div className="programs-grid">
    {programs.map((item, index) => (
    <div key={index} className="program-card" style={{ backgroundColor: item.bgColor }}>
    <h3 className="program-title">{item.title}</h3>
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
