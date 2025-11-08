import React from 'react'
import"../App.css";

export default function Footer() {
  return (
    <div>
      <hr className="hr" />
      <footer className="padding_4x">
    <div className="top_footer flex">
        <section className="flex_content">
            <figure>
              <img src="/assets/principal.webp" alt="School Logo"/>
            </figure>
        </section>
        <section className="flex_content padding_2x">
            <h2 className="title medium">Principal Message</h2>
            <p>Dear Students, Parents, and Well-wishers,<br/>It is a privilege to lead Vidyashram Public School, a CBSE co-educational institution committed to the motto “Soaring to Excellence.” Here, education goes beyond classrooms—we nurture every child’s intellectual growth, character, and life skills, ensuring they are prepared not just for exams, but for the challenges of the future.<br/>With over 15 years of experience as a Principal, I am proud to see our school evolve into a place where academic excellence meets skill education. Our dedicated teachers provide individual attention, guiding students to discover their unique potential while fostering discipline, creativity, and compassion.</p>
        </section>
    </div>
  <div className="footer_body flex">
    <section className="flex_content padding_1x">
      <figure className="logo fixed_flex">
            <img src="/assets/logo.png" alt=""/>
            <figcaption>
                <strong className="title">Vidyashram </strong> Public School
            </figcaption>
        </figure>
      
    </section>
    <section className="flex_content padding_1x">
        <a href="#">
            <i className="fa fa-map-marker"></i>
           Vidya Vihar, Naya Nohra, Baran Road, Kota. 
        </a>
        <a href="emailto:info@vpskota.co.in">
            <i className="fa fa-envelope-o"></i>
           info@vpskota.co.in
        </a>
        <a href="tel:7340065179">
            <i className="fa fa-headphones"></i>
            7340065179, 7340066179
        </a>
      {/* <h3>Quick Links</h3>
      <a href="/">Admission</a>
      <a href="/">Prospectus</a>
      <a href="/">Student registration</a>
      <a href="/">Staff registration</a>
    </section>
    <section className="flex_content padding_1x">
      <h3>Other Links</h3>
      <a href="#about">About Us</a>
    <a href="#news&event">News & Evnts</a>
    <a href="#contact">Contact</a> */}
    </section>
    {/* <section className="flex_content padding_1x">
      <h3>Newsletter</h3>
      <p>You can trust us. we only send important notifications related to school.</p>
      <fieldset className="fixed_flex">
        <input type="email" name="newsletter" placeholder="Your Email Address"/>
        <button className="btn btn_2">Subscribe</button>
      </fieldset>
    </section> */}
  </div>
  <div className="flex">
    <section className="flex-content padding_1x">
      <p>Copyright © 2025 VPS KOTA</p>
    </section>
    <section className="flex-content padding_1x">
      <a href="https://www.facebook.com/people/Vidyashram-Public-School/100063848952012/" target='_blank'><i className="fa fa-facebook"></i></a>
      <a href="https://www.instagram.com/vidyashrampublicschool/" target='_blank'><i className="fa fa-instagram"></i></a>
      <a href="/"><i className="fa fa-twitter" target='_blank'></i></a>
      <a href="/"><i className="fa fa-linkedin" target='_blank'></i></a>
    </section>
  </div>
</footer>
    </div>
  )
}
