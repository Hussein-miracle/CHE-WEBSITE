import React,{useState} from "react";
import {Routes,Route} from "react-router-dom";

import Header from "./pages/header/header";
import Homepage from "./pages/homepage/homepage";
import AboutUs from "./pages/about-us/about-us";
import News from "./pages/news/news";
import People from "./pages/people/people";
import Courses from "./pages/courses/courses";
import Resources from "./pages/resources/resources";
import Projects from "./pages/projects/projects";
import ContactUs from "./pages/contact-us/contact-us";
import Footer from "./pages/footer/footer";
import MobileNav from "./pages/mobile-nav/mobile-nav";


import SingleNews from "./pages/single-news/singleNews";
import SingleBlog from "./pages/single-blog/singleBlog";
import Staff from "./pages/staff/staff";

import './App.css';

function App() {
  const [showMobileNav ,setShowMobileNav] = useState(false);
  return (
    <div className="App">
    
      <Header showMobileNav={showMobileNav} setShowMobileNav={setShowMobileNav}/>
      {showMobileNav? <MobileNav setShowMobileNav={setShowMobileNav}/> :null}
        <Routes>
          <Route path="/" exact element={<Homepage />} />
          <Route path="/about-us" exact element= {<AboutUs/>} />
          <Route path="/news-&-blog" exact element= {<News/>} />
          <Route path="/people" exact element= {<People/>} />
          <Route path="/people/staff-:staffId" exact element= {<Staff/>} />
          <Route path="/contact-us" exact element= {<ContactUs/>} />
          <Route path="/courses" exact element= {<Courses/>} />
          <Route path="/projects" exact element= {<Projects/>} />
          <Route path="/resources" exact element= {<Resources/>} />
          <Route path="/singleNews" exact element= {<SingleNews/>} />
          <Route path="/singleBlog" exact element= {<SingleBlog/>} />
        </Routes>

      <Footer/>
    </div>
  );
}

export default App;
