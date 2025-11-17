import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { FaStar } from 'react-icons/fa';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import "./Testimonials.css"


const testimonials = [
  {
      name: 'Rahul Sharma',
      role: 'Businessman',
      text: 'Vidyashram Public School, Kota, has been instrumental in shaping my personality. The school emphasizes holistic development, combining academics, sports, and cultural activities. The teachers are supportive and inspire students to achieve excellence in every field.',
      image: 'assets/testimonial/1.avif',
      rating: 5
  },
  {
      name: 'Neha Verma',
      role: 'Teacher',
      text: 'Teaching at Vidyashram Public School, Kota, has been a truly rewarding experience. The school fosters a collaborative environment, encourages innovative teaching methods, and supports both students and staff in achieving their full potential.',
      image: 'assets/testimonial/2.webp',
      rating: 5
  },
  {
      name: 'Arjun Mehta',
      role: 'Alumnus',
      text: 'Vidyashram Public School, Kota, provided me with a strong academic foundation and opportunities to explore my interests beyond the classroom. The guidance from teachers and participation in co-curricular activities helped shape my confidence and skills for the future.',
      image: 'assets/testimonial/3.jpg',
      rating: 5
  },
  {
      name: 'Prakesh Sharma',
      role: 'Human Resources Professional',
      text: 'Vidyashram Public School, Kota, helped me grow not just academically but also personally. The school encourages teamwork, leadership, and overall development, preparing students for real-world challenges with confidence.',
      image: 'assets/testimonial/4.jpg',
      rating: 5
  },
  {
      name: 'Aman Gupta',
      role: 'Bank Manager',
      text: 'Vidyashram Public School, Kota, provided an excellent learning environment with dedicated teachers and a vibrant campus. The school’s focus on academics, sports, and cultural activities helped me develop skills that I still use in my professional life.',
      image: 'assets/testimonial/5.jpg',
      rating: 5
  },
];

const TestimonialSlider = () => {
  return (
    <div className="w-full flex flex-col items-center pt-10 bg-white px-0 md:px-36">
     
      <div className="flex justify-center">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#060606] mb-4 border-b-[4px] border-[#ee4500] py-1">
          What Our Parents Say
        </h2>
      </div>
      <p className="mt-2 text-center text-[#0b0914] text-base md:text-3xl py-2 px-2 md:px-8 border-2 rounded-3xl border-[#0b0914] inline-block font-[500]">
        Hear from Our Successful Graduates
      </p>

      <div className="relative w-full md:pl-[100px] pl-[60px] pr-[60px] md:pr-[100px] mt-6">
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: '.next-button',
            prevEl: '.prev-button',
          }}
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index} className="relatave pb-24">
              {/* <div
                className="bg-cover bg-center pl-[40px]"
                style={{ backgroundImage: 'url(/assets/msgIcon-3.png)' }}
              > */}
              <div className="pt-7 pr-7 flex">
                <div className="bg-transparent border-4 border-black rounded-lg pl-3 md:pl-7 pb-3 md:pb-7 relative shadow-xl">
                  <div className="absolute bottom-[-90px] right-[20px]">
                    <svg
                      viewBox="0 0 200 90"
                      width="200"
                      height="90"
                      className="stroke-[#0b0b24] fill-white stroke-[4px]"
                    >
                      <path
                        d="m0 0h110.4v59.6l51.1-59.6h50"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                  <div className="relative bg-[#0b0b24] text-white p-6 rounded-lg shadow-xl flex flex-col items-start mt-[-1.7rem] mr-[-1.7rem]">
                    <div className="flex w-full justify-center md:justify-between items-center gap-4">
                      <div>
                        <div className="flex justify-center w-full md:hidden">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-28 h-28 md:w-32 md:h-32 rounded-full border-2 object-cover border-white"
                          />
                        </div>
                        {/* <h3 className="text-lg font-bold bg-white text-black px-2 py-1 pr-10">
                      {item.name}
                    </h3> */}
                        <div className="mt-4 flex">
                          <h3 className="inline-block bg-white text-lg text-black py-2 px-4 pr-10 md:pr-14 font-bold rounded-md relative">
                            {item.name}
                            <span className="absolute top-0 -right-2 w-5 h-full bg-white skew-x-[-162deg] rounded-tr-md rounded-br-md"></span>
                          </h3>
                        </div>
                        <p className="text-lg pl-4 pt-1 font-semibold">
                          {item.role}
                        </p>
                      </div>
                      <div className="top-6  absolute right-6 hidden md:block">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-28 h-28 md:w-32 md:h-32 rounded-full border-2 object-cover border-white"
                        />
                      </div>
                    </div>
                    <p className="mt-4 min-h-24 text-sm md:text-2xl w-full md:w-4/5 leading-relaxed">
                      {item.text}
                    </p>
                    <div className="flex justify-center md:justify-end w-full text-2xl gap-1 mt-4 text-yellow-400">
                      {[...Array(item.rating)].map((_, i) => (
                        <FaStar key={i} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              {/* </div> */}
            </SwiperSlide>
          ))}
        </Swiper>

        <button className="prev-button absolute left-[15px] md:left-[40px] top-1/2 transform -translate-y-1/2 text-white bg-yellow-500 rounded-[100%] p-2">
          <FaChevronLeft size={25} />
        </button>
        <button className="next-button absolute right-[15px] md:right-[40px] top-1/2 transform -translate-y-1/2 text-white bg-yellow-500 rounded-[100%] p-2">
          <FaChevronRight size={25} />
        </button>
      </div>
    </div>
  );
};

export default TestimonialSlider;