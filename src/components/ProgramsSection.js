import React, { useRef } from "react";
import "./ProgramsSection.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const programs = [
  {
    title: "Pre-Primary",
    description:
      "After registration, there will be no entrance test and interview for admission in Nursery, class L.K.G., and class H.K.G.",
    image: "/assets/kidsimg.jpg",
    bgColor: "#e7d8d2",
  },
  {
    title: "Primary",
    description:
      "After registration, there will be an entrance test and interview for the students seeking admissions in class I to class IX.",
    image: "/assets/geographylab.webp",
    bgColor: "#d6c6ac",
  },
  {
    title: "Middle & Senior",
    description:
      "After registration, admission in classes X & XI is as per the rules and guidelines of C.B.S.E. subject to the availability of seats.",
    image: "/assets/physicslab.webp",
    bgColor: "#a3b1c0ff",
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
    <h2 className="section-title">Our  <span>Learning</span> Programs</h2>
    <div className="learningline"></div>
    <p className="section-subtitle">Carefully designed programs to nurture every stage of your child’s growth.</p>

   <div className="programs-grid">
  {programs.map((item, index) => (
    <div
      key={index}
      className="program-card upgraded-card"
      style={{ backgroundColor: item.bgColor }}
    >
      <h3 className="program-title">{item.title}</h3>

      <div className="divider-line"></div>

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
