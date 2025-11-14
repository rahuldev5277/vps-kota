import React from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faMessage } from "@fortawesome/free-regular-svg-icons";

export default function Navbar() {
  return (
    <nav className="navbar">

        {/* ---- Logo Section ---- */}
        <div className="logo_section">
          <figure className="logo">
            <img 
              src="/assets/logo.webp" 
              alt="Vidyashram Public School Logo" 
            />
          </figure>
        </div>

        {/* ---- Contact Section ---- */}
        <div className="contact_section">
          <a href="mailto:info@vidyashram.com" className="contact_item">
            <FontAwesomeIcon icon={faMessage} className="icon" />
            info@vidyashram.com
          </a>

          <a href="tel:+917340065179" className="contact_item">
            <FontAwesomeIcon icon={faPhone} className="icon" />
            +91 734 006 5179
          </a>
        </div>

     
    </nav>
  );
}
