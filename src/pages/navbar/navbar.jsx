import React,{ useState } from "react"
import "./navbar.css";

//import the brands logos
import { useLocation } from "react-router-dom"

const Navbar = () => {
    const [menuControl, setMenuControl] = useState("open")
    const location = useLocation()

    const handleMenuControl = () => {
        (menuControl === "open") ? setMenuControl("close") : setMenuControl("open")
    }

    return (
        <div className="navigation">
            {/* <div className="brands"> 
                <img className="oau_logo" src={OAU_logo} alt="OAU_logo" width={40} height={40}/>
                <img className="nsche_logo" src={NSCHE_logo} alt="NSCHE_logo" width={60} height={60}/>
            </div> */}

            <div className="links">
                <div className="navicon"
                onClick={() => handleMenuControl()}>=</div>

                <ul className={menuControl}>

                    <li><a href="/" className={(location.pathname === "/")? "active": ""}>Home</a></li>

                    <li><a href="/about-us" className={(location.pathname === "/about-us")? "active": ""}>About us</a></li>

                    <li><a href="/about-us" className={(location.pathname === "/people")? "active": ""}>People</a></li>

                    <li><a href="/about-us" className={(location.pathname === "/courses")? "active": ""}>Courses</a></li>

                    <li><a href="/about-us" className={(location.pathname === "/projects")? "active": ""}>Projects</a></li>

                    <li><a href="/about-us" className={(location.pathname === "/resources")? "active": ""}>Resources</a></li>

                    <li><a href="/news-&-blog" className={(location.pathname === "/news-&-blog")? "active": ""}>News &amp; Blog</a></li>

                    <li><a href="/about-us" className={(location.pathname === "/contact")? "active": ""}>Contact us</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;