import React from 'react'
import "./staff-card.styles.scss";

const StaffCard = ({imgUrl,staffLevel,staffName}) => {
  return (
    <div className="staff-card">

        <img 
        className="staff-card__img"
        src={`${imgUrl}`} alt={staffName} />

        <div className="staff-card__info">
            <h4 className="staff-card__name">{staffName}</h4>
            <h5 className="staff-card__level">{staffLevel}</h5>
        </div>
    </div>
  )
}

export default StaffCard;