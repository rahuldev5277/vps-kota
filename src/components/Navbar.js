import React from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

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
          <a href="tel:07340065179" className="contact_item">
            <FontAwesomeIcon icon={faPhone} className="icon" />
            +91 7340065179
          </a>
        </div>

     
    </nav>
  );
}
