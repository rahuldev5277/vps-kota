import React, { useEffect, useState } from "react";
import "./Highlights.css";

export default function Highlights() {
  // === Countdown Logic ===
  const targetDate = new Date("2026-03-01T00:00:00").getTime(); // Change date as needed
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

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

  const highlights = [
    {
      icon: "🏫",
      number: "35",
      text: "Years of Glorious Legacy",
    },
    {
      icon: "🎓",
      number: "10,000",
      text: "Proud Alumni",
    },
    {
      icon: "🏆",
      text: "Most Awarded School in City",
    },
    {
      icon: "🏠",
      text: "Day-cum Boarding School",
    },
  ];

  return (
    <section className="highlights-section">
      <div className="overlay"></div>

      <div className="content">
        <h2 className="title">Our Highlights</h2>
        <div className="underline"></div>
        <p className="subtitle">We are honored by</p>

        <div className="highlights-grid">
          {highlights.map((item, index) => (
            <div key={index} className="highlight-card">
              <div className="icon">{item.icon}</div>
              {item.number && <h3 className="number">{item.number}</h3>}
              <p className="text">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="countdown">
          <h3>Admissions Open Countdown</h3>
          <div className="timer">
            <div><span>{timeLeft.days}</span><small>Days</small></div>
            <div><span>{timeLeft.hours}</span><small>Hours</small></div>
            <div><span>{timeLeft.minutes}</span><small>Minutes</small></div>
            <div><span>{timeLeft.seconds}</span><small>Seconds</small></div>
          </div>
        </div>

        
      </div>
    </section>
  );
}
