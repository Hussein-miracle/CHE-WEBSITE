import React from 'react';
import { NavLink } from 'react-router-dom';
// import PropTypes from 'prop-types'
import NSCHELogo from "../../assets/images/NSChE logo.png"
import OAULogo from "../../assets/images/OAU logo.png"
import "./header.styles.scss";

const Header =  ()=> {
    
    return (
        
            <header className="header">
                <div className="header__logos">
                    <img className="header__logo--item" src={`${OAULogo}`} alt="OAU Logo"/>

                    <img className="header__logo--item" src={`${NSCHELogo}`} alt="Nsche Logo"/>
                    
                </div>
                <nav  className="header__nav">
                    <ul className="header__nav--items-container">
                        <li className="header__nav--item">


                            <NavLink activeclassname="active" className="link" to="/">Home</NavLink>
                        
                        </li>
                        <li className="header__nav--item">

                            <NavLink
                            activeclassname="active"
                            className="link"  to="about-us">About Us</NavLink>

                        </li>
                        <li className="header__nav--item">

                            <NavLink 
                            activeclassname="active"
                            className="link" to="people">People</NavLink>

                        </li>
                        <li className="header__nav--item">

                            <NavLink 
                            activeclassname="active"
                            className="link" to="courses">Courses</NavLink>

                        </li>
                        <li className="header__nav--item">
                            <NavLink 
                            activeclassname="active"
                            className="link" to="projects">Projects</NavLink>
                        </li>
                        <li className="header__nav--item">
                            <NavLink activeclassname="active"
                            className="link"  to="resources">Resources</NavLink>
                        </li>
                        <li className="header__nav--item">
                            <NavLink
                            activeclassname="active"
                            className="link"  to="news-&-blog">News & Blog</NavLink>
                        </li>
                        <li className="header__nav--item">
                            <NavLink 
                            activeclassname="active"
                            className="link" to="contact-us">Contact Us</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        
    )
}

// homepage.component.propTypes = {}

export default Header;