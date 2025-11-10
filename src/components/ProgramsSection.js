import React from "react";
import "./ProgramsSection.css";

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
  // {
  //   title: "Senior",
  //   age: "Age 5–6 years",
  //   description:
  //     "The program ensures that children are now able to read and write fluently and are strong in numerical skills. Children engage with science and technology in a play infused manner and are confident communicators, thinkers and creators.",
  //   image: "/images/senior.jpg",
  //   bgColor: "#b3d4ff",
  // },
];

export default function ProgramsSection() {
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
