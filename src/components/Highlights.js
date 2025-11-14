import React, { useEffect, useState } from "react";
import "./Highlights.css";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Highlights() {
  // === Countdown Logic ===
  const targetDate = new Date("2026-03-01T00:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / (1000 * 60)) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  // === Highlights Data ===
  const highlights = [
    { icons: "🏫", number: 35, text: "Years of Glorious Legacy" },
    { icons: "🎓", number: 10000, text: "Proud Alumni" },
    { icons: "🏆", number: 10000, text: "Students" },
    { icons: "🏠", number: 10000, text: "Teachers" },
  ];

  const [counts, setCounts] = useState(highlights.map(() => 0));

  // === GSAP Counter Animation (FIXED) ===
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

    ScrollTrigger.refresh(); // Important
  }, []);

  return (
    <section
      className="highlights-section"
      style={{ backgroundImage: "url('/assets/bg-2.jpg')" }}
    >
      <hr className="hr" />
      <h2>Our Highlights</h2>

      <div className="highlights-container">
        {highlights.map((item, i) => (
          <div key={i} className="highlight-card">
            <span className="icons">{item.icons}</span>
            <h3 className="number">{counts[i].toLocaleString()}+</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>

      <hr className="hr" />
    </section>
  );
}
