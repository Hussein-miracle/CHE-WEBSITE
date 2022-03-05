import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//Import the pages 
import Home from './pages/home.jsx';
import About from './pages/about.jsx';

//import the navbar component into all pages
import Navbar from "./components/navbar";


function App() {

  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" exact element={<About/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
