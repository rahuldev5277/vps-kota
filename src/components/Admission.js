import React from "react";
import "./admission.css";
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
      stagger: 0.2,
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
    {
      img: "https://cdn-icons-png.flaticon.com/512/1828/1828817.png",
      title: "REGISTER",
      desc: "Complete the registration process to get started with your school admission and manage your details easily."
    },
    {
      img: "https://cdn-icons-png.flaticon.com/512/747/747376.png",
      title: "CREATE CHILD'S PROFILE",
      desc: "Fill in the details to create your child's profile and proceed with the school admission process."
    },
    {
      img: "https://cdn-icons-png.flaticon.com/512/2921/2921222.png",
      title: "FILL APPLICATION FORM",
      desc: "Complete the application form with accurate details to proceed with your child's admission process."
    },
    {
      img: "https://cdn-icons-png.flaticon.com/512/1828/1828859.png",
      title: "TRACK APPLICATION FORM",
      desc: "Monitor the status of your application form to stay updated on your child's admission progress."
    }
  ];

  return (
    <section className="admission_section">
      <h1>Admission Process</h1>
      <div className="admissionline"></div>

      <div className="admission_container">
        {features.map((item, index) => (
          <div className="admission_card" key={index}>
            <img src={item.img} alt={item.title} className="admission_icon" />
            <h2>{item.title}</h2>
            <p className="admission_desc">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
