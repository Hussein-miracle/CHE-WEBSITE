import React from 'react'
import {ReactComponent as  WorkInProgress} from "../../assets/images/undraw_work_in_progress.svg";
import "./contact-us.scss";


const ContactUs = () => {
  return (
    <div className="contact-us">
        <div className="contact-us__header">
         <h1>Contact  Us </h1>
        </div>

      <div className="contact-us__content">
        <h5>Work in progress</h5>
        <WorkInProgress className="icon-progress"/>
      </div>

    </div>
  )
}

export default ContactUs; 