import React from 'react';
import { NavLink } from 'react-router-dom';

import "./mobile-nav.styles.scss";
const MobileNav = ({setShowMobileNav}) => {
    
    return (
    <div className="mobile-nav">
        <svg onClick={()=> setShowMobileNav(false)} className="mobile-nav__icon" fill="#fff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"/></svg>



        <ul className="mobile-nav__item--container"
        onClick={()=> setShowMobileNav(false)}
        >
                        <li className="mobile-nav__item">


                            <NavLink activeclassname="active" className="link" to="/">Home</NavLink>
                        
                        </li>
                        <li className="mobile-nav__item">

                            <NavLink
                            activeclassname="active"
                            className="link"  to="about-us">About Us</NavLink>

                        </li>
                        <li className="mobile-nav__item">

                            <NavLink 
                            activeclassname="active"
                            className="link" to="people">People</NavLink>

                        </li>
                        <li className="mobile-nav__item">

                            <NavLink 
                            activeclassname="active"
                            className="link" to="courses">Courses</NavLink>

                        </li>
                        <li className="mobile-nav__item">
                            <NavLink 
                            activeclassname="active"
                            className="link" to="projects">Projects</NavLink>
                        </li>
                        <li className="mobile-nav__item">
                            <NavLink activeclassname="active"
                            className="link"  to="resources">Resources</NavLink>
                        </li>
                        <li className="mobile-nav__item">
                            <NavLink
                            activeclassname="active"
                            className="link"  to="news-&-blog">News & Blog</NavLink>
                        </li>
                        <li className="mobile-nav__item">
                            <NavLink 
                            activeclassname="active"
                            className="link" to="contact-us">Contact Us</NavLink>
                        </li>
        </ul>
    </div>
  )
}

export default MobileNav;