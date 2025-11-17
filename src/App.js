import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Infrastructure from "./components/Infrastructure";
import Events from "./components/Events";
import Detail from "./components/Detail";
import ProgramsSection from "./components/ProgramsSection";
import Highlights from "./components/Highlights";
import TestimonialSlider from "./components/TestimonialSlider";
import Admission from "./components/Admission";
import Form from "./components/Form";



function App() {
  return (
<>
  <body>

    <Navbar/>
    <Header/>
    <About/>
    <Admission/>
    <ProgramsSection/>
    <Events/>
    <Highlights/>
    <Infrastructure/>
    <TestimonialSlider/>
    
    <Detail/>
    <Footer/>
    {/* <Form/> */}

  </body>

	
    </>
  );
}

export default App;
