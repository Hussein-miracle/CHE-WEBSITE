import React from 'react'; 
import {Link} from "react-router-dom";


import staffData from './people.data';
import StaffCard from '../../components/staff-card/staff-card.component';

import "./people.styles.scss";


const People = () => {
  return (
    <div className="people">
      <div className="people__header">
          <h1>Our <span>Staffs</span></h1>
      </div>
      <div className="people__content">
      {
        staffData.map( ({id,imgUrl,staffLevel,staffName}) => 
        <Link key={id} to={`/people/staff-${id}`}>
          <StaffCard 
          imgTitle={staffName} 
          imgUrl={imgUrl}
          staffLevel={staffLevel} 
          staffName={staffName}/>
        </Link>
        )
      }
      </div>
    </div>
  )
}

export default People;