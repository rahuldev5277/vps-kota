import React from "react";
import "./admission.css"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Admission() {

useGSAP(() => {
  gsap.from(".admission_card", {
    scale: 0.7,
    opacity: 0,
    duration: 1,
    delay: 0.1,
    ease: "back.out(1.7)",
    scrollTrigger: {
      trigger: ".admission_section",
      start: "top 75%",
    },
    onComplete: () => {
      gsap.set(".admission_card", { clearProps: "transform" });
    }
  });
});



  const features = [
    { img: "https://cdn-icons-png.flaticon.com/512/201/201623.png", title: "Innovative teaching methods" },
    { img: "https://cdn-icons-png.flaticon.com/512/194/194938.png", title: "Parent participation" },
    { img: "https://cdn-icons-png.flaticon.com/512/3437/3437364.png", title: "Interactive S.P.A." },
    { img: "https://cdn-icons-png.flaticon.com/512/2906/2906664.png", title: "Nature-based activities" },
    { img: "https://cdn-icons-png.flaticon.com/512/2721/2721292.png", title: "Tech-enabled fun-based learning" },
  ];

  return (
    <section className="admission_section">
        <h1>Admission Process</h1>
        <div className="admissionline"></div>
      <div className="admission_container">
        {features.map((item, index) => (
          <div className="admission_card" key={index}>
            <img src={item.img} alt={item.title} className="admission_icon" />
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
