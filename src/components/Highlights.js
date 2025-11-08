import React, { useEffect, useState } from "react";
import "./Highlights.css";

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
    { icon: "🏫", number: 35, text: "Years of Glorious Legacy" },
    { icon: "🎓", number: 10000, text: "Proud Alumni" },
    { icon: "🏆", number: 10000, text: "Students" },
    { icon: "🏠", number: 10000, text: "Teachers" },
  ];

  // === Animated Counter Hook ===
  const [counts, setCounts] = useState(highlights.map(() => 0));

  useEffect(() => {
    const duration = 2000; // animation duration (ms)
    const startTime = performance.now();

    function animate(time) {
      const progress = Math.min((time - startTime) / duration, 1);

      const newCounts = highlights.map((item, i) =>
        Math.floor(item.number * progress)
      );

      setCounts(newCounts);

      if (progress < 1) requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);
  }, []); // run once on mount

  return (
    <section className="highlights-section"  style={{ backgroundImage: "url('/assets/bg-2.jpg')" }}>
      <hr className="hr" />
      <h2>Our Highlights</h2>

      <div className="highlights-container">
        {highlights.map((item, i) => (
          <div key={i} className="highlight-card">
            <span className="icon">{item.icon}</span>
            <h3 className="number">
              {counts[i].toLocaleString()}+
            </h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>

      <hr className="hr" />
      {/* <div className="countdown">
        <h4>Countdown to Event:</h4>
        <p>
          {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
        </p>
      </div> */}
    </section>
  );
}
