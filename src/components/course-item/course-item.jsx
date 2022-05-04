import React from 'react';
import { motion } from 'framer-motion';
import "./course-item.styles.scss";

const CourseVariants = (i) => ({
    initial:{
        opacity:0,
        y:"100vh",
    },
    end:{
        y:0,
        opacity:1,
        transition:{
            ease:"linear",
            delay:i * 0.25,
            type:"spring",
            damping:20
        }
    },
    leave:{
        y:"-100vh",
        transition:{
            ease:"linear",
            delay:0.25,
        }
    }
})

const CourseItem = ({unit,courseTitle,courseCode,index}) => {
    return (
        <motion.div className="course-item"
        variants={CourseVariants(index)}
        initial="initial"
        animate="end"
        exit="leave"
        >
            <h4>{`${courseCode}`}</h4>
            <h4>{`${courseTitle}`}</h4>
            <h4>{`${unit}`}</h4>
        </motion.div>
    )
}

export default CourseItem;