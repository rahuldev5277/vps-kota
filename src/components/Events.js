import React from 'react'
import "../App.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Events() {
    
  useGSAP(() => {
    
   

  });
 

  return (
    <div>
      {/* <!--division_3--> */}
    <div id='event' className="divisions division_3 padding_2x">
      <section className="title_header center_title">
        <h1 id = "newstitle" className="title">News & Events</h1>
        <span className="bar"></span>
      </section>

      <section className="news-container">
        <div className="news-grid">
          <div className="card">
            <img src="/assets/1.webp" alt="Children’s voice" />
            <h3>Children’s Voice, Society’s Solution</h3>
            <p>
              Students of Vidyashram School highlighted poor road conditions
              (Borkhera to Naya Nohra) to the Kota District Collector
              through 200 letters.
            </p>
          </div>

          <div className="card">
            <img src="/assets/2.webp" alt="GK Competition" />
            <h3>General Knowledge Competition “भारत को जानो”</h3>
            <p>
              Under the aegis of Bharat Vikas Parishad, a GK competition
              “भारत को जानो” was held on 29th August 2025 in the school
              premises.
            </p>
          </div>

          <div className="card">
            <img src="/assets/3.webp" alt="Sports Day" />
            <h3>National Sports Day Celebration</h3>
            <p>
              On 29th August 2025, students actively participated in various
              sports events organized in the school premises.
            </p>
          </div>

          <div className="card">
            <img src="/assets/4.webp" alt="Clay Activity" />
            <h3>Clay Activity</h3>
            <p>
              Clay activities offer emotional benefits and provide a calming,
              creative outlet for young learners.
            </p>
          </div>
        </div>
      </section>
    </div>
    </div>
  )
}
