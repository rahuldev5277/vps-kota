import React from 'react'
import"../App.css";
export default function Header() {
  return (
    <div>
      {/* <!--HEADER--> */}
 <header
        id="contact"
        className="flex"
        style={{
          backgroundImage: "url('/assets/building-img.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          color: "white",
        }}
      >    <article>
        <h1 className="title big">Welcome to <br/><em>Vidyashram</em> Public School</h1>
        <p>At Vidyashram Public School, we believe in nurturing every child’s potential by blending ancient values with the demands of modern education. We strive to create a disciplined, safe, and engaging learning environment where students become responsible, respectful, and resourceful individuals.</p>
        <a href="https://vpskota.co.in/" target="_blank" className="btn btn_3">Explore more</a> 
    </article>

    {/* ENQUERY FORM */}
    <aside className="contact-form-container">
        <h2>Contact Us</h2>
        <form className="contact-form">
        <label>
            Full Name
            <input type="text" name="name" placeholder="Enter your name" required />
        </label>
        <label>
            Email
            <input type="email" name="email" placeholder="Enter your email" required />
        </label>
        <label>
            Message
            <textarea name="message" rows="4" placeholder="Your message..." required></textarea>
        </label>
        <button type="submit" className="btn btn_3">Send Message</button>
        </form>
    </aside>

    <section className="flex">
        <aside className="padding_1x">
            <h2 className="sub_title">Admission</h2>
            <p>The prospective parents/guardians should first register their ward for the class in which admission is desired.</p>
            {/* <a href="#"><i className="fa fa-angle-right"></i></a> */}
        </aside>
        <aside className="padding_1x">
            <h2 className="sub_title">Prospectus</h2>
            <p>Vidyashram Public School is a center of excellence dedicated to nurturing young minds with knowledge, discipline, and values.</p>
            {/* <a href="#"><i className="fa fa-angle-right"></i></a> */}
        </aside>
        <aside className="padding_1x">
            <h2 className="sub_title">Features</h2>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
            {/* <a href="#"><i className="fa fa-angle-right"></i></a> */}
        </aside>
    </section>
</header>
    </div>
  )
}
