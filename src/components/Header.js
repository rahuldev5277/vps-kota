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

},[])

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
              <em>Vidyashram</em> <span>Public School</span>
            </h1>
          </div>

          {/* ==== CONTACT FORM ==== */}
          <div className="section1form">
            <h2>Admission Enquiry</h2>
            <form className="contact-form">

              <div className="field-row">
              <div className="field">
              <label>Student Name<span className="required">*</span></label>
              <input type="text" name="Student Name" placeholder="Student Name"  />
                </div>
                <div className="field">
                  <label> Father's Name<span className="required">*</span></label>
                  <input type="text" name="studentLastName" placeholder="Father Name"  />
                </div>
              </div>

              <div className="field-row">

                <div className="field">
                <label> Contact No. <span className="required">*</span></label>
                <input type="tel" name="studentPhone" placeholder="Contact Number" />
                </div>

                <div className="field">
                <label> Admission in Class <span className="required">*</span></label>
                <input type="text" name="Class" placeholder="Class" />
                </div>
              
              
              </div>


              <div className="field-row">
                  <div className="field"><label> Previous School<span className="required">*</span></label>
                  <input type="text" name="Previous School" placeholder="Previous School Name" />
                </div>
              </div>

              <div className="field-row">
                <div className="field">
                  <label>Address <span className="required">*</span></label>
                  <input type="text" name="studentAddress" placeholder="Enter Address" />
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
          <h2 className="box1title">Holistic Learning</h2>
          <p>
            We go beyond textbooks, focusing on leadership, relationships, values, and life skills that prepare students for the real world.
          </p>
        </div>

        <div className="box2">
          <h2 className="box2title">Ready for the Future</h2>
          <p>
           Our philosophy blends timeless traditions with modern education to shape balanced individuals ready for any challenge.
          </p>
        </div>

        <div className="box3">
          <h2 className="box3title">Collaborative Growth</h2>
          <p>
           We believe education is a partnership between school, family, and the community. Your active involvement helps your child.
          </p>
        </div>
      </div>
    </>
  );
}

  