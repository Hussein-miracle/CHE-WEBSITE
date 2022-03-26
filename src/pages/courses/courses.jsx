import React,{useState} from 'react';
import coursesData from "./courses-data";
import {motion} from "framer-motion";
import CourseItem from '../../components/course-item/course-item';
import "./courses.styles.scss";

const Courses = () => {
  const courses = coursesData;

  const [courseList,setCourseList] = useState(courses["harmattan"]);

  const handleChange = (e) => {
    setCourseList(courses[e.target.value]);
  }


  return (
    <section className="courses">
      <div className="courses__header">
        <h1>Courses</h1>
      </div>

      <div className="courses__select">
        <select id="courses__select-id" name="courses"
          className="courses__select--options"
          onChange={handleChange}>
          <option value="harmattan" >Harmattan Semester Courses</option>
          <option value="rain">Rain Semester Courses</option>
          <option value="postGraduates">Post Graduate Courses</option>

        </select>
        <span 
        
        className="courses__select--btn"></span>

      </div>

      <div className="courses__container">
        <div className="courses__container--header">
          <h4>COURSE CODE</h4>
          <h4>COURSE TITLE</h4>
          <h4>UNIT</h4>
        </div>


        <div className="courses__list">
          {
            courseList.map( ({id,courseCode,unit,courseTitle}) =>  <CourseItem courseCode={courseCode} unit={unit} courseTitle={courseTitle} key={id} />)
          }
        </div>
      </div>
    </section>
  )
}

export default Courses;