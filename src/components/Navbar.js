import React from 'react'
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocation, faPhone, faVoicemail } from "@fortawesome/free-solid-svg-icons";
import { faMessage } from "@fortawesome/free-regular-svg-icons";

export default function Navbar() {
  return (
    <div>
      {/* <!--TOP MENU--> */}
{/* <menu className="top_menu flex">
    <section className="flex_content">
        <a href="emailto:info@lilliovi.com">
            <i className="fa fa-envelope-o"></i>
            info@lilliovi.com
        </a>
        <a href="tel:1234567890">
            <i className="fa fa-headphones"></i>
            +91 734 006 5179
        </a>
    </section>
   
</menu> 

{/* <!--NAV--> */}
<nav>
    <section className="header_top">
  <div className="flex_content logo_section">
    <figure className="logo">
      <img src="/assets/logo.webp" alt="Vidyashram Public School Logo" />
      {/* <figcaption>
          <strong className="title">Vidyashram</strong> Public School
      </figcaption> */}
    </figure>
  </div>

   {/* <section className="flex_content">
        <a href="#" title="Facebook"><i className="fa fa-facebook"></i></a>
        <a href="#" title="Instagram"><i className="fa fa-instagram"></i></a>
        <a href="#" title="Twitter"><i className="fa fa-twitter"></i></a>
        <a href="#" title="youtube"><i className="fa fa-youtube"></i></a>
    </section> */}

  <div className="flex_contents contact_section">
    <a href="mailto:info@vidyashram.com">
     <FontAwesomeIcon icon ={faMessage}/>
      info@vidyashram.com
    </a>
    <a href="tel:+917340065179">
       <FontAwesomeIcon icon ={faPhone}/>
      +91 734 006 5179
    </a>
  </div>
</section>

    {/* <section className="flex_content nav_content" id="nav_content">
        <a href="#" className="active">Home</a>
        <a href="#gallery">Gallery</a>
        <a href="#blogs">Blogs</a>
        <a href="javascript:void(0)" className="contact_btn">Contact us</a>
        <a href="#about">About us</a>
    </section> */}
    {/* <section className="flex_content">
        <a href="javascript:void(0)" className="ham"><i className="fa fa-bars"></i></a>
    </section> */}
</nav>

{/* <!--MENU--> */}
{/* <menu id="menu" className="side_menu">
    <a href="javascript:void(0)" className="close"><i className="fa fa-times"></i></a>
    <strong className="fixed_flex logo"><img src="https://i.postimg.cc/02NrFwT5/canva.png" alt="Summit"  loading="lazy" /></strong>
    <br/>
    <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Basic Parameters</a></li>
        <li><a href="#">Notifications</a></li>
        <li><a href="#">Events</a></li>
        <li><a href="#">Features</a></li>
        <li className="dropdown">
            <a href="javascript:void(0)">Mandatory Disclosure</a>
            <aside>
                <a href="#">Society registration</a>
                <a href="#">NOC</a>
            </aside>
        </li>
        <li><a href="#">About us</a></li>
        <li className="fixed_flex"><a href="javascript:void(0)" className="btn btn_1 chat_popup">SignUp/LogIn</a> <a href="#" className="btn btn_2 chat_popup">Admission</a> </li>
    </ul>
</menu> */}
    
    </div>
  )
}
