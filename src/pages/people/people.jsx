import React from 'react'; 
import {Link} from "react-router-dom";
import {motion} from "framer-motion"

import staffData from './people.data';
import StaffCard from '../../components/staff-card/staff-card.component';

import "./people.styles.scss";

const PeopleVariants = () => ({
    initial:{
        opacity:0,
        y:"-100vh",
    },
    end:{
        y:0,
        opacity:1,
        transition:{
          when:"beforeChildren",
            delay:.005,
            type:"spring",
            damping:30
        }
    },
    leave:{
        opacity:0,
        y:"100vh",
        transition:{
            ease:"easeInOut",
            duration:1
        }
    }
})

const cardVariant = (i) => ({
    initial:{
        opacity:0,
        x:"-100vw",
    },
    end:{
        x:0,
        opacity:1,
        transition:{
            delay:i * .05,
            type:"spring",
            damping:30
        }
    },
    leave:{
        opacity:0,
        x:"100vw",
        transition:{
            ease:"easeInOut",
            duration:1
        }
    }
})
const People = () => {
  return (
    <motion.div className="people" 
    variants={PeopleVariants()}
        initial="initial"
        animate="end"
        exit="leave"
    >
      <div className="people__header">
          <h1>Our <span>Staffs</span></h1>
      </div>
      <div className="people__content">
      {
        staffData.map( ({id,imgUrl,staffLevel,staffName},i) => 
        <Link key={id} to={`/people/staff-${id}`}>
          <StaffCard 
          imgTitle={staffName} 
          variants={cardVariant(i)}
          imgUrl={imgUrl}
          staffLevel={staffLevel} 
          staffName={staffName}/>

        </Link>
        )
      }
      </div>
    </motion.div>
  )
}

export default People;