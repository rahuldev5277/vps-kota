import React, { useState } from "react";
import "./Testimonials.css";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = [
  {
    name: "Neha Verma",
    role: "Computer Science Student",
    message:
      "An amazing learning environment with excellent faculty and resources. The practical exposure helped me land my dream job in tech!",
    image: "/images/neha.jpg", // replace with your image
  },
  {
    name: "Rohit Singh",
    role: "Commerce Student",
    message:
      "The teachers are supportive and the school encourages us to think creatively. I’m grateful for my experience at Vidyashram.",
    image: "/images/rohit.jpg",
  },
  {
    name: "Aditi Sharma",
    role: "Arts Student",
    message:
      "Vidyashram Public School gave me the confidence to pursue my passion. The guidance I received here was invaluable.",
    image: "/images/aditi.jpg",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const total = testimonials.length;

  const prevTestimonial = () => {
    setIndex(index === 0 ? total - 1 : index - 1);
  };

  const nextTestimonial = () => {
    setIndex(index === total - 1 ? 0 : index + 1);
  };

  const { name, role, message, image } = testimonials[index];

  return (
    <section className="testimonials-section">
      <hr className="hr" />
      <h2 className="testimonials-title">What Our Students Say</h2>
      <div className="testimonials-subtitle">Hear from Our Successful Graduates</div>

      <div className="testimonial-wrapper">
        <button className="arrow-btn left" onClick={prevTestimonial}>
          <FaChevronLeft />
        </button>

        <div className="testimonial-card">
          <div className="testimonial-content">
            <div className="testimonial-header">
              <h3 className="student-name">{name}</h3>
              <p className="student-role">{role}</p>
            </div>
            <p className="testimonial-message">{message}</p>
            <div className="stars">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
          </div>

          <div className="testimonial-image">
            <img src={image} alt={name} />
          </div>
        </div>

        <button className="arrow-btn right" onClick={nextTestimonial}>
          <FaChevronRight />
        </button>
      </div>
        <hr className="hr" />
    </section>
  );
}
