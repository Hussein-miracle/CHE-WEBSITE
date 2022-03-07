import React from 'react';
import "./course-item.styles.scss";

const CourseItem = ({unit,courseTitle,courseCode}) => {
    return (
        <div className="course-item">
            <h4>{`${courseCode}`}</h4>
            <h4>{`${courseTitle}`}</h4>
            <h4>{`${unit}`}</h4>
        </div>
    )
}

export default CourseItem;