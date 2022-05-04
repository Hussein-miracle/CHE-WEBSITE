import React from 'react';
import {motion} from "framer-motion"
import "./staff-card.styles.scss";

const StaffCard = ({imgUrl,staffLevel,staffName,variants}) => {
  return (
    <motion.div className="staff-card"
      variants={variants}
        initial="initial"
        animate="end"
        exit="leave"
        whileFocus={{
          scale:1.5
        }}
    >
      
        <img 
        className="staff-card__img"
        src={`${imgUrl}`} alt={staffName} />

        <div className="staff-card__info">
            <h4 className="staff-card__name">{staffName}</h4>
            <h5 className="staff-card__level">{staffLevel}</h5>
        </div>
    </motion.div>
  )
}

export default StaffCard;