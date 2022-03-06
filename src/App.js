import React,{useState} from "react";
import {Routes,Route} from "react-router-dom";

import Header from "./pages/header/header";
import Homepage from "./pages/homepage/homepage";
import AboutUs from "./pages/about-us/about-us";
import Footer from "./pages/footer/footer";
// import Navbar from "./pages/navbar/navbar";
import MobileNav from "./pages/mobile-nav/mobile-nav";
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
        </Routes>

      <Footer/>
    </div>
  );
}

export default App;
