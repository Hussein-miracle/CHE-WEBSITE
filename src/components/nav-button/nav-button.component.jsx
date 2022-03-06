import React from "react";
import {motion} from "framer-motion";
import "./nav-button.styles.scss";

const NavButton = ({setShowMobileNav}) => {
    return (
        <div className="nav__btn" 
        onClick={() => setShowMobileNav(true)}>

            <svg className="nav__btn--icon" fill="#fff" version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <title>menu</title>
            <path d="M19 17h-14c-1.103 0-2 0.897-2 2s0.897 2 2 2h14c1.103 0 2-0.897 2-2s-0.897-2-2-2z"></path>
            <path  d="M19 10h-14c-1.103 0-2 0.897-2 2s0.897 2 2 2h14c1.103 0 2-0.897 2-2s-0.897-2-2-2z"></path>
            <path d="M19 3h-14c-1.103 0-2 0.897-2 2s0.897 2 2 2h14c1.103 0 2-0.897 2-2s-0.897-2-2-2z"></path>
            </svg>

        </div>
    )
}

export default NavButton;