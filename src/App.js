import React from "react";
import {Routes,Route} from "react-router-dom";

import Header from "./pages/header/header";
import Homepage from "./pages/homepage/homepage";
import Footer from "./pages/footer/footer";

import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Homepage/>}/>


      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
