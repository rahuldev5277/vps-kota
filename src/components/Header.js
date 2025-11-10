import React from "react";
import "../App.css";
import "./header.css"
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

export default function Header() {
    
useGSAP(() => {

  const tl = gsap.timeline({ defaults: { ease: "power2.out", duration: 1 } });

   tl.fromTo(".flex",
    { backgroundSize: "110%" },  // start zoomed in
    {
      backgroundSize: "100%",    // zoom out to normal
      duration: 2.5,
      ease: "power2.out",
    }
  );

  // 1️⃣ Animate heading
  tl.from("#text1", { y: -50, opacity: 0 });

  // 2️⃣ Animate contact form container
  tl.from(".contact-form-container", { opacity: 0, y: 100, duration: 1.2, ease: "power3.out" }, "-=0.3");

//   // 3️⃣ Animate form elements one by one
//   tl.from(".contact-form label, .contact-form input, .contact-form textarea, .contact-form button", {
//     opacity: 0,
//     y: 20,
//     stagger: 0.2,
//   });

  // 4️⃣ Animate boxes (one by one)
  tl.from("#box1", { opacity: 0, y: -100, ease: "power3.out" })
    .from("#box2", { opacity: 0, y: -100, ease: "power3.out" }, "-=0.5") // start slightly earlier
    .from("#box3", { opacity: 0, y: -100, ease: "power3.out" }, "-=0.5");


});


  return (

    <div>

    {/* <!--HEADER--> */}
    <header id="contact" className="flex" style={{ backgroundImage: "url('/assets/banner.png')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", color: "white", }}>   
    <article>
    <h1 id="text1" className="title big">Welcome to <br/><em id="text1em">Vidyashram</em> Public School</h1>
    </article>

    {/* ENQUERY FORM */}
    <aside className="contact-form-container">
    <h2>Contact Us</h2>
    <form className="contact-form">
    <div className="field-row">
    <div className="field">
    <label>Student First Name <span className="required">*</span></label>
    <input type="text" name="studentFirstName" placeholder="First Name" required />
    </div>
    <div className="field">
    <label>Last Name <span className="required">*</span></label>
    <input type="text" name="studentLastName" placeholder="Last Name" required />
    </div>
    </div>

    <div className="field-row">
    <div className="field">
    <label>State <span className="required">*</span></label>
    <input type="state" name="studentstate" placeholder="State" required />
    </div>
    <div className="field">
    <label>City <span className="required">*</span></label>
    <input type="city" name="studentcity" placeholder="City" required />
    </div>
    </div>

    <div className="field-row">
    <div className="field">
    <label>School Name <span className="required">*</span></label>
    <input type="School Name" name="School Name" placeholder="School Name" required />
    </div>
    <div className="field">
    <label>Class <span className="required">*</span></label>
    <input type="Class" name="Class" placeholder="Class" required />
    </div>
    </div>

    <div className="field-row">
    <div className="field">
    <label>Email <span className="required">*</span></label>
    <input type="email" name="studentEmail" placeholder="Email" required />
    </div>
    <div className="field">
    <label>Phone <span className="required">*</span></label>
    <input type="tel" name="studentPhone" placeholder="Phone Number" required />
    </div>
    </div>

    <button type="submit" className="btn btn_3">Enquery Now</button>
    </form>
    </aside>


    {/* three color box secton */}
    <section className="flex">

    <aside id="box1" className="padding_1x">
    <h2 className="sub_title">Admission</h2>
    <p>The prospective parents/guardians should first register their ward for the class in which admission is desired.</p>
    </aside>

    <aside id="box2" className="padding_1x">
    <h2 className="sub_title">Prospectus</h2>
    <p>Vidyashram Public School is a center of excellence dedicated to nurturing young minds with knowledge, discipline, and values.</p>
    </aside>

    <aside id="box3" className="padding_1x">
    <h2 className="sub_title">Features</h2>
    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
    </aside>

    </section>
    </header>
    </div>
  )
}
