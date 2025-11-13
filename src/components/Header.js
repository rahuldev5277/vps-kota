import React from "react";
import "./header.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Header() {

useGSAP(() =>{

   gsap.from(".section1heading",{
    opacity:0,
    y: -100,
    duration: 1,
   })

   gsap.from(".section1form",{
    opacity:0,
    x: 100,
    duration: 1.2,
   })

    gsap.from(".section1boxs", {
      y: 100,
    duration: 1,
    stagger: 0.3,  
    });

})

  return (
    <>
      {/* ==== HERO SECTION ==== */}
      <div className="section1">
        
        <div className="bannerimg">
          <img src="/assets/banner.png" alt="Banner" />

          {/* Heading */}
          <div className="section1heading">
            <h1>
              Welcome to <br />
              <em>Vidyashram</em> Public School
            </h1>
          </div>

          {/* ==== CONTACT FORM ==== */}
          <div className="section1form">
            <h2>Contact Us</h2>
            <form className="contact-form">

              <div className="field-row">
              <div className="field">
              <label>First Name <span className="required">*</span></label>
                  <input type="text" name="studentFirstName" placeholder="First Name"  />
                </div>
                <div className="field">
                  <label>
                    Last Name <span className="required">*</span>
                  </label>
                  <input type="text" name="studentLastName" placeholder="Last Name"  />
                </div>
              </div>

              <div className="field-row">
                <div className="field">
                  <label>
                    State <span className="required">*</span>
                  </label>
                  <input type="text" name="studentState" placeholder="State" />
                </div>
                <div className="field">
                  <label>
                    City <span className="required">*</span>
                  </label>
                  <input type="text" name="studentCity" placeholder="City" />
                </div>
              </div>

              <div className="field-row">
                <div className="field">
                  <label>
                    School Name <span className="required">*</span>
                  </label>
                  <input type="text" name="schoolName" placeholder="School Name" />
                </div>
                <div className="field">
                  <label>
                    Class <span className="required">*</span>
                  </label>
                  <input type="text" name="studentClass" placeholder="Class" />
                </div>
              </div>

              <div className="field-row">
                <div className="field">
                  <label>
                    Email <span className="required">*</span>
                  </label>
                  <input type="email" name="studentEmail" placeholder="Email" />
                </div>
                <div className="field">
                  <label>
                    Phone <span className="required">*</span>
                  </label>
                  <input type="tel" name="studentPhone" placeholder="Phone Number" />
                </div>
              </div>

              <button type="submit" className="btn btn_3">Enquiry Now</button>
            </form>
            
          </div>
        </div>
      </div>

      {/* ==== BOX SECTION BELOW ==== */}
      <div className="section1boxs">
        <div className="box1">
          <h2 className="box1title">Admission</h2>
          <p>
            The prospective parents/guardians should first register their ward for the class in which admission is desired.
          </p>
        </div>

        <div className="box2">
          <h2 className="box2title">Prospectus</h2>
          <p>
            Vidyashram Public School is a center of excellence dedicated to nurturing young minds with knowledge, discipline, and values.
          </p>
        </div>

        <div className="box3">
          <h2 className="box3title">Features</h2>
          <p>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
          </p>
        </div>
      </div>
    </>
  );
}

  
    {/* <article>
    <h1 id="text1" className="title big">Welcome to <br/><em id="text1em">Vidyashram</em> Public School</h1>
    </article> */}

    {/* ENQUERY FORM
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
    </aside> */}


    {/* three color box secton
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

    </section> */}
    

 

  
  
