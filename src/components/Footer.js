import React from "react";
import "./Footer.css";
import { FaFacebookF, FaInstagram} from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <div className="mainfootersection">

        {/* Principal's Message */}
        <div className="principal-card">
          <img src="./assets/principal.webp" alt="Principal" className="principal-img" />
          <div className="principal-text">
            <h3>Principal's Message</h3>
            <p>
              Dear Students, Parents, and Well-wishers,<br />
              It is a privilege to lead Vidyashram Public School, a CBSE co-educational institution committed to the motto <strong>“Soaring to Excellence.”</strong><br />
              Here, education goes beyond classrooms — we nurture every child's intellectual growth, character, and life skills.
            </p>
            <p>
              With over 15 years of experience as a Principal, I am proud to see our school evolve into a place where academic excellence meets skill education.
            </p>
          </div>
        </div>

        {/* Footer Row */}
        <div className="footer-row">

          {/* Left Logo Section */}
          <div className="footerlogo">
            <div className="footerimg">
              <img src="./assets/logo.png" alt="School Logo" />
            </div>
            <h2>Vidyashram <span>Public School</span></h2>
          </div>

          {/* Right Info Section */}
          <div className="footer-info">
            <p>💅 Vidya Vihar, Naya Nohra, Baran Road, Kota.</p>
            <p>📧 info@vpskota.co.in</p>
            <p>📞 7340065179, 7340065179</p>

            <div className="social-links">
              <a href="https://www.facebook.com/people/Vidyashram-Public-School/100063848952012/"><FaFacebookF /></a>
              <a href="https://www.instagram.com/vidyashrampublicschool/"><FaInstagram /></a>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="footer-bottom">
          <p>© 2025 Vidyashram Public School, Kota — All Rights Reserved</p>
        </div>

      </div>
    </>
  );
}
