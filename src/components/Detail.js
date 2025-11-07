import React from 'react'
import "../App.css";

export default function Detail() {
  return (
    <div>
      {/* <!--division_4--> */}
    <div className="divisions division_4" onmousemove="animate_balls(event)">
        <div className="title_header">
            <h2 className="title medium">We promise best future for your kids</h2>
            <p>At Vidyashram Public School, we believe that meaningful learning goes beyond books and layouts — our focus is on creating engaging and thoughtful experiences that inspire every student.</p>
            <aside className="fixed_flex">
                {/* <a href="/" className="btn btn_1">Explore more</a> */}
                {/* <i className="fa fa-angle-right"></i> */}
                {/* <a href="javascript:void(0)">Gallery Portfolio</a> */}
            </aside>
        </div>
        <div className="cards">
            <span className="ball"></span>
            <span className="ball"></span>
            <span className="ball"></span>
            <span className="ball"></span>
            <section className="fixed_flex">
                <figure className="flex_content">
                    <img src="https://i.postimg.cc/0yF7CRkX/01.jpg" alt="" loading="lazy" />
                </figure>
                <figure className="flex_content">
                    <img src="https://i.postimg.cc/wBNLff3q/02.jpg" alt="" loading="lazy" />
                </figure>
                <figure className="flex_content">
                    <img src="https://i.postimg.cc/7hK2GjtV/03.jpg" alt="" loading="lazy" />
                </figure>
                <figure className="flex_content">
                    <img src="https://i.postimg.cc/tCgPQC7m/04.jpg" alt="" loading="lazy" />
                </figure>
            </section>
        </div>
    </div>
    </div>
  )
}
