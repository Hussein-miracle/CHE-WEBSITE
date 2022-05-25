import React,{useState , useEffect} from 'react';
import coursesData from "./courses-data";
import {motion, useAnimation} from "framer-motion";
import { useInView } from 'react-intersection-observer';
import { useCustomAnimate } from '../../custom-hooks/animation-hooks';
import CourseItem from '../../components/course-item/course-item';
import "./courses.styles.scss";
const CoursesVariants = () => ({
    initial:{
        opacity:0,
        y:"-100vh",
    },
    end:{
        y:0,
        opacity:1,
        transition:{

            type:"spring",
            damping:30,
            when:"beforeChildren"
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
const CoursesItemContainerVariants = () => ({
    initial:{
        opacity:0,
        y:"-100vh",
    },
    end:{
        y:0,
        opacity:1,
        transition:{
            delay:.05,
            type:"spring",
            damping:30,
            when:"beforeChildren",
            staggerChildren:0.5,
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
const selectVariant = () => ({
    initial:{
        opacity:0,
        x:"-100vw",
    },
    end:{
        x:0,
        opacity:1,
        transition:{
            delay:.05,
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
const Courses = () => {
  const {ref: itemRef  } = useCustomAnimate(0.2,'initial','end');
  const courses = coursesData;

  const controls = useAnimation(); 
  const {ref , inView} = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    if(inView){
      controls.start('end');
    }
    if(!inView) controls.start('leave');
    
    // console.log('useEffect Hook, inView=',inView);
  }, [inView,controls])
  

  const [courseList,setCourseList] = useState(courses["harmattan"]);


  const handleChange = (e) => {
    setCourseList(courses[e.target.value]);
  }


  return (
    <motion.section className="courses"
        variants={CoursesVariants()}
        initial="initial"
        animate="end"
        exit="leave" 
    >
      <div className="courses__header">
        <h1>Courses</h1>
      </div>

      <motion.div className="courses__select" 
        variants={selectVariant()}
        initial="initial"
        animate="end"
        exit="leave" 
      >
        <select id="courses__select-id" name="courses"
          className="courses__select--options"
          onChange={handleChange}>
          <option value="harmattan" >Harmattan Semester Courses</option>
          <option value="rain">Rain Semester Courses</option>
          <option value="postGraduates">Post Graduate Courses</option>

        </select>
        <span 
        
        className="courses__select--btn"></span>

      </motion.div>

      <motion.div 
          className="courses__container">
        <div className="courses__container--header">
          <h4>COURSE CODE</h4>
          <h4>COURSE TITLE</h4>
          <h4>UNIT</h4>
        </div>


        <motion.div className="courses__list"
        variants={CoursesItemContainerVariants()}
        ref={ref}
        initial="initial"
        animate={controls}
        exit="leave"
        >


          {
            courseList.map( ({id,courseCode,unit,courseTitle},i) =>  <CourseItem courseCode={courseCode} unit={unit} courseTitle={courseTitle} key={id} index={i}  itemRef={itemRef} />
            ) 
          }
        </motion.div>
      </motion.div>
    </motion.section>
  )
}

export default Courses;