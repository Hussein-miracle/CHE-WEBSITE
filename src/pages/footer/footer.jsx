import React from 'react';
import {Link} from "react-router-dom";
import NscheLogo from "../../assets/images/NSChE logo.svg";
import OAULogo from "../../assets/images/OAU logo.svg";
import "./footer.styles.scss";


const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__content">
          <div className="footer__content--intro">
            <div className="footer__content--intro__logos">
              <img src={`${NscheLogo}`} alt="NSChE Logo"/>
              <img src={`${OAULogo}`} alt="OAU Logo"/>
            </div>
            <div className="footer__content--intro__titles">
              <h3>Department Of Chemical Engineering,</h3>
              <h3>Faculty Of Technology,</h3>
              <h3>Obafemi Awolowo University, Ile-Ife.</h3>
            </div>

            
          </div>

          <div className="footer__content--navigations">
            <h2 className="footer__content--navigations__title">Navigations</h2>
              <ul className="footer__content--navigations__items">
                <li><Link to="/">Home </Link> </li>
                <li> <Link to="/about-us">About Us</Link></li>
                <li><Link to="/people">Staffs</Link></li>
                <li><Link to="/resources" >Handbook</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/resources" >Resources</Link></li>
                <li><Link to="/news-&-blog">News and Blog</Link></li>
                <li><Link to="/contact-us">Contact Us</Link></li>

              </ul>
          </div>
          
          <div className="footer__content--useful-links">
            <h2  className="footer__content--useful-links__title">Useful Links</h2>
            <ul className="footer__content--useful-links__items">
              <li>OAU Website</li>
              <li>Eportal</li>
              <li>Site Map</li>
              <li>Internal Login</li>
              <li>NSChE Website</li>
              <li>AIChE Website</li>
          </ul>
          </div>
        </div>

        <div className="footer__base">
          <p>Copyright @ 2022 IfeCHEMICAL. All rights reserved.</p>
        </div>
    </footer>
  )
}

export default Footer;