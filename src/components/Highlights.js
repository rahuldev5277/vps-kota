import React, { useEffect, useState } from "react";
import "./Highlights.css";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// ✅ Move highlights OUTSIDE component → dependency warning REMOVED
const highlights = [
  { icons: "🏫", number: 21, text: "Years of Glorious Legacy" },
  { icons: "🎓", number: 500, text: "Proud Alumni" },
  { icons: "🏆", number: 1000, text: "Students" },
  { icons: "🏠", number: 50, text: "Teachers" },
];

export default function Highlights() {
  const [counts, setCounts] = useState(highlights.map(() => 0));

  useEffect(() => {
    const counterObjects = [];

    highlights.forEach((item, index) => {
      const obj = { value: 0 };
      counterObjects.push(obj);

      gsap.to(obj, {
        value: item.number,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".highlights-section",
          start: "top 60%",
          once: true,
        },
        onUpdate: () => {
          setCounts((prev) => {
            const updated = [...prev];
            updated[index] = Math.floor(obj.value);
            return updated;
          });
        },
      });
    });

    ScrollTrigger.refresh();
  }, []);  // ✅ YES, keep this empty now

  return (
    <section
      className="highlights-section"
      style={{ backgroundImage: "url('/assets/bg-2.jpg')" }}
    >
      <h2>Our Highlights</h2>
      <div className="highlightline"></div>

      <div className="highlights-container">
        {highlights.map((item, i) => (
          <div key={i} className="highlight-card">
            <span className="icons">{item.icons}</span>
            <h3 className="number">{counts[i].toLocaleString()}+</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
