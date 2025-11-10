import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <>
      

    <footer className="footer padding_3x">
          {/* ===== Top Section: Principal Message ===== */}
      <div className="top_footer flex">
        <section className="flex_content principal_img">
          <figure>
            <img src="/assets/principal.webp" alt="Principal" />
          </figure>
        </section>

        <section className="flex_content principal_msg padding_2x">
          <h2 className="title medium">Principal’s Message</h2>
          <p>
            Dear Students, Parents, and Well-wishers,<br />
            It is a privilege to lead Vidyashram Public School, a CBSE
            co-educational institution committed to the motto “Soaring to
            Excellence.” Here, education goes beyond classrooms — we nurture
            every child’s intellectual growth, character, and life skills.
            <br />
            With over 15 years of experience as a Principal, I am proud to see
            our school evolve into a place where academic excellence meets
            skill education.
          </p>
        </section>
      </div>
      {/* ===== Footer Body ===== */}
      <div className="footer_body flex">
        {/* Left - Logo */}
        <section className="flex_content padding_1x left_footer">
          <figure className="logo fixed_flex">
            <img src="/assets/logo.png" alt="School Logo" />
            <figcaption>
              <strong className="title">Vidyashram</strong> Public School
            </figcaption>
          </figure>
        </section>

        {/* Right - Contact Info */}
       
      </div>
      <div className="footer_info"> 
         <section className="flex_content padding_1x right_footer">
          <a href="#">
            <i className="fa fa-map-marker"></i> Vidya Vihar, Naya Nohra,<br/> Baran
            Road, Kota.
          </a>
          <a href="mailto:info@vpskota.co.in">
            <i className="fa fa-envelope-o"></i> info@vpskota.co.in
          </a>
          <a href="tel:7340065179">
            <i className="fa fa-headphones"></i> 7340065179, 7340066179
          </a>
        </section>
      </div>

      {/* ===== Bottom Section ===== */}
      <div className="footer_bottom flex">
        <section className="flex-content padding_1x">
          <p>© 2025 Vidyashram Public School, Kota — All Rights Reserved</p>
        </section>
        <section className="flex-content padding_1x social_links">
          <a
            href="https://www.facebook.com/people/Vidyashram-Public-School/100063848952012/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa fa-facebook"></i>
          </a>
          <a
            href="https://www.instagram.com/vidyashrampublicschool/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa fa-instagram"></i>
          </a>
          <a href="/" target="_blank" rel="noreferrer">
            <i className="fa fa-twitter"></i>
          </a>
          <a href="/" target="_blank" rel="noreferrer">
            <i className="fa fa-linkedin"></i>
          </a>
        </section>
      </div>
    </footer>
    </>
  );
}
