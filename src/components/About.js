import React from 'react'
import "../App.css";   
import "./about.css"
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  return (
    <div>

    {/* <!--division_2--> */}
    <div id="about" className="divisions division_2 flex">

    <section className="flex_content padding_2x">
    <div className="title_header">
    <h2 className="title medium">About Our <span id='aboutsocity'>Society</span></h2>
    <p>At <strong>Vidyashram Public School</strong>, we believe in nurturing every child’s potential by blending <strong>ancient values</strong> with the <strong>demands of modern education.</strong> We strive to create a disciplined, safe, and engaging learning environment where students become <strong>responsible, respectful, and resourceful</strong> individuals.
    <br/>We invite you to be an active part of this journey — your involvement plays a vital role in your child’s development. Together, we will shape confident leaders, strong thinkers, and compassionate citizens of tomorrow. </p>
    </div>
    </section>

    <section className="flex_content padding_2x" id="event">
    <div className="rounded-2xl">
    <img className="rounded" src="/assets/about.webp" alt="image" />
    </div>
    </section>

    </div>

    </div>
  )
}
