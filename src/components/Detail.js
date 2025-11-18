import React from 'react'
import "./detail.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Detail() {

     useGSAP(() => {
     
      gsap.from("#detailsballs", {
      x: -100,
      opacity: 0,
      duration: 1.5,
      delay: 0.70,
      stagger: 0.3,
      scrollTrigger: {
        trigger: ".division_4", 
        start: "top 70%", 
        toggleActions: "play none none none",
      },
    });

  
    },
   
  );

  return (

    <>
    
    {/* <!--division_4--> */}
    <div className=" division_4">

    <div className="title_header">
    <h2 className="detailtitle">We promise best future for your kids</h2>
    <div className='detailline'></div>
    <p>At Vidyashram Public School, we believe that meaningful learning goes beyond books and layouts — our focus is on creating engaging and thoughtful experiences that inspire every student.</p>
    </div>

    <div id='detailsballs' className="cards">
    <span className="ball"></span>
    <span className="ball"></span>
    <span className="ball"></span>
    <span className="ball"></span>

    <section className="fixed_flex">

    <figure  className="flex_content">
    <img src="./assets/detailimg1.webp" alt=""  />
    </figure>

    <figure className="flex_content">
    <img src="./assets/detailimg2.webp" alt=""  />
    </figure>

    <figure className="flex_content">
    <img src="./assets/detailimg4.webp" alt=""  />
    </figure>

    <figure className="flex_content">
    <img src="./assets/detailimg5.jpg" alt=""  />
    </figure>

    </section>
    </div>

    </div>
  
    </>
  )
}
