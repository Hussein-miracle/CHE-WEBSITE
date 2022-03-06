<<<<<<< HEAD
import React from "react";
import {Routes,Route} from "react-router-dom";

import Header from "./pages/header/header";
import Homepage from "./pages/homepage/homepage";
import Footer from "./pages/footer/footer";

import './App.css';
=======
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//Import the pages 
import Home from './pages/home.jsx';
import About from './pages/about.jsx';

//import the navbar component into all pages
import Navbar from "./components/navbar";

>>>>>>> e870c09ca48238266b320d87143cfab04efacc0c

function App() {

  return (
    <div className="App">
<<<<<<< HEAD
      <Header/>
      <Routes>
        <Route path="/" element={<Homepage/>}/>


      </Routes>
      <Footer/>
=======
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" exact element={<About/>} />
        </Routes>
      </Router>
>>>>>>> e870c09ca48238266b320d87143cfab04efacc0c
    </div>
  );
}

export default App;
