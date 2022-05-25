import React from 'react';
import { motion } from 'framer-motion';
import staffData from '../people/people.data';
import withRouter from '../../HOC/withRouter/withRouter';
import StaffItem from '../../components/staff-item/staff-item';
import "./staff.styles.scss";

const StaffVariant = () => ({
    initial:{
        opacity:0,
        y:"100vh",
    },
    end:{
        y:0,
        opacity:1,
        transition:{
            when:"beforeChildren", 
            staggerChildren:.4,
            ease:"linear",
            delay:0,
        }
    },
    leave:{
        opacity:0,
        y:"100vh",
        transition:{
            ease:"linear",
            delay:0.25,
        }
    }
})
const Staff = ({params}) => {
    const {staffId} = params;

    return (
        <motion.div className="staff"
        variants={StaffVariant()} 
        initial="initial"
        animate="end"
        exit="leave" 
        
        >
            <div className="staff__header">
                <h1>Our <span>Staffs</span></h1>
            </div>
            <div className="staff__content">
                {
                    staffData.filter(({id}) => id === +staffId).map( ({id,staffName,imgUrl,email,education,selectedPublications,researchInterests,honorsNAwards,staffLevel}) => {
                        return (
                        <StaffItem 
                            key={id}
                            staffName={staffName}
                            imgUrl={imgUrl}
                            email= {email}
                            staffLevel={staffLevel}
                            education = {education}
                            selectedPublications ={selectedPublications}
                            researchInterests ={researchInterests}
                            honorsNAwards={honorsNAwards}
                        />
                        )
                    })
                }
            </div>
        </motion.div>
    )
}

export default withRouter(Staff);