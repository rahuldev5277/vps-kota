import React, { useState } from "react";
import "./header.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Header() {
  const [formData, setFormData] = useState({
    student_name: "",
    father_name: "",
    contact: "",
    class: "",
    previous_school_name: "",
    address: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  // Contact error state
  const [error, setError] = useState("");

  // Animation
  useGSAP(() => {
    gsap.from(".section1heading", { opacity: 0, y: -100, duration: 1 });
    gsap.from(".section1form", { opacity: 0, x: 100, duration: 1.2 });
    gsap.from(".section1boxs", { y: 100, duration: 1, stagger: 0.3 });
  }, []);

  // Handle Input with Validation
  const handleChange = (e) => {
    const { name, value } = e.target;

    // CONTACT VALIDATION – only 10 digits allowed
    if (name === "contact") {
      if (/^\d{0,10}$/.test(value)) {
        setFormData({ ...formData, [name]: value });

        // remove error when valid
        if (value.length === 10) {
          setError("");
        }
      }
      return;
    }

    setFormData({ ...formData, [name]: value });
  };

  // Submit Function
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prevent submit if contact not valid
    if (formData.contact.length !== 10) {
      setError("Please enter a valid 10-digit contact number.");
      return;
    }

    const formdata = new FormData();
    formdata.append("student_name", formData.student_name);
    formdata.append("father_name", formData.father_name);
    formdata.append("contact", formData.contact);
    formdata.append("class", formData.class);
    formdata.append("school_name", "");
    formdata.append("previous_school_name", formData.previous_school_name);
    formdata.append("address", formData.address);

    try {
      const response = await fetch(
        "https://moerp.modevcloud.com/index.php/api/Enquiries_api/saveenquiry",
        {
          method: "POST",
          body: formdata,
        }
      );

      const result = await response.json();
      console.log("API Response:", result);

      // Show Thank You message
      setIsSubmitted(true);

      // Reset form
      setFormData({
        student_name: "",
        father_name: "",
        contact: "",
        class: "",
        previous_school_name: "",
        address: "",
      });

      // Hide thankyou after 12 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);

    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong!");
    }
  };

  return (
    <>
      {/* ==== HERO SECTION ==== */}
      <div className="section1">
        <div className="bannerimg">
          <img src="/assets/banner.png" alt="Banner" />

          <div className="section1heading">
            <h1>
              Welcome to <br />
              <em>Vidyashram</em> <span>Public School</span>
            </h1>
         
          </div>

          {/* ==== FORM SECTION ==== */}
          <div className="section1form">

            {/* Toggle Thank You & Form */}
            {isSubmitted ? (
              <div className="thankyou-box text-center max-w-md mx-auto p-4">
                <h2 className="text-2xl font-semibold mb-3">🎉 Thank You!</h2>
                <p className="text-lg leading-relaxed">
                  Thank you for joining <span className="font-semibold">Vidyasram School! </span>
                  We have received your admission enquiry.  
                  Our team will contact you shortly.
                </p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <h2>Admission Enquiry</h2> 

                <div className="field-row">
                  <div className="field">
                    <label>Student Name*</label>
                    <input
                      type="text"
                      name="student_name"
                      placeholder="Student Name"
                      value={formData.student_name}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="field">
                    <label>Father's / Mother's Name*</label>
                    <input
                      type="text"
                      name="father_name"
                      placeholder="Father's / Mother's Name"
                      value={formData.father_name}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="field-row">
                  <div className="field">
                    <label>Contact No.*</label>
                    <input
                      type="tel"
                      name="contact"
                      placeholder="Contact No."
                      value={formData.contact}
                      onChange={handleChange}
                      maxLength="10"
                    />

                    {/* ERROR MESSAGE */}
                    {error && (
                      <p className="text-red-500 text-sm mt-1">{error}</p>
                    )}
                  </div>

                  <div className="field">
                    <label>Admission in Class*</label>
                    <select
                      name="class"
                      value={formData.class}
                      onChange={handleChange}
                    >
                      <option value="">Select Class</option>
                      <option value="I">Class I</option>
                      <option value="II">Class II</option>
                      <option value="III">Class III</option>
                      <option value="IV">Class IV</option>
                      <option value="V">Class V</option>
                      <option value="VI">Class VI</option>
                      <option value="VII">Class VII</option>
                      <option value="VIII">Class VIII</option>
                      <option value="IX">Class IX</option>
                      <option value="X">Class X</option>
                      <option value="XI">Class XI</option>
                      {/* <option value="XII">Class XII</option> */}
                    </select>
                  </div>
                </div>

                <div className="field-row">
                  <div className="field">
                    <label>Previous School*</label>
                    <input
                      type="text"
                      name="previous_school_name"
                      placeholder="Previous School"
                      value={formData.previous_school_name}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="field-row">
                  <div className="field">
                    <label>Address*</label>
                    <textarea
                      type="text"
                      name="address"
                      placeholder="Address"
                      value={formData.address}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <button type="submit" className="btn btn_3">
                  Enquiry Now
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* ==== BOX SECTION ==== */}
      <div className="section1boxs">
        <div className="box1">
          <h2 className="box1title">Holistic Learning</h2>
           <p> The prospective parents/guardians should first register their ward for the class in which admission is desired. </p>
        </div>

        <div className="box2">
          <h2 className="box2title">Ready for the Future</h2>
          <p> Vidyashram Public School is a center of excellence dedicated to nurturing young minds with knowledge, discipline, and values. </p>
        </div>

        <div className="box3">
          <h2 className="box3title">Collaborative Growth</h2>
          <p> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
        </div>
      </div>
    </>
  );
}
